import { Link } from "react-router-dom";
import "./AllExams.css";
import tree from "/images/offers/tree.png";
import plan1 from "/images/offers/plan_1.png";
import plan2 from "/images/offers/Icon-02.png";
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

  //Logic for received data in parallel
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [examsData, examsBannerData] = await Promise.all([
          showExamsTabs(),
          showExamsBanner(),
        ]);

        setExamsTabs(examsData);
        setExamsBanner(examsBannerData);
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
                            <Link>
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
                <SwiperSlide>
                  <div className="month_card_plan">
                    <div className="month_background">
                      <div className="month_card_left">
                        <div className="image_plan">
                          <img src={tree} alt="" />
                        </div>
                        <div className="month_plan_title">
                          <h4>Know All About Plan C+ (Mastermind Pack)</h4>
                          <p>Watch, learn & Succeed</p>
                        </div>
                      </div>
                      <div className="month_card_right">
                        <img src={plan1} alt="" />
                      </div>
                    </div>
                    <div className="plan_validity">
                      <div className="validity_content">
                        <p className="validity_month">Validity 6 Months</p>
                        <p className="validity_price">₹13,999</p>
                      </div>
                      <div className="validity_content">
                        <p className="validity_month">Validity 6 Months</p>
                        <p className="validity_price">₹13,999</p>
                      </div>
                      <div className="validity_content">
                        <p className="validity_month">Validity 6 Months</p>
                        <p className="validity_price">₹13,999</p>
                      </div>
                    </div>
                    <div className="underline_plan"></div>
                    <div className="lectures_content">
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        1700+ hrs of Video Lectures (Hinglish/English)
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        100+ Hybrid Live Teaching Classes/Doubt Session
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        0k+ Qs in Review/Practice Mode
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        150+ System wise/Subject wise/Topic wise Tests
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        10+ Review classes by Batch mentor
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        100+ Previous Year Papers
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        30+ Hours of Podcast
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        1500+ High-Yielding Flashcards/E-notes
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        1000+ IBQs/VBQs
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Mentor Support/Live Chat
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="month_card_plan">
                    <div className="month_background">
                      <div className="month_card_left">
                        <div className="image_plan">
                          <img src={plan2} alt="" />
                        </div>
                        <div className="month_plan_title">
                          <h4>Know All About Plan UG (Undergraduate Pack)</h4>
                          <p>Watch, learn & Succeed</p>
                        </div>
                      </div>
                      <div className="month_card_right">
                        <img src={plan1} alt="" />
                      </div>
                    </div>
                    <div className="plan_validity">
                      <div className="validity_content">
                        <p className="validity_month">Validity 12 Months</p>
                        <p className="validity_price">₹7,421</p>
                        <p className="validity_red">(1st Year)</p>
                      </div>
                      <div className="validity_content">
                        <p className="validity_month">Validity 12 Months</p>
                        <p className="validity_price">₹7,499</p>
                        <p className="validity_red">(2nd Year)</p>
                      </div>
                      <div className="validity_content">
                        <p className="validity_month">Validity 24 Months</p>
                        <p className="validity_price">₹29,998</p>
                        <p className="validity_red">(3rd & 4th Year)</p>
                      </div>
                    </div>
                    <div className="underline_plan"></div>
                    <div className="lectures_content">
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Hybrid Lectures by the Masterminds
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Comprehensive Coverage of Topics
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Long and Short Questions with Answers
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Multiple Choice Questions
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Live conceptual learning by Masterminds and{" "}
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Session Mentors
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Progress Analysis Session and Student Faculty Meetings
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Live Revision Sessions
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="month_card_plan">
                    <div className="month_background">
                      <div className="month_card_left">
                        <div className="image_plan">
                          <img src={tree} alt="" />
                        </div>
                        <div className="month_plan_title">
                          <h4>Know All About Plan MSC (Mastermind Pack)</h4>
                          <p>Watch, learn & Succeed</p>
                        </div>
                      </div>
                      <div className="month_card_right">
                        <img src={plan1} alt="" />
                      </div>
                    </div>
                    <div className="plan_validity">
                      <div className="validity_content">
                        <p className="validity_month">Validity 6 Months</p>
                        <p className="validity_price">₹13,999</p>
                      </div>
                      <div className="validity_content">
                        <p className="validity_month">Validity 6 Months</p>
                        <p className="validity_price">₹13,999</p>
                      </div>
                      <div className="validity_content">
                        <p className="validity_month">Validity 6 Months</p>
                        <p className="validity_price">₹13,999</p>
                      </div>
                    </div>
                    <div className="underline_plan"></div>
                    <div className="lectures_content">
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        1700+ hrs of Video Lectures (Hinglish/English)
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        100+ Hybrid Live Teaching Classes/Doubt Session
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        20k+ Qs in Review/Practice Mode
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        150+ System wise/Subject wise/Topic wise Tests
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        10+ Review classes by Batch mentor
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        100+ Previous Year Papers
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        30+ Hours of Podcast
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        1500+ High-Yielding Flashcards/E-notes
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        1000+ IBQs/VBQs
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Mentor Support/Live Chat
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="month_card_plan">
                    <div className="month_background">
                      <div className="month_card_left">
                        <div className="image_plan">
                          <img src={plan2} alt="" />
                        </div>
                        <div className="month_plan_title">
                          <h4>Know All About Plan UG (Undergraduate Pack)</h4>
                          <p>Watch, learn & Succeed</p>
                        </div>
                      </div>
                      <div className="month_card_right">
                        <img src={plan1} alt="" />
                      </div>
                    </div>
                    <div className="plan_validity">
                      <div className="validity_content">
                        <p className="validity_month">Validity 12 Months</p>
                        <p className="validity_price">₹7,421</p>
                        <p className="validity_red">(1st Year)</p>
                      </div>
                      <div className="validity_content">
                        <p className="validity_month">Validity 12 Months</p>
                        <p className="validity_price">₹7,499</p>
                        <p className="validity_red">(2nd Year)</p>
                      </div>
                      <div className="validity_content">
                        <p className="validity_month">Validity 24 Months</p>
                        <p className="validity_price">₹29,998</p>
                        <p className="validity_red">(3rd & 4th Year)</p>
                      </div>
                    </div>
                    <div className="underline_plan"></div>
                    <div className="lectures_content">
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Hybrid Lectures by the Masterminds
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Comprehensive Coverage of Topics
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Long and Short Questions with Answers
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Multiple Choice Questions
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Live conceptual learning by Masterminds and{" "}
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Session Mentors
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Progress Analysis Session and Student Faculty Meetings
                      </p>
                      <p>
                        <span>
                          <FaCheck />
                        </span>
                        Live Revision Sessions
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <div className="month_plan_button">
                  <div className="button_right">
                    <div className="button-prev-slide">
                      <IoIosArrowForward />
                    </div>
                    <div className="button-next-slide">
                      <IoIosArrowBack />
                    </div>
                  </div>
                  <div className="button_left">See All</div>
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
