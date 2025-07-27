import "./Upcoming.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useState, useEffect } from "react";
import { BasePaths } from "../../webinarconfig/webinarBaseAPI";
import axios from "axios";
const Upcoming = () => {
  const [upcomingDetails, setUpcomingDetails] = useState([]);
  const [setIsError] = useState("");

  const showUpcomingWebinars = async () => {
    try {
      const response = await BasePaths.EndpointsURL.UpcomingWebinars;
      const record = await axios.get(response, {
        headers: {
          "Content-type": "application/json",
        },
      });
      //console.log(record.data.data);
      return record.data.data;
    } catch (error) {
      setIsError(error.msg);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [upcomingWebinarsData] = await Promise.all([
          showUpcomingWebinars(),
        ]);
        setUpcomingDetails(upcomingWebinarsData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="upcoming_section">
        <div className="container">
          <div className="upcoming_title">
            <h2>Topics of the upcoming Webinars </h2>
            <p>Exclusive Webinar topics for undergraduate students</p>
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            breakpoints={{
              // When window width is >= 768px
              300: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // When window width is >= 768px
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              // When window width is >= 1024px
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1291: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {upcomingDetails.map((upcomings) => {
              const { webinarTitle, webinarParagraph, webinarImage } =
                upcomings;
              return (
                <>
                  <SwiperSlide>
                    <div className="upcoming_item_card">
                      <div className="upcoming_img">
                        <img src={webinarImage} alt="" />
                        <div className="overlay">
                          <div className="upcoming_content">
                            <h3>{webinarTitle}</h3>
                            <p>{webinarParagraph}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Upcoming;
