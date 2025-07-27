import "./Mastermind.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NewWhyChoose } from "../WhyUs/NewWhyChoose";

const Mastermind = () => {
  const location = useLocation();
  const [canonicalUrl] = useState("");

  useEffect(() => {
    const currentUrl = window.location.origin + location.pathname;
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", currentUrl);
    }
  }, [location]);

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      <section className="master_slider">
        <div className="container mm_container">
          <div className="master_heading_title">
            <h3>Features</h3>
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
              loop={true}
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
              {NewWhyChoose.slice(3, 8).map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="mastermind_card">
                    <div className="mastermind_img">
                      <img src={item.img} alt="" />
                      <div className="overlay">
                        <div className="faculty_content">
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mastermind_title">
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="master_button_slider">
                <div className="master_button_left">
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
      </section>
    </>
  );
};

export default Mastermind;
