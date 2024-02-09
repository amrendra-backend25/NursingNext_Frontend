import "./PlanMSC.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReactPlayer from "react-player";
import question from "/images/plan_zero/question.png";
import tree from "/images/offers/tree.png";
import { FaCheck } from "react-icons/fa6";
import apply from "/images/aboutUs/apply.png";
import hiring from "/images/aboutUs/hiring.png";
import Simplify from "../Simplify/Simplify";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const PlanMSC = () => {
  const [planANextians, setPlanANextians] = useState([]);
  const [planVideos, setPlanVideos] = useState([]);
  const [planDetails, setPlanDetails] = useState([]);
  const [salientFeatures, setSalientFeatures] = useState([]);
  const [allReferCourses, setAllReferCourses] = useState([]);
  const [planAMind, setPlanAMind] = useState([]);
  const [planMscBanner, setPlanMscBanner] = useState([]);
  const [setIsError] = useState("");
  const [isExpanded, setIsExpanded] = useState([]);

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

  const showPlanMsc = async () => {
    try {
      const response = await Paths.EndpointsURL.PlanMscBanner;
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

  const displaySinglePlan = async () => {
    try {
      const response = await Paths.EndpointsURL.SinglePlanVideos;
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

  const displayPlanDetails = async () => {
    try {
      const response = await Paths.EndpointsURL.SinglePlanDetails;
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

  const displaySilentFeatures = async () => {
    try {
      const response = await Paths.EndpointsURL.SinglePlanSilentFeatures;
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

  const displayReferCourses = async () => {
    try {
      const response = await Paths.EndpointsURL.SinglePlanReferCourses;
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

  const handleToggleClick = (index) => {
    setIsExpanded((prevExpandedItems) => {
      const newExpandedItems = [...prevExpandedItems];
      newExpandedItems[index] = !newExpandedItems[index];
      return newExpandedItems;
    });
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          mastermindData,
          nextiansData,
          videoData,
          planDetailsData,
          silentFeaturesData,
          referCoursesData,
          planMscData,
        ] = await Promise.all([
          showAllMasterMind(),
          displayNextians(),
          displaySinglePlan(),
          displayPlanDetails(),
          displaySilentFeatures(),
          displayReferCourses(),
          showPlanMsc(),
        ]);

        setPlanAMind(mastermindData);
        setPlanANextians(nextiansData);
        setPlanVideos(videoData);
        setPlanDetails(planDetailsData);
        setSalientFeatures(silentFeaturesData);
        setAllReferCourses(referCoursesData);
        setPlanMscBanner(planMscData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="planzero_section ">
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
          {planMscBanner.slice(0, 1).map((banner) => {
            const { planName, planSubheading, planTagLine, planImages } =
              banner;
            return (
              <>
                <SwiperSlide>
                  <div className="plan_zero_img">
                    <img src={planImages} alt="" />
                    <div className="container">
                      <div className="planzero_slider_title">
                        <h1>
                          {planName}
                          <br />({planSubheading})
                        </h1>
                        <p>{planTagLine}</p>
                        <div className="plan_title_btn">
                          <button>Know More</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </section>

      <section className="planzero_video_section">
        {planVideos.slice(0, 1).map((records) => {
          const { videoTitle, videoLink } = records;
          return (
            <>
              <div className="container">
                <div className="video_title">
                  <h3 style={{ textAlign: "center" }}>{videoTitle}</h3>
                  <div className="video_part">
                    <ReactPlayer
                      width="100%"
                      height="70vh"
                      controls
                      url={videoLink}
                    />
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </section>

      <section className="questions_section">
        <div className="container">
          <div className="question_parent">
            <div className="question_left">
              <img src={question} alt="" />
            </div>
            <div className="question_right">
              {planDetails.map((records) => {
                const {
                  planDetailTitle,
                  planDetailDescription,
                  planDetailIcon,
                } = records;
                return (
                  <>
                    <div className="question_right_title">
                      <div className="icon_zero_img">
                        <img src={planDetailIcon} alt="" />
                      </div>
                      <div className="title_zero">
                        <h4>{planDetailTitle}</h4>
                        <p>{planDetailDescription}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="master_slider">
        <div className="container mm_container">
          <h3>Receive Step- By- Step Guidance from our Great Team</h3>
          <div className="master_head_2">
            <div className="master_two_part_2">
              <p>
                Our Teaching Experts are here to guide you at every step of the
                preparation, enabling you to run the course well and crack the
                entrance exam.
              </p>
            </div>
          </div>
          <div className="master_slider_main">
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
              loop={true}
              modules={[Autoplay, Navigation]}
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
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // When window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {planAMind.map((result) => {
                const { facilityName, facilityImage, specialization } = result;
                return (
                  <>
                    <SwiperSlide key={result.id}>
                      <div className="mastermind_card">
                        <div className="mastermind_img">
                          <img src={facilityImage} alt="" />
                          <div className="overlay">
                            <div className="content">{specialization}</div>
                          </div>
                        </div>
                        <div className="mastermind_title">
                          <h4>{facilityName}</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
              <div className="master_button_2">
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
                  <button className="master_button-2">See All</button>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="salient_section">
        <div className="container">
          <div className="salient_title">
            <h3>Silent Features</h3>
          </div>
          <div className="salient_parent">
            {salientFeatures.map((records) => {
              const { planDetailDescription, planDetailIcon } = records;
              return (
                <>
                  <div className="salient_child">
                    <div className="salient_img">
                      <img src={planDetailIcon} alt="" />
                    </div>
                    <div className="salient_title">
                      <p>{planDetailDescription}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <section className="plan_section">
        <div className="container">
          {planVideos.slice(0, 1).map((willget) => {
            const { willGetBanner, willGetDescription } = willget;
            const sentences = willGetDescription.split(". ");
            return (
              <>
                <div className="plan_parent_title" key={willGetBanner}>
                  <div className="plan_left_child">
                    <div className="month_card_left">
                      <div className="image_plan">
                        <img src={tree} alt="" />
                      </div>
                      <div className="month_plan_title">
                        {/* <h4>What All You Will Get?</h4>
                        <p>Watch, learn & Succeed</p> */}
                      </div>
                    </div>
                    <div className="month_card_right">
                      <img src={willGetBanner} alt="" />
                    </div>
                  </div>
                  <div className="plan_right_child">
                    <div className="lectures_content">
                      {sentences.map((sentence, sentenceIndex) => {
                        return (
                          <>
                            <p key={sentenceIndex}>
                              <span>
                                <FaCheck />
                              </span>
                              {sentence}
                            </p>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>

      <section className="approach_section">
        <div className="container">
          <div className="approach_card">
            <div className="approach_sub_title">
              <div className="approach_img">
                <img src={question} alt="" />
              </div>
              <div className="approach_content">
                <p className="approach_heading">CHO with Target CHO Book </p>
                <p>₹1997</p>
              </div>
            </div>
            <div className="approach_sub_title">
              <div className="approach_img">
                <img src={question} alt="" />
              </div>
              <div className="approach_content">
                <p className="approach_heading">CHO without Target CHO Book </p>
                <p>₹1496</p>
              </div>
            </div>
            <div className="approach_sub_title">
              <div className="approach_img">
                <img src={question} alt="" />
              </div>
              <div className="approach_content">
                <p className="approach_heading">
                  UPPSC Staff Nurse Crash Course
                </p>
                <p>₹2248</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="refer_section">
        <div className="container">
          <div className="refer_sub_title">
            <h3>You Can Also Refer These Courses</h3>
          </div>
          <div className="refer_card_parent">
            {/* <div className="refer_child_card">
              <div className="refer_img">
                <img src={icon1} alt="" />
              </div>
              <div className="refer_title">
                <h5>
                  Plan C+ <br />
                  (Mastermind Pack)
                </h5>
                <p>
                  The One-In-All, All-In-One Pack to help you become the Master
                  of all Subjects!
                </p>
                <div className="refer_btn">
                  <Link to="/plan-c-plus">
                    <button onClick={handleScrollToTop}>Know More</button>
                  </Link>
                </div>
              </div>
            </div> */}

            {allReferCourses.map((records) => {
              const { planName, planSubheading, planTagLine, planIcon } =
                records;
              return (
                <>
                  <div className="refer_child_card">
                    <div className="refer_img">
                      <img src={planIcon} alt="" />
                    </div>
                    <div className="refer_title">
                      <h5>
                        {planName} <br />({planSubheading})
                      </h5>
                      <p>{planTagLine}</p>
                      <div className="refer_btn">
                        <Link to="/plan-b">
                          <button onClick={handleScrollToTop}>Know More</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
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

      <section className="ournextian_section">
        <div className="container">
          <div className="nextian_title">
            <div className="neaxtian_heading">
              <h3>What our learners say about Plan A</h3>
            </div>
            <div className="nextian_btn">
              <button>See All</button>
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
              {planANextians.map((result, index) => {
                const { studentName, testimonial, passYear, studentImage } =
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
                          <span>{passYear}</span>
                          <p>
                            {isExpanded[index]
                              ? testimonial
                              : `${testimonial.substring(0, 140)}...`}
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
            </Swiper>
          </div>
        </div>
      </section>
      <Simplify />
    </>
  );
};

export default PlanMSC;
