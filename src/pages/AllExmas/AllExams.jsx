import { Link } from "react-router-dom";
import "./AllExams.css";

import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
const AllExams = () => {
  const [examsTabs, setExamsTabs] = useState([]);
  const [examsBanner, setExamsBanner] = useState([]);
  const [monthsOffers, setMonthsOffers] = useState([]);
  const [setIsError] = useState("");
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const showExamsTabs = async () => {
    try {
      const response = await Paths.EndpointsURL.NNLExams;
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

  //Nextinas Banner Api Response
  const showExamsBanner = async () => {
    try {
      const response = await Paths.EndpointsURL.NNLExamsBanner;
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

  const showOffersOfmonths = async () => {
    try {
      const response = await Paths.EndpointsURL.OfferOfMonths;
      const record = await axios.get(response, {
        headers: {
          "Content-type": "application/json",
        },
      });
      return record.data.data;
    } catch (error) {
      setIsError(error.message);
      return [];
    }
  };

  //Logic for received data in parallel
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [examsData, examsBannerData, offerMonthData] = await Promise.all([
          showExamsTabs(),
          showExamsBanner(),
          showOffersOfmonths(),
        ]);

        setExamsTabs(examsData);
        setExamsBanner(examsBannerData);
        setMonthsOffers(offerMonthData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {examsBanner.slice(0, 1).map((records, index) => {
        const { bannerImage } = records;
        return (
          <>
            <section
              className="allexam_section"
              style={{ backgroundImage: `url(${bannerImage})` }}
              key={index}
            >
              <div className="container">
                <div className="allexam_header">
                  {/* <h2>All India Nursing Exams565</h2>
                  <p>NURSING EDUCATION</p> */}
                </div>
              </div>
            </section>
          </>
        );
      })}

      <section className="tab_section">
        <div className="container">
          <div className="tab_sub_title">
            <h3>All India Nursing Exams</h3>
          </div>
          {/* Tab buttons */}
          <ul className="tabs">
            {examsTabs.map((records, index) => {
              const { tabHeading } = records;
              return (
                <>
                  <li
                    key={index}
                    onClick={() => handleTabClick(index + 1)}
                    className={`tab ${
                      activeTab === index + 1 ? " tab active" : ""
                    }`}
                  >
                    <Link>{tabHeading}</Link>
                  </li>
                </>
              );
            })}
          </ul>

          {/* Content based on active tab */}
          <div className="tab-content">
            {examsTabs.map((records, index) => {
              const { tabHeading, tabParagraph, tabImage } = records;
              const sentences = tabParagraph.split(".");
              return (
                <>
                  <div
                    className="tab_parent"
                    style={{
                      display: activeTab === index + 1 ? "block" : "none",
                    }}
                  >
                    <div className="tab_child">
                      <div className="tab_child_img_left">
                        <img src={tabImage} alt="" />
                      </div>
                      <div className="tab_child_content_right">
                        <div className="tab_sub_content">
                          <h2>{tabHeading}</h2>
                          {sentences.map((sentence, sentenceIndex) => {
                            return (
                              <>
                                <p className="tab_bold" key={sentenceIndex}>
                                  {sentence}
                                </p>
                              </>
                            );
                          })}

                          <div className="tab_btn">
                            <Link to="/plan-mlb-pro">
                              <button>Suggested Pack</button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>

      <section className="offer_month_section">
        <div className="container">
          <div className="month_title">
            <h2>Offer of the Month</h2>
          </div>
          <div className="month_card_section">
            <div className="month_card_parent">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
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
                modules={[Navigation, Autoplay]}
                className="mySwiper"
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
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  // When window width is >= 1024px
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1100: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {monthsOffers.slice(0, 4).map((offers) => {
                  const {
                    offersBanner,
                    description,
                    validity6,
                    validity12,
                    validity24,

                    price6,
                    price12,
                    price24,
                  } = offers;
                  const sentences = description.split(". ");
                  return (
                    <>
                      <SwiperSlide>
                        <div className="month_card_plan">
                          <div className="month_background">
                            <img src={offersBanner} alt="" />
                          </div>
                          <div className="plan_validity">
                            <div className="validity_content">
                              <p className="validity_month">{validity6}</p>
                              <p className="validity_price">₹ {price6}</p>
                            </div>
                            <div className="validity_content">
                              <p className="validity_month">{validity12}</p>
                              <p className="validity_price">₹ {price12}</p>
                            </div>
                            <div className="validity_content">
                              <p className="validity_month">{validity24}</p>
                              <p className="validity_price">₹ {price24}</p>
                            </div>
                          </div>

                          <div className="underline_plan"></div>
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
                      </SwiperSlide>
                    </>
                  );
                })}

                <div className="month_plan_button">
                  <div className="button_right">
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
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllExams;
