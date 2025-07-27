import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./OurLearners.css";
import { useState, useEffect } from "react";
import { BasePaths } from "../../webinarconfig/webinarBaseAPI";
import axios from "axios";
const OurLearners = () => {
  const [learnersDetails, setLearnersDetails] = useState([]);
  const [learnersBanner, setLearnersBanner] = useState([]);
  const [setIsError] = useState("");

  const showLearnersBanner = async () => {
    try {
      const response = await BasePaths.EndpointsURL.LearnerBanner;
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

  const showLearnersDetails = async () => {
    try {
      const response = await BasePaths.EndpointsURL.LearnerDetails;
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
        const [learnerDetailsData, learnerBannerData] = await Promise.all([
          showLearnersDetails(),
          showLearnersBanner(),
        ]);
        setLearnersDetails(learnerDetailsData);
        setLearnersBanner(learnerBannerData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {learnersBanner.slice(0, 1).map((banner, index) => {
        const { bannerImage } = banner;
        return (
          <>
            <section
              className="our_learners_section"
              style={{ backgroundImage: `url(${bannerImage})` }}
              key={index}
            >
              <div className="container">
                <div className="our_learners_head">
                  <h1>What our learners say about us</h1>
                </div>
              </div>
            </section>
          </>
        );
      })}

      <section className="our_nextian_section">
        <div className="container">
          <div className="our_learners_title">
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              navigation={{
                nextEl: ".button-prev-slide",
                prevEl: ".button-next-slide",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Navigation, Autoplay, Pagination]}
              breakpoints={{
                // When window width is >= 768px
                300: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                450: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                // When window width is >= 768px
                768: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                // When window width is >= 1024px
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
            >
              {learnersDetails.map((learners) => {
                const {
                  studentName,
                  studentRank,
                  passingYear,
                  testimonial,
                  studentImage,
                } = learners;
                return (
                  <>
                    <SwiperSlide>
                      <div className="learner_card">
                        <div className="learner_img">
                          <img src={studentImage} alt="" />
                        </div>
                        <div className="learner_content">
                          <h4>{studentName}</h4>
                          <h6>
                            <span>{studentRank}</span> {passingYear}
                          </h6>
                          <p>{testimonial}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurLearners;
