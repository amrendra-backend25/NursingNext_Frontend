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

const Ournextian = () => {
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
        setProudNextians(record.data.data);
        //console.log(record.data.products);
      });
    } catch (error) {
      setIsError(error.msg);
      //console.log(error.msg);
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

  return (
    <section className="ournextian_section">
      <div className="container">
        <div className="nextian_title">
          <div className="neaxtian_heading">
            <h3>Our Proud Nextians</h3>
            <p>Champions Of Excallence</p>
          </div>
          <div className="video_subtitle">
            <div className="video_left"></div>
            <div className="nextian_btn">
              <Link to="see-all-nextians">
                <button>See All</button>
              </Link>
            </div>
          </div>
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
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={false}
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
            {proudNextians.map((result, index) => {
              const { studentName, passYear, rank, studentImage, testimonial } =
                result;
              return (
                <>
                  <SwiperSlide key={result.id}>
                    <div className="ournextian_card">
                      <div className="ournextian_img">
                        <img src={studentImage} alt={studentName} />
                      </div>
                      <div className="ournextian_title">
                        <h4>{studentName}</h4>
                        <span style={{ fontWeight: "bold" }}>{rank} </span>
                        <span>{passYear}</span>

                        <p>
                          {isExpanded[index]
                            ? testimonial
                            : // : `${testimonial.substring(0, 123)}...`}
                              `${testimonial.substring(0, 115)}...`}
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
            <div className="ournextian_button">
              <div className="button-prev-slide" style={{ cursor: "pointer" }}>
                <IoIosArrowForward />
              </div>
              <div className="button-next-slide" style={{ cursor: "pointer" }}>
                <IoIosArrowBack />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Ournextian;
