import "./MasterSee.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import apply from "/images/aboutUs/apply.png";
import hiring from "/images/aboutUs/hiring.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Simplify from "../Simplify/Simplify";
import { useState, useEffect } from "react";
import FacilityModel from "./FacilityModel";
import { Paths } from "../../config/configAPI";
import axios from "axios";
const MastermindSeeAll = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState({});
  const [seeAllMastermind, setSeeAllMastermind] = useState([]);
  const [mastermindBanner, setMastermindBanner] = useState([]);
  const [setIsError] = useState("");
  const [proudNextians, setProudNextians] = useState([]);
  const [isExpanded, setIsExpanded] = useState([]);

  const openModal = (person) => {
    setSelectedFaculty(person);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const showAllMasterMind = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeMasterMind;
      const record = await axios.get(response, {
        headers: {
          "Content-type": "application/json",
        },
      });
      return record.data.data;
    } catch (error) {
      setIsError(error.msg);
      return [];
    }
  };

  const allMastermindBanner = async () => {
    try {
      const response = await Paths.EndpointsURL.MastermindBanner;
      const record = await axios.get(response, {
        headers: {
          "Content-type": "application/json",
        },
      });
      return record.data.data;
    } catch (error) {
      setIsError(error.msg);
      return [];
    }
  };

  const displayNextians = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeNextians;
      const record = await axios.get(response, {
        headers: {
          "Content-type": "application/json",
        },
      });
      return record.data.data;
    } catch (error) {
      setIsError(error.msg);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mastermindData, mastermindBannerData, nextiansData] =
          await Promise.all([
            showAllMasterMind(),
            allMastermindBanner(),
            displayNextians(),
          ]);

        setSeeAllMastermind(mastermindData);
        setMastermindBanner(mastermindBannerData);
        setProudNextians(nextiansData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);

  const handleToggleClick = (index) => {
    setIsExpanded((prevExpandedItems) => {
      const newExpandedItems = [...prevExpandedItems];
      newExpandedItems[index] = !newExpandedItems[index];
      return newExpandedItems;
    });
  };

  return (
    <>
      <section className="master_seeall_section">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".button-prev-slide",
            prevEl: ".button-next-slide",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {mastermindBanner.slice(0, 4).map((record) => {
            const { bannerHeading, bannerSubHeading, masterBanner } = record;
            return (
              <>
                <SwiperSlide>
                  <div className="master_seeall_slider">
                    <img src={masterBanner} alt="" />
                    <div className="container">
                      <div className="master_seeall_content">
                        <h1>{bannerHeading}</h1>
                        <p>{bannerSubHeading}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </section>

      <section className="master_faculty_section">
        <div className="container">
          <h2>Mastermind Faculty</h2>
          <p>
            Our Teaching Experts are here to guide you at every step of the
            preparation, enabling you to run the course well and crack the
            entrance exam.
          </p>

          <div>
            <div className="master_seeall_img">
              {seeAllMastermind.map((person, index) => {
                const { facilityName, facilityImage, specialization, subject } =
                  person;
                return (
                  <>
                    <div
                      key={index}
                      className="master_seeall_left_img"
                      onClick={() => openModal(person)}
                    >
                      <div className="master_background">
                        <img src={facilityImage} alt="" />
                      </div>
                      <div className="master_seeall_img_content">
                        <p className="master_seeall_name">{facilityName}</p>
                        <p className="master_seeall_designation">
                          {specialization}
                        </p>
                        <p className="master_seeall_study">{subject}</p>
                        <div className="readmore_dtn">
                          <button>Read More</button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            {/* Modal Component */}
            <FacilityModel
              isOpen={modalOpen}
              onClose={closeModal}
              person={selectedFaculty}
            />
          </div>
        </div>
      </section>

      <section className="doubt_section">
        <div className="container">
          <div className="parent_doubt">
            <div className="left_img_doubt">
              <img src={hiring} alt="" />
            </div>
            <div className="center_content_button">
              <div className="center_doubt_title">
                <p className="doubt_sub_title">Still have doubts?</p>
                <p>Read FAQs</p>
              </div>
              <div className="center_btn">
                <button>Know More</button>
              </div>
            </div>
            <div className="right_img_doubt">
              <img src={apply} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="ournextian_faculty_section">
        <div className="container">
          <div className="nextian_faculty_title">
            <div className="neaxtian_faculty_heading">
              <h3>What our learners say about Plan MSC</h3>
            </div>
            {/* <div className="nextian_faculty_btn">
              <button>See All</button>
            </div> */}
          </div>

          <div className="ournextian_faculty_section_slider">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              navigation={{
                nextEl: ".button-prev-slide",
                prevEl: ".button-next-slide",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              breakpoints={{
                // When window width is >= 768px
                300: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                // When window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // When window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              {proudNextians.map((record, index) => {
                const {
                  studentName,
                  passYear,
                  rank,
                  studentImage,
                  testimonial,
                } = record;
                return (
                  <>
                    <SwiperSlide key={index}>
                      <div className="ournextian_faculty_card">
                        <div className="ournextian_faculty_img">
                          <img src={studentImage} alt={studentName} />
                        </div>
                        <div className="ournextian_faculty_title">
                          <h4>{studentName}</h4>
                          <span style={{ fontWeight: "bold" }}>{rank} </span>
                          <span>{passYear}</span>
                          <p>
                            {isExpanded[index]
                              ? testimonial
                              : // : `${testimonial.substring(0, 123)}...`}
                                `${testimonial.substring(0, 125)}...`}
                          </p>
                          <span
                            style={{
                              cursor: "pointer",
                              color: "red",
                              marginBottom: "10px",
                            }}
                            onClick={() => handleToggleClick(index)}
                          >
                            {isExpanded[index] ? "Show less" : "  Show More"}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}

              <div className="ournextian_faculty_button">
                <div className="button-prev-slide">
                  <IoIosArrowForward />
                </div>
                <div className="button-next-slide">
                  <IoIosArrowBack />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>

      <Simplify />
    </>
  );
};

export default MastermindSeeAll;
