import "./VideoData.css";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { FaYoutube } from "react-icons/fa6";
import HomeVideoModel from "../HomeVideoModel/HomeVideoModel";

const VideoData = () => {
  const [modalOpen5, setModalOpen5] = useState(false);
  const [selectedFaculty5, setSelectedFaculty5] = useState({});

  const openModal5 = (person) => {
    setSelectedFaculty5(person);
    setModalOpen5(true);
  };

  const closeModal5 = () => {
    setModalOpen5(false);
  };

  return (
    <section className="video_section">
      <div className="container">
        <div className="video_title">
          <h3>Videos Section</h3>
        </div>
        <div className="video_subtitle">
          <div className="video_left"></div>
        </div>
        <div className="video_main_slider">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={{
              nextEl: ".button-prev-slide",
              prevEl: ".button-next-slide",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="video_card" onClick={() => openModal5(person)}>
                <div className="video_img">
                  <ReactPlayer
                    width="80%"
                    height="70vh"
                    controls
                    url="https://www.youtube.com/watch?v=KNAzWNUzRoE"
                  />
                  <div className="transparent_data">
                    <div className="youtube_btn">
                      <FaYoutube className="fa_youtube" />
                      <HomeVideoModel />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <div className="video_button">
              <div className="button-prev-slide" style={{ cursor: "pointer" }}>
                <IoIosArrowForward />
              </div>
              <div
                className="button-next-slide"
                style={{ cursor: "pointer", color: "black" }}
              >
                <IoIosArrowBack />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
      {/* Modal Component */}
      <HomeVideoModel
        isOpen={modalOpen5}
        onClose={closeModal5}
        person={selectedFaculty5}
      />
    </section>
  );
};

export default VideoData;
