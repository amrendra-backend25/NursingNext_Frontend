import "./Ournextian.css";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { Link } from "react-router-dom";
import HomeNextianModel from "../HomeNextianModel/HomeNextianModel";

const Ournextian = () => {
  const [modalOpen5, setModalOpen5] = useState(false);
  const [selectedFaculty5, setSelectedFaculty5] = useState({});

  const [proudNextians, setProudNextians] = useState([]);
  const [setIsError] = useState("");
  const [isExpanded, setIsExpanded] = useState([]);

  const displayNextians = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeNextians;
      axios({
        url: response,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((record) => {
        // Sort the data based on a specific property, e.g., id
        const sortedData = record.data.data.sort((a, b) => a.id - b.id);
        setProudNextians(sortedData);
      });
    } catch (error) {
      setIsError(error.msg);
    }
  };

  const handleToggleClick = (index) => {
    setIsExpanded((prevExpandedItems) => {
      const newExpandedItems = [...prevExpandedItems];
      newExpandedItems[index] = !newExpandedItems[index];
      return newExpandedItems;
    });
  };

  useEffect(() => {
    displayNextians();
  }, []);

  const openModal5 = (person) => {
    setSelectedFaculty5(person);
    setModalOpen5(true);
  };

  const closeModal5 = () => {
    setModalOpen5(false);
  };

  return (
    <section className="ournextian_section">
      <div className="container">
        <div className="neaxtian_heading">
          <h3>Testimonials</h3>
        </div>
        <div className="ournextian_section_slider">
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
            {proudNextians.map((person, index) => {
              const { studentName, passYear, rank, studentImage, testimonial } =
                person;
              return (
                <>
                  <SwiperSlide key={person.id}>
                    <div
                      className="ournextian_card"
                      onClick={() => openModal5(person)}
                    >
                      <div className="ournextian_img">
                        <img src={studentImage} alt={studentName} />
                      </div>
                      <div className="ournextian_title">
                        <h4>{studentName}</h4>
                        <span style={{ fontWeight: "bold" }}>{rank} </span>|
                        <span> {passYear}</span>
                        <p>
                          {isExpanded[index]
                            ? testimonial
                            : `${testimonial.substring(0, 120)}...`}
                        </p>
                        <div className="proud_nextian_btn">
                          <button>Read More</button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
            <div className="ournextian_button_slider">
              <div className="ournextian_left">
                <div className="button-prev-slide">
                  <IoIosArrowForward />
                </div>
                <div className="button-next-slide">
                  <IoIosArrowBack />
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
      {/* Modal Component */}
      <HomeNextianModel
        isOpen={modalOpen5}
        onClose={closeModal5}
        person={selectedFaculty5}
      />
    </section>
  );
};

export default Ournextian;
