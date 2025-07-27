import "./NextiansAll.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper/modules";
// import { SuccessNextian } from "./SuccessNextian";
import NextianModel from "./NextianModel";
import Simplify from "../Simplify/Simplify";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
const NextiansAll = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState({});
  const [proudNextians, setProudNextians] = useState([]);
  const [proudNextianBanner, setProudNextianBanner] = useState([]);
  const [setIsError] = useState("");
  const [isExpanded] = useState([]);

  const openModal = (person) => {
    setSelectedFaculty(person);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  //Nextinas Api Response
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

  //Nextinas Banner Api Response
  const displayNextiansBanner = async () => {
    try {
      const response = await Paths.EndpointsURL.NextiansBanner;
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

  //Logic for received data in parallel
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [nextiansData, nextiansBannerData] = await Promise.all([
          displayNextians(),
          displayNextiansBanner(),
        ]);

        setProudNextians(nextiansData);
        setProudNextianBanner(nextiansBannerData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {proudNextianBanner.map((banner, index) => {
        const { bannerHeading, bannerSubHeading, bannerImage } = banner;
        return (
          <>
            <section
              className="nextian_seeall_section"
              style={{ backgroundImage: `url(${bannerImage})` }}
              key={index}
            >
              <div className="container">
                <div className="nextian_seeall_parent">
                  <div className="nextian_seeall_left">
                    <h2>{bannerHeading}</h2>
                    <p>{bannerSubHeading}</p>
                  </div>

                  <div className="nextian_seeall_right">
                    <div className="nextian_seeall_right_slider">
                      <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        modules={[EffectCards, Autoplay]}
                        autoplay={{
                          delay: 2000,
                          disableOnInteraction: false,
                        }}
                        className="mySwiper"
                      >
                        {/* {proudNextians.map((person, index) => {
                          const { studentName, rank, passYear, studentImage } =
                            person;
                          return (
                            <>
                              <SwiperSlide key={index}>
                                <div className="nextian_slider_title_seeall">
                                  <div className="nextian_slider_subtitle">
                                    <p className="nextian_heading">
                                      {passYear}
                                    </p>
                                  </div>

                                  <div className="nextian_slider_parent_seeall">
                                    <div className="nextian_slider_seeall_img">
                                      <img src={studentImage} alt="" />
                                    </div>
                                    <div className="nextian_slider_seeall_content">
                                      <p className="nextian_name">
                                        {studentName}
                                      </p>
                                      <p className="nextian_rank">{rank}</p>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            </>
                          );
                        })} */}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}

      <section className="our_proud_nextian_section">
        <div className="container">
          <div className="our_proud_year">
            <div className="our_proud_nextian_title">
              <h3>NORCET 2024</h3>
            </div>
            <div className="our_proud_nextian_parent">
              {proudNextians.slice(0, 9).map((person, index) => {
                const {
                  studentName,
                  rank,
                  passYear,
                  studentImage,
                  testimonial,
                } = person;
                return (
                  <>
                    <div
                      key={index}
                      className="our_proud_nextian_card"
                      onClick={() => openModal(person)}
                    >
                      <div className="our_proud_nextian_img">
                        <img src={studentImage} alt="" />
                      </div>
                      <div className="our_proud_nextian_content">
                        <p className="our_proud_name">{studentName}</p>
                        <p className="our_proud_rank">
                          {rank} | {passYear}
                        </p>
                        {/* <p className="our_proud_rank"></p> */}
                        <p className="our_proud_view">
                          {" "}
                          {isExpanded[index]
                            ? testimonial
                            : `${testimonial.substring(0, 125)}...`}
                        </p>
                        <div className="proud_nextian_btn">
                          <button>Read More</button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            {/* Modal Component */}
            <NextianModel
              isOpen={modalOpen}
              onClose={closeModal}
              person={selectedFaculty}
            />
          </div>

          <div className="our_proud_year">
            <div className="our_proud_nextian_title">
              <h3>NORCET 2023</h3>
            </div>
            <div className="our_proud_nextian_parent">
              {proudNextians
                .slice(9, 16)
                .sort((a, b) => a.rank - b.rank)
                .map((person, index) => {
                  const {
                    studentName,
                    rank,
                    passYear,
                    studentImage,
                    testimonial,
                  } = person;
                  return (
                    <div
                      key={index}
                      className="our_proud_nextian_card"
                      onClick={() => openModal(person)}
                    >
                      <div className="our_proud_nextian_img">
                        <img src={studentImage} alt="" />
                      </div>
                      <div className="our_proud_nextian_content">
                        <p className="our_proud_name">{studentName}</p>
                        <p className="our_proud_rank">
                          {rank} | {passYear}
                        </p>
                        <p className="our_proud_view">
                          {isExpanded[index]
                            ? testimonial
                            : `${testimonial.substring(0, 110)}...`}
                        </p>
                        <div className="proud_nextian_btn">
                          <button>Read More</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Modal Component */}
            <NextianModel
              isOpen={modalOpen}
              onClose={closeModal}
              person={selectedFaculty}
            />
          </div>

          <div className="our_proud_year">
            <div className="our_proud_nextian_title">
              <h3>NORCET 2022</h3>
            </div>
            <div className="our_proud_nextian_parent">
              {proudNextians.slice(16, 18).map((person, index) => {
                const {
                  studentName,
                  rank,
                  passYear,
                  studentImage,
                  testimonial,
                } = person;
                return (
                  <>
                    <div
                      key={index}
                      className="our_proud_nextian_card"
                      onClick={() => openModal(person)}
                    >
                      <div className="our_proud_nextian_img">
                        <img src={studentImage} alt="" />
                      </div>
                      <div className="our_proud_nextian_content">
                        <p className="our_proud_name">{studentName}</p>
                        <p className="our_proud_rank">
                          {rank} | {passYear}
                        </p>
                        <p className="our_proud_view">
                          {isExpanded[index]
                            ? testimonial
                            : `${testimonial.substring(0, 110)}...`}
                        </p>
                        <div className="proud_nextian_btn">
                          <button>Read More</button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            {/* Modal Component */}
            <NextianModel
              isOpen={modalOpen}
              onClose={closeModal}
              person={selectedFaculty}
            />
          </div>

          <div className="our_proud_year">
            <div className="our_proud_nextian_title">
              <h3>NORCET 2021</h3>
            </div>
            <div className="our_proud_nextian_parent">
              {proudNextians.slice(18, 20).map((person, index) => {
                const {
                  studentName,
                  rank,
                  passYear,
                  studentImage,
                  testimonial,
                } = person;
                return (
                  <>
                    <div
                      key={index}
                      className="our_proud_nextian_card"
                      onClick={() => openModal(person)}
                    >
                      <div className="our_proud_nextian_img">
                        <img src={studentImage} alt="" />
                      </div>
                      <div className="our_proud_nextian_content">
                        <p className="our_proud_name">{studentName}</p>
                        <p className="our_proud_rank">
                          {rank} | {passYear}
                        </p>
                        <p className="our_proud_view">
                          {isExpanded[index]
                            ? testimonial
                            : `${testimonial.substring(0, 111)}...`}
                        </p>
                        <div className="proud_nextian_btn">
                          <button>Read More</button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            {/* Modal Component */}
            <NextianModel
              isOpen={modalOpen}
              onClose={closeModal}
              person={selectedFaculty}
            />
          </div>
        </div>
      </section>

      {/* <section className="nextian_success_slider_section">
        <div className="container">
          <div className="nextian_success_title_slider">
            <div className="nextian_title_slider_parent">
              <Swiper
                // install Swiper modules
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
              >
                {SuccessNextian.map((item) => {
                  return (
                    <>
                      <SwiperSlide key={item.id}>
                        <div className="nextian_title_slider_child">
                          <div className="nextian_title_heading">
                            <h4>Success Stories</h4>
                          </div>
                          <div className="nextian_success_img_content">
                            <img src={item.img} alt="" />
                            <p className="nextian_name">{item.name}</p>
                            <p className="nextian_rank">{item.rank}</p>
                            <p className="nextian_content">{item.desc}</p>
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}

      <Simplify />
    </>
  );
};

export default NextiansAll;
