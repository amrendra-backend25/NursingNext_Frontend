import "./Mastermind.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { Link } from "react-router-dom";
const Mastermind = () => {
  const [homeMind, setHomeMind] = useState([]);
  const [setIsError] = useState("");

  const displayMasterMind = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeMasterMind;
      axios({
        url: response,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((record) => {
        setHomeMind(record.data.data);
        //console.log(record.data.products);
      });
    } catch (error) {
      setIsError(error.msg);
      //console.log(error.msg);
    }
  };

  useEffect(() => {
    displayMasterMind();
  }, []);

  return (
    <section className="master_slider">
      <div className="container mm_container">
        <h3>Mastermind Faculties</h3>
        <div className="master_head">
          <div className="master_two_part">
            <p>Learn from the Top Educators in India</p>
          </div>
          {/* <div className="master_btn">
            <button className="master_button">See All</button>
          </div> */}
        </div>
        <div className="master_slider_main">
          <Swiper
            slidesPerView={4}
            spaceBetween={25}
            navigation={{
              nextEl: ".button-prev-slide",
              prevEl: ".button-next-slide",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // loop={true}
            modules={[Autoplay, Navigation]}
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
                spaceBetween: 30,
              },
            }}
          >
            {homeMind.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="mastermind_card">
                  <div className="mastermind_img">
                    <img src={item.facilityImage} alt="" />
                    <div className="overlay">
                      <div className="content">
                        <p>{item.specialization}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mastermind_title">
                    <h4>{item.facilityName}</h4>
                    {/* <p>{item.specialization}</p> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="master_button2">
              <div className="master_right_button">
                <div
                  className="button-prev-slide"
                  style={{ cursor: "pointer" }}
                >
                  <IoIosArrowForward />
                </div>
                <div
                  className="button-next-slide"
                  style={{ cursor: "pointer" }}
                >
                  <IoIosArrowBack />
                </div>
              </div>
              <div className="master_see">
                <Link to="see-all">
                  <button className="master_button-2">See All</button>
                </Link>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Mastermind;
