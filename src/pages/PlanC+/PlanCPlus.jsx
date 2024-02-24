import "./PlanCPlus.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ReactPlayer from "react-player";
import question from "/images/plan_zero/StatsLatestBanner.jpg";
import apply from "/images/aboutUs/apply.png";
import Planug from "/images/courses/Planug.png";
import PlanMLBLite from "/images/courses/mlbLite.png";
import hiring from "/images/aboutUs/hiring.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import tree from "/images/offers/tree.png";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import DoubtModel from "../DoubtModel/DoubtModel";
import { Link } from "react-router-dom";

const PlanCPlus = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState({});

  const openModal = () => {
    setSelectedFaculty();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const [activeTab, setActiveTab] = useState(1);
  const [planVideos, setPlanVideos] = useState([]);
  const [planStats, setPlanStats] = useState([]);
  const [planSalient, setPlanSalient] = useState([]);
  const [planCPlusBanner, setPlanCPlusBanner] = useState([]);
  const [planCPlusTab, setPlanCPlusTab] = useState([]);
  const [cPlusNextians, setCPlusNextians] = useState([]);
  const [cPlusFaculity, setCPlusFaculity] = useState([]);
  const [setIsError] = useState("");
  const [isExpanded, setIsExpanded] = useState([]);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const showPlanVideos = async () => {
    try {
      const response = await Paths.EndpointsURL.CPlusVideos;
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

  const showPlanStats = async () => {
    try {
      const response = await Paths.EndpointsURL.CPlusStats;
      const record = await axios.get(response, {
        headers: {
          "Content-type": "application/json",
        },
      });
      // console.log(record.data);
      return record.data.data;
    } catch (error) {
      setIsError(error.msg);
      return [];
    }
  };

  const showPlanSalient = async () => {
    try {
      const response = await Paths.EndpointsURL.CPlusSalient;
      const record = await axios.get(response, {
        headers: {
          "Content-type": "application/json",
        },
      });
      // console.log(record.data);
      return record.data.data;
    } catch (error) {
      setIsError(error.msg);
      return [];
    }
  };

  const showPlanCPlusBanner = async () => {
    try {
      const response = await Paths.EndpointsURL.PlanCPlusBanner;
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

  const showPlanCPlusOfferTab = async () => {
    try {
      const response = await Paths.EndpointsURL.CPlusKnowMorePrices;
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

  const showPlanCPlusNextians = async () => {
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

  const showPlanCPlusMastermind = async () => {
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          planVideosData,
          planStatsData,
          planSalientData,

          planCData,
          planCPriceTab,
          planCNextianData,
          planCFaculityData,
        ] = await Promise.all([
          showPlanVideos(),
          showPlanStats(),
          showPlanSalient(),

          showPlanCPlusBanner(),
          showPlanCPlusOfferTab(),
          showPlanCPlusNextians(),
          showPlanCPlusMastermind(),
        ]);

        setPlanVideos(planVideosData);
        setPlanStats(planStatsData);
        setPlanSalient(planSalientData);

        setPlanCPlusBanner(planCData);
        setPlanCPlusTab(planCPriceTab);
        setCPlusNextians(planCNextianData);
        setCPlusFaculity(planCFaculityData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <section className="planC_section ">
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
          {planCPlusBanner.slice(0, 1).map((banner) => {
            const { planImages, planName, planSubheading, planTagLine } =
              banner;
            return (
              <>
                <SwiperSlide>
                  <div className="plan_C_img">
                    <img src={planImages} alt="" />
                    <div className="container">
                      <div className="planC_slider_title">
                        <span>{planSubheading}</span>
                        <h1>{planName}</h1>
                        <p>{planTagLine}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>

        {/* Modal Component */}
      </section>

      <section className="planzero_video_section">
        <div className="container">
          {planVideos.slice(0, 1).map((video) => {
            const { videoName, videoLink } = video;
            return (
              <>
                <div className="video_title">
                  <h3>{videoName}</h3>
                  <div className="video_part">
                    <ReactPlayer
                      width="100%"
                      height="70vh"
                      controls
                      url={videoLink}
                    />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>

      <section className="plan_tab_section">
        <div className="container">
          <div className="plan_button_section_parent">
            <div className="plan_tab_button_left">
              <div className="plan_tab_img_left">
                {planCPlusTab.slice(0, 1).map((record) => {
                  const {
                    planTabHeading,
                    planTabSubHeading,
                    planTabParagraph,
                    planTabImage,
                  } = record;
                  return (
                    <>
                      <div className="plan_content_heading">
                        <h1>{planTabHeading}</h1>
                        <h1>{planTabSubHeading}</h1>
                        <p>{planTabParagraph}</p>
                      </div>
                      <div className="all_plan_tree">
                        <img src={tree} alt="" className="tree_plan" />
                        <img src={planTabImage} alt="" />
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="plan_tab_button_right">
                <div className="plan_tab_button tab_button_01">
                  {planCPlusTab.slice(0, 3).map((tab, index) => {
                    const {
                      planName,
                      planValidity,
                      planCutPrice,
                      planActualPrice,
                    } = tab;
                    return (
                      <>
                        <button
                          onClick={() => handleTabClick(index + 1)}
                          className={`tab ${
                            activeTab === index + 1 ? " tab active" : ""
                          }`}
                        >
                          {planName} {planValidity} ₹{" "}
                          <span>{planCutPrice} </span>| ₹ {planActualPrice}
                        </button>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="plan_tab_button_right_1">
              {planCPlusTab.slice(0, 3).map((TabDesc, index) => {
                const {
                  planName,
                  planValidity,
                  planCutPrice,
                  planActualPrice,
                  planDescription,
                } = TabDesc;
                const sentences = planDescription.split(". ");
                return (
                  <>
                    {activeTab === index + 1 && (
                      <div className="plan_choose_right">
                        <div className="plan_content_title">
                          <h3>
                            {planName} {planValidity}{" "}
                            <span>₹ {planCutPrice}</span> | ₹ {planActualPrice}
                          </h3>
                        </div>
                        <div className="plan_lectures_content">
                          {sentences.map((sentence, sentenceIndex) => {
                            return (
                              <>
                                <p key={sentenceIndex}>
                                  <span>
                                    <GoDotFill />
                                  </span>
                                  {sentence}
                                </p>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    )}
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
              {cPlusFaculity.map((record) => {
                const { facilityImage, specialization, facilityName } = record;
                return (
                  <>
                    <SwiperSlide key={record.id}>
                      <div className="mastermind_card">
                        <div className="mastermind_img">
                          <img src={facilityImage} alt="" />
                          <div className="overlay">
                            <div className="content">
                              <p>{specialization}</p>
                            </div>
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

              <div className="master_button_plan">
                <div className="master_button_right">
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

      <section className="questions_section">
        <div className="container">
          <div className="salient_title">
            <h3>Key Benifites of the plan</h3>
          </div>
          <div className="question_parent">
            <div className="question_left">
              <img src={question} alt="" />
              <div className="question_head_para">
                {/* <h2 className="question_head">#Your Success is Our Motto</h2> */}
              </div>
            </div>

            <div className="question_right">
              {planStats.slice(0, 5).map((stats) => {
                const { statsTitle, statsParagraph, statsIcon } = stats;
                return (
                  <>
                    <div className="question_right_title">
                      <div className="icon_zero_img">
                        <img src={statsIcon} alt="" />
                      </div>
                      <div className="title_zero">
                        <h4>{statsTitle}</h4>
                        <p>{statsParagraph}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="salient_section">
        <div className="container">
          <div className="salient_title">
            <h3>Salient Features</h3>
          </div>

          <div className="salient_parent">
            {planSalient.map((salient) => {
              const { salientTitle, salientParagraph, salientIcon } = salient;
              return (
                <>
                  <div className="salient_child">
                    <div className="salient_img">
                      <img src={salientIcon} alt="" />
                    </div>
                    <div className="salient_title">
                      <h5>{salientTitle}</h5>
                      <p>{salientParagraph}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <section className="refer_section">
        <div className="container">
          <div className="refer_sub_title">
            <h3>You Can Also Refer These Courses</h3>
          </div>
          <div className="refer_card_parent">
            <div className="refer_child_card">
              <div className="refer_img">
                <img src={Planug} alt="" />
              </div>
              <div className="refer_title">
                <h5>Plan UG (Undergraduate Pack)</h5>
                <p>
                  To Ease You with Your A-Z Career Needs From University Exams
                  to NORCET Or Other Competitive Exams with Step-By-Step
                  Learning!
                </p>

                <Link to="/plan-ug">
                  <div className="refer_btn">
                    <button>Know More</button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="refer_child_card">
              <div className="refer_img">
                <img src={PlanMLBLite} alt="" />
              </div>
              <div className="refer_title">
                <h5>Plan MLB Lite (Crash Course)</h5>
                <p>Your Ultimate guide towards achiving a top rank in NORCET</p>

                <Link to="/plan-mlb-lite">
                  <div className="refer_btn">
                    <button>Know More</button>
                  </div>
                </Link>
              </div>
            </div>
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
              <div className="center_btn" onClick={() => openModal()}>
                <button>
                  Know More
                  <DoubtModel />{" "}
                </button>
              </div>
            </div>
            <div className="right_img_doubt">
              <img src={apply} alt="" />
            </div>
          </div>
          <DoubtModel
            isOpen={modalOpen}
            onClose={closeModal}
            person={selectedFaculty}
          />
        </div>
      </section>

      <section className="ournextian_section">
        <div className="container">
          <div className="nextian_title">
            <div className="neaxtian_heading">
              <h3>What our learners say about the Course</h3>
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
                300: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },

                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              {cPlusNextians.map((record, index) => {
                const {
                  studentName,
                  passYear,
                  rank,
                  studentImage,
                  testimonial,
                } = record;
                return (
                  <>
                    <SwiperSlide key={index.id}>
                      <div className="ournextian_card">
                        <div className="ournextian_img">
                          <img src={studentImage} alt={studentName} />
                        </div>
                        <div className="ournextian_title">
                          <h4>{studentName}</h4>
                          <span style={{ fontWeight: "bold" }}>{rank}</span>
                          <span style={{ paddingLeft: "8px" }}>{passYear}</span>

                          <p>
                            {isExpanded[index]
                              ? testimonial
                              : // : `${testimonial.substring(0, 123)}...`}
                                `${testimonial.substring(0, 110)}...`}
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
                <div className="button-prev-slide">
                  <IoIosArrowForward />
                </div>
                <div className="button-next-slide">
                  <IoIosArrowBack />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanCPlus;
