import "./NewsRoom.css";
import { Link } from "react-router-dom";
import nnlCourse from "/images/newsroom/newsroom1.jpeg";
import PlanMLBLitenewsroom from "/images/newsroom/PlanMLBLitenewsroom.jpeg";
import nnlCourse1 from "/images/newsroom/news6.jpeg";
import nnlCourse2 from "/images/newsroom/newsroom3.jpeg";
import nnlCourse3 from "/images/newsroom/news3.jpeg";
import nnlCourse4 from "/images/newsroom/news5.jpeg";
import nnlcourseImages from "/images/newsroom/nnlcourseImages.png";
import bookLaunch from "/images/newsroom/newsroom1.jpg";
import bookLaunch2 from "/images/newsroom/newsroom2.jpg";
import bookLaunch3 from "/images/newsroom/bookPrastice.jpeg";
import NORCET2023Poster from "/images/newsroom/NORCET2023Poster.jpg";
import { FaCheck } from "react-icons/fa6";
import newsroom01 from "/images/newsroom/news1.jpeg";
import newsroom02 from "/images/newsroom/news1.jpeg";
import newsroom03 from "/images/newsroom/newsroom3.jpg";
import newsroom04 from "/images/newsroom/newsroom4.png";
import newsroom05 from "/images/newsroom/newsroom5.png";
import future from "/images/newsroom/news_left.png";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
const NewsRoom = () => {
  const [newsRoomTabs, setNewsRoomTabs] = useState([]);
  const [newsBanner, setNewsRoomBanner] = useState([]);
  const [setIsError] = useState("");
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const showNewsRoomTabs = async () => {
    try {
      const response = await Paths.EndpointsURL.NewsRoom;
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
  const showNewsRoomBanner = async () => {
    try {
      const response = await Paths.EndpointsURL.NewsRoomBanner;
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
        const [newsRoomData, newsRoomBannerData] = await Promise.all([
          showNewsRoomTabs(),
          showNewsRoomBanner(),
        ]);

        setNewsRoomTabs(newsRoomData);
        setNewsRoomBanner(newsRoomBannerData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {newsBanner.slice(0, 1).map((banner) => {
        const { bannerImage } = banner;
        return (
          <>
            <section
              className="news_banner_section"
              style={{ backgroundImage: `url(${bannerImage})` }}
            >
              <div className="container">
                <div className="news_banner_parent">
                  <div className="news_banner_title">
                    <h2>newsroom</h2>
                    <p>nursing education</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}

      <section className="tab_section_news">
        <div className="container">
          {/* Tab buttons */}
          <ul className="tabs">
            {newsRoomTabs.slice(0, 5).map((tabs, index) => {
              const { tabHeading } = tabs;
              return (
                <>
                  <li
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
            {activeTab === 1 && (
              <>
                <section className="news_exam_section">
                  <div className="news_exam_card_parent">
                    <div className="exam_image_part_left">
                      <div className="exam_img">
                        <img src={nnlCourse} alt="" />
                      </div>
                      <div className="exam_nnl_content">
                        <p className="press">Calling All Nursing Students!</p>
                        <h3 className="nnl_head">
                          Get ready for Nursing Next Live's Plan MLB PRO:
                        </h3>
                        <p className="para_title">
                          The Mastermind Live Batch, where we bring the
                          masterminds directly to you through our Live Virtual
                          Classroom! Elevate your nursing education to the next
                          level with our NNL Classroom, offering a Virtual
                          Classroom with an Offline Experience through our Plan
                          MLB PRO
                        </p>
                        <Link className="download_link">Download The App.</Link>
                        <Link to="/plan-mlb-pro">
                          <div className="para_btn">
                            <button>Know More</button>
                          </div>
                        </Link>
                      </div>
                      {/* <div className="arrow_redo">
                        <IoArrowRedoOutline />
                      </div> */}
                    </div>
                    <div className="exam_image_right_part">
                      <div className="exam_right_content">
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">
                              The ultimate learning experience!
                            </p>
                            <h3 className="nnl_head">
                              Target NORCET 6.0 Prelims, Mains & Skill
                              Assessment with Plan MLB Lite Crash Course
                              (Previously known as Fastrack Classes)
                            </h3>
                            <p className="para_title_1">
                              Immerse yourself in live classes and embrace the
                              power of structured study routines. Dive into 4
                              Core Features: <br /> <br /> <FaCheck /> WATCH AND
                              LEARN
                              <br />
                              <FaCheck />
                              PRACTICE AND PREPARE <br /> <FaCheck />
                              REVISE & RETRIEVE <br /> <FaCheck />
                              GUIDANCE & COUNSELING
                            </p>
                          </div>
                          {/* <div className="arrow_redo">
                            <IoArrowRedoOutline />
                          </div> */}
                        </div>
                        <div className="exam_img_head">
                          <img src={PlanMLBLitenewsroom} alt="" />
                        </div>
                      </div>

                      <div className="exam_right_content">
                        <div className="exam_img_head">
                          <img src={nnlCourse1} alt="" />
                        </div>
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">
                              Trace your ultimate journey to success with
                            </p>
                            <h3 className="nnl_head">PLAN UG NORCET!</h3>
                            <p className="para_title_1">
                              Dive into The Plan UG Pack to crack your
                              undergraduate exams & the competitive exam with
                              its core features Conceptual Classes, Exercises,
                              Phygital Books, and Target High Next Nursing
                              Decode. Batches already started.
                            </p>
                            <Link to="/plan-ug">
                              <div className="para_btn">
                                <button>Know More</button>
                              </div>
                            </Link>
                          </div>
                          {/* <div className="arrow_redo">
                            <IoArrowRedoOutline />
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="news_exam_section">
                  <div className="news_exam_card_parent">
                    <div className="exam_image_part_left">
                      <div className="exam_img">
                        <img src={nnlCourse2} alt="" />
                      </div>
                      <div className="exam_nnl_content">
                        <p className="press">
                          Ready to elevate your institute's potential?
                        </p>
                        <h3 className="nnl_head">
                          Meet Plan NP: The NNL-VSL Pack!
                        </h3>
                        <p className="para_title">
                          * Introducing the KIOSK At Nursing Next Live, we're
                          dedicated to: Supercharging clinical, behavioral, and
                          leadership skills. Keep learning at your fingertips.
                          Wondering why the KIOSK? Easy access to knowledge
                          Interactive learning experiences. Dive into Clinical
                          Nursing Procedures exclusively. Unlock your potential
                          with us today! For more info, call our counselor at
                          9999117411. Explore the plan in our app now:
                          https://bit.ly/3q|bXGN
                        </p>
                        <Link className="download_link">Download The App.</Link>
                        <Link to="/plan-np">
                          <div className="para_btn">
                            <button>read more</button>
                          </div>
                        </Link>
                      </div>
                      {/* <div className="arrow_redo">
                        <IoArrowRedoOutline />
                      </div> */}
                    </div>
                    <div className="exam_image_right_part">
                      <div className="exam_right_content">
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">
                              Absolutely FREE and loaded with powerful features
                            </p>
                            <h3 className="nnl_head">
                              Breaking down barriers to quality education with
                              PLAN ZERO 4.0!
                            </h3>
                            <p className="para_title_1">
                              Unlock access to free content and prepare on a
                              macro level absolutely FREE and loaded with
                              powerful features to supercharge your preparation.
                              No limits, just limitless learning! dream it, live
                              it! <br />
                              <br />
                              <Link className="download_link">
                                Download The App.
                              </Link>{" "}
                            </p>
                          </div>
                          {/* <div className="arrow_redo">
                            <IoArrowRedoOutline />
                          </div> */}
                        </div>
                        <div className="exam_img_head">
                          <img src={nnlCourse3} alt="" />
                        </div>
                      </div>
                      <div className="exam_right_content">
                        <div className="exam_img_head">
                          <img src={nnlCourse4} alt="" />
                        </div>
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">
                              Calling All Nursing Institutes!
                            </p>
                            <h3 className="nnl_head">
                              Elevate the learning experience at your Nursing
                              Institute with our SMART DIGITAL LIBRARY!
                            </h3>
                            <p className="para_title_1">
                              Invest in tabs that not only engage but also
                              enhance your student's educational journey. Let's
                              pave the way for a brighter and smarter future
                              together!
                              <br />
                              <br />
                              <Link className="download_link">
                                Explore our App now:
                              </Link>{" "}
                            </p>
                          </div>
                          {/* <div className="arrow_redo">
                            <IoArrowRedoOutline />
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="nursing_education">
                  <div className="future_education">
                    <div className="future_education_left">
                      <div className="future_img">
                        <img src={nnlcourseImages} alt="" />
                      </div>
                    </div>

                    <div className="future_education_right">
                      <div className="future_card">
                        <div className="future_child">
                          <div className="future_border">
                            <div className="news_future_title">
                              <p className="press">Concept of the week</p>
                              <h3>An insightful explanation of Anemia!</h3>
                              <p className="para_title_future">
                                Anemia is common in Indian society. Anemia is a
                                condition in which "an" means without and "emia"
                                pertains to blood. It is a disorder
                                characterized by a decrease in the levels of red
                                blood cells, hemoglobin, or hematocrit.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="future_child">
                          <div className="future_border_1">
                            <div className="news_future_title">
                              <p className="press">
                                An insightful explanation of Eye Facts:
                              </p>
                              <h3>Rods and Cones.</h3>
                              <p className="para_title_1_future">
                                Rods and Cones are the main sensory receptors in
                                the eye responsible for vision. Rods are the
                                reason we can see in the dark. They detect low
                                levels of light and give us our scotopic vision,
                                while cones make up our photopic vision
                                responding to daylight, colour, and visual
                                acuity. <br /> <br />
                                Stay tuned for more such valuable content
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 2 && (
              <>
                <section className="news_exam_section">
                  <div className="news_exam_card_parent">
                    <div className="exam_image_part_left">
                      <div className="exam_img">
                        <img src={bookLaunch} alt="" />
                      </div>
                      <div className="exam_nnl_content">
                        <p className="press">NNl Press Releases</p>
                        <h3 className="nnl_head">
                          Most Awaited Book for Nursing UG 1st Year Released!
                        </h3>
                        <p className="para_title">
                          Sharing a Glimpse of Book Release Ceremony of Target
                          High Next Nursing Decode 1st Year in 6th National
                          Nurses Conference, at Shri Ramachandra College of
                          Nursing, Chennai. Book available at Nusing Next Live
                          App.
                        </p>
                        <Link className="download_link">Download The App.</Link>
                        <div className="para_btn">
                          <button>read more</button>
                        </div>
                      </div>
                    </div>

                    <div className="exam_image_right_part">
                      <div className="exam_right_content">
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">NNl Press Releases</p>
                            <h3 className="nnl_head">
                              Recommended Series of Target High Books for your
                              Competitive Exams
                            </h3>
                            <p className="para_title_1">
                              In the world of competitive nursing exams, its not
                              just a test – its a journey. Embark on it with
                              Target High Series and see how high you can soar!
                            </p>
                          </div>
                        </div>
                        <div className="exam_img_head">
                          <img src={bookLaunch2} alt="" />
                        </div>
                      </div>

                      <div className="exam_right_content">
                        <div className="exam_img_head">
                          <img src={bookLaunch3} alt="" />
                        </div>
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">NNl Press Releases65</p>
                            <h3 className="nnl_head">
                              One Nation One Book- Target High for NORCET
                            </h3>
                            <p className="para_title_1">
                              According to our Quora comrades, Target High 7th/e
                              isnt just a book; its a key to unlocking NORCET
                              excellence!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="news_exam_section">
                  <div className="news_exam_card_parent">
                    <div className="exam_image_part_left">
                      <div className="exam_img">
                        <img src={newsroom04} alt="" />
                      </div>
                      <div className="exam_nnl_content">
                        <p className="press">NNl Press Releases</p>
                        <h3 className="nnl_head">
                          Book release ceremony of Textbook of Mental Health/
                          Psychiatric Nursing
                        </h3>
                        <p className="para_title">
                          A Glimpse of Book Release Ceremony of Textbook of
                          Mental Health/ Psychiatric Nursing in National
                          Conference, at Meenakshi College of Nursing, Chennai
                        </p>
                        <Link className="download_link">Download The App.</Link>
                        <div className="para_btn">
                          <button>read more</button>
                        </div>
                      </div>
                    </div>
                    <div className="exam_image_right_part">
                      <div className="exam_right_content">
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">NNl Press Releases</p>
                            <h3 className="nnl_head">
                              Book release ceremony of Textbook of Adult Health
                              Nursing (Vol1 and 2)
                            </h3>
                            <p className="para_title_1">
                              Sharing a Glimpse of Book Release Ceremony of
                              Textbook of Adult Health Nursing (Vol1 and 2) at
                              Manipal College of Nursing, Karnataka
                            </p>
                          </div>
                        </div>
                        <div className="exam_img_head">
                          <img src={newsroom05} alt="" />
                        </div>
                      </div>
                      <div className="exam_right_content">
                        <div className="exam_img_head">
                          <img src={newsroom03} alt="" />
                        </div>
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">NNl Press Releases</p>
                            <h3 className="nnl_head">
                              One Nation One Book- Target High for NORCET
                            </h3>
                            <p className="para_title_1">
                              According to our Quora comrades, Target High 7th/e
                              isnt just a book; its a key to unlocking NORCET
                              excellence!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="nursing_education">
                  <div className="future_education">
                    <div className="future_education_left">
                      <div className="future_img">
                        <img src={future} alt="" />
                      </div>
                    </div>

                    <div className="future_education_right">
                      <div className="future_card">
                        <div className="future_child">
                          <div className="future_border">
                            <div className="news_future_title">
                              <p className="press">NNl Press Releases</p>
                              <h3>
                                Nutritious Snacking for a Healthy Mind & Body!
                              </h3>
                              <p className="para_title_future">
                                Amidst all the stress and tension of the exams
                                and extensive studying, it is essential for the
                                brain to receive proper nourishment to maintain
                                the...
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="future_child">
                          <div className="future_border_1">
                            <div className="news_future_title">
                              <p className="press">NNl Press Releases</p>
                              <h3>
                                Campbell Wilson appointed as the CEO & MD of Air
                                India
                              </h3>
                              <p className="para_title_1_future">
                                Amidst all the stress and tension of the exams
                                and extensive studying, it is essential for the
                                brain to receive proper nourishment to maintain
                                the...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 5 && (
              <>
                <section className="news_exam_section">
                  <div className="news_exam_card_parent">
                    <div className="exam_image_part_left">
                      <div className="exam_img">
                        <img src={newsroom01} alt="" />
                      </div>
                      <div className="exam_nnl_content">
                        <p className="press">NNl Press Releases</p>
                        <h3 className="nnl_head">
                          Most Awaited Book for Nursing UG 1st Year Released!
                        </h3>
                        <p className="para_title">
                          Sharing a Glimpse of Book Release Ceremony of Target
                          High Next Nursing Decode 1st Year in 6th National
                          Nurses Conference, at Shri Ramachandra College of
                          Nursing, Chennai. Book available at Nusing Next Live
                          App.
                        </p>
                        <Link className="download_link">Download The App.</Link>
                        <div className="para_btn">
                          <button>read more</button>
                        </div>
                      </div>
                    </div>
                    <div className="exam_image_right_part">
                      <div className="exam_right_content">
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">NNl Press Releases</p>
                            <h3 className="nnl_head">
                              Recommended Series of Target High Books for your
                              Competitive Exams
                            </h3>
                            <p className="para_title_1">
                              In the world of competitive nursing exams, its not
                              just a test – its a journey. Embark on it with
                              Target High Series and see how high you can soar!
                            </p>
                          </div>
                        </div>
                        <div className="exam_img_head">
                          <img src={newsroom02} alt="" />
                        </div>
                      </div>
                      <div className="exam_right_content">
                        <div className="exam_img_head">
                          <img src={newsroom03} alt="" />
                        </div>
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">NNl Press Releases</p>
                            <h3 className="nnl_head">
                              One Nation One Book- Target High for NORCET
                            </h3>
                            <p className="para_title_1">
                              According to our Quora comrades, Target High 7th/e
                              isnt just a book; its a key to unlocking NORCET
                              excellence!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="news_exam_section">
                  <div className="news_exam_card_parent">
                    <div className="exam_image_part_left">
                      <div className="exam_img">
                        <img src={newsroom04} alt="" />
                      </div>
                      <div className="exam_nnl_content">
                        <p className="press">NNl Press Releases</p>
                        <h3 className="nnl_head">
                          Book release ceremony of Textbook of Mental Health/
                          Psychiatric Nursing
                        </h3>
                        <p className="para_title">
                          A Glimpse of Book Release Ceremony of Textbook of
                          Mental Health/ Psychiatric Nursing in National
                          Conference, at Meenakshi College of Nursing, Chennai
                        </p>
                        <Link className="download_link">Download The App.</Link>
                        <div className="para_btn">
                          <button>read more</button>
                        </div>
                      </div>
                    </div>
                    <div className="exam_image_right_part">
                      <div className="exam_right_content">
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">NNl Press Releases</p>
                            <h3 className="nnl_head">
                              Book release ceremony of Textbook of Adult Health
                              Nursing (Vol1 and 2)
                            </h3>
                            <p className="para_title_1">
                              Sharing a Glimpse of Book Release Ceremony of
                              Textbook of Adult Health Nursing (Vol1 and 2) at
                              Manipal College of Nursing, Karnataka
                            </p>
                          </div>
                        </div>
                        <div className="exam_img_head">
                          <img src={newsroom05} alt="" />
                        </div>
                      </div>
                      <div className="exam_right_content">
                        <div className="exam_img_head">
                          <img src={newsroom03} alt="" />
                        </div>
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">NNl Press Releases</p>
                            <h3 className="nnl_head">
                              One Nation One Book- Target High for NORCET
                            </h3>
                            <p className="para_title_1">
                              According to our Quora comrades, Target High 7th/e
                              isnt just a book; its a key to unlocking NORCET
                              excellence!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="nursing_education">
                  <div className="future_education">
                    <div className="future_education_left">
                      <div className="future_img">
                        <img src={future} alt="" />
                      </div>
                    </div>
                    <div className="future_education_right">
                      <div className="future_card">
                        <div className="future_child">
                          <div className="future_border">
                            <div className="news_future_title">
                              <p className="press">NNl Press Releases</p>
                              <h3>
                                Nutritious Snacking for a Healthy Mind & Body!
                              </h3>
                              <p className="para_title_future">
                                Amidst all the stress and tension of the exams
                                and extensive studying, it is essential for the
                                brain to receive proper nourishment to maintain
                                the...
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="future_child">
                          <div className="future_border_1">
                            <div className="news_future_title">
                              <p className="press">NNl Press Releases</p>
                              <h3>
                                Campbell Wilson appointed as the CEO & MD of Air
                                India
                              </h3>
                              <p className="para_title_1_future">
                                Amidst all the stress and tension of the exams
                                and extensive studying, it is essential for the
                                brain to receive proper nourishment to maintain
                                the...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 3 && (
              <div className="nursing_education">
                <div className="future_education">
                  <div className="future_education">
                    <div className="future_img">
                      <img src={NORCET2023Poster} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 5 && <div>Coming Soon...</div>}
            {activeTab === 6 && <div>Coming Soon...</div>}
            {activeTab === 7 && <div>Coming Soon...</div>}
            {activeTab === 8 && <div>Coming Soon...</div>}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsRoom;
