import "./VideoData.css";
import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
const VideoData = () => {
  const [homeVideos, setHomeVideos] = useState([]);
  const [setIsError] = useState("");
  const displayMasterMind = async () => {
    try {
      const response = await Paths.EndpointsURL.VideoSnippts;
      axios({
        url: response,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((record) => {
        setHomeVideos(record.data.data);
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
    <section className="video_section">
      <div className="container">
        <div className="video_title">
          <h3>Recommended Videos </h3>
        </div>
        <div className="video_subtitle">
          <div className="video_left">
            <p>Boost Your Preparation</p>
          </div>
          {/* <div className="video_btn">
            <button className="video_button">See All</button>
          </div> */}
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
            // loop={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {homeVideos.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="video_card">
                  <div className="video_img">
                    <ReactPlayer
                      width="98%"
                      height="75vh"
                      controls
                      url={item.videoLink}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
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
    </section>
  );
};

export default VideoData;
