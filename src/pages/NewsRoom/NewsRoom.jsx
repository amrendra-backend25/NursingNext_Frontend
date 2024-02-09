import "./NewsRoom.css";
import { Link } from "react-router-dom";
import img01 from "/images/newsroom/img01.png";
import newsroom01 from "/images/newsroom/newsroom1.jpg";
import newsroom02 from "/images/newsroom/newsroom2.jpg";
import newsroom03 from "/images/newsroom/newsroom3.jpg";
import newsroom04 from "/images/newsroom/newsroom4.png";
import newsroom05 from "/images/newsroom/newsroom5.png";
import { IoArrowRedoOutline } from "react-icons/io5";
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

            {/* <li
              onClick={() => handleTabClick(2)}
              className={activeTab === 2 ? "tab active" : "tab"}
            >
              <Link>Nursing Vacancies</Link>
            </li>

            <li
              onClick={() => handleTabClick(3)}
              className={activeTab === 3 ? "tab active" : "tab"}
            >
              <Link>Book Launch</Link>
            </li>
            <li
              onClick={() => handleTabClick(5)}
              className={activeTab === 5 ? "tab active" : "tab"}
            >
              <Link>NNL Updates</Link>
            </li> */}
          </ul>

          {/* Content based on active tab */}
          <div className="tab-content">
            {activeTab === 1 && (
              <>
                <section className="news_exam_section">
                  <div className="news_exam_card_parent">
                    <div className="exam_image_part_left">
                      <div className="exam_img">
                        <img src={newsroom01} alt="" />
                      </div>
                      <div className="exam_nnl_content">
                        <p className="press">NNl Press Releases65</p>
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
                      {/* <div className="arrow_redo">
                        <IoArrowRedoOutline />
                      </div> */}
                    </div>
                    <div className="exam_image_right_part">
                      <div className="exam_right_content">
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">NNl Press Releases8888</p>
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
                          {/* <div className="arrow_redo">
                            <IoArrowRedoOutline />
                          </div> */}
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
                            <p className="press">NNl Press Releases3333</p>
                            <h3 className="nnl_head">
                              One Nation One Book- Target High for NORCET
                            </h3>
                            <p className="para_title_1">
                              According to our Quora comrades, Target High 7th/e
                              isnt just a book; its a key to unlocking NORCET
                              excellence!
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

                <section className="news_exam_section">
                  <div className="news_exam_card_parent">
                    <div className="exam_image_part_left">
                      <div className="exam_img">
                        <img src={newsroom04} alt="" />
                      </div>
                      <div className="exam_nnl_content">
                        <p className="press">NNl Press Releases34</p>
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
                      {/* <div className="arrow_redo">
                        <IoArrowRedoOutline />
                      </div> */}
                    </div>
                    <div className="exam_image_right_part">
                      <div className="exam_right_content">
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">NNl Press Releases666</p>
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
                          {/* <div className="arrow_redo">
                            <IoArrowRedoOutline />
                          </div> */}
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
                          {/* <div className="arrow_redo">
                            <IoArrowRedoOutline />
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="rivision_banner">
                  <div className="container"></div>
                </div>

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

                <div className="tab_card_content">
                  <div className="card_child">
                    <img src={img01} alt="" />
                  </div>
                  <div className="card_child">
                    <div className="card_border">
                      <div className="news_card_title">
                        <p className="press">NNl Press Releases777</p>
                        <h3>Nutritious Snacking for a Healthy Mind & Body!</h3>
                        <p className="para_title">
                          Amidst all the stress and tension of the exams and
                          extensive studying, it is essential for the brain to
                          receive proper nourishment to maintain the...
                        </p>
                      </div>
                      <div className="para_btn">
                        <button>read more</button>
                      </div>
                      <div className="arrow_redo">
                        <IoArrowRedoOutline />
                      </div>
                    </div>
                  </div>

                  <div className="card_child">
                    <div className="card_border">
                      <div className="news_card_title">
                        <p className="press">NNl Press Releases999</p>
                        <h3>
                          Campbell Wilson appointed as the CEO & MD of Air India
                        </h3>
                        <p className="para_title_1">
                          Amidst all the stress and tension of the exams and
                          extensive studying, it is essential for the brain to
                          receive proper nourishment to maintain the...
                        </p>
                      </div>

                      <div className="arrow_redo">
                        <IoArrowRedoOutline />
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
                        <img src={img01} alt="" />
                      </div>
                      <div className="exam_nnl_content">
                        <p className="press">NNl Press Releases</p>
                        <h3 className="nnl_head">
                          Nutritious Snacking for a Healthy Mind & Body!
                        </h3>
                        <p className="para_title">
                          Amidst all the stress and tension of the exams and
                          extensive studying, it is essential for the brain to
                          receive proper nourishment to maintain the...
                        </p>
                        <div className="para_btn">
                          <button>read more</button>
                        </div>
                      </div>
                      <div className="arrow_redo">
                        <IoArrowRedoOutline />
                      </div>
                    </div>
                    <div className="exam_image_right_part">
                      <div className="exam_right_content">
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">NNl Press Releases</p>
                            <h3 className="nnl_head">
                              Campbell Wilson appointed as the CEO & MD of Air
                              India
                            </h3>
                            <p className="para_title_1">
                              Amidst all the stress and tension of the exams and
                              extensive studying, it is essential for the brain
                              to receive proper nourishment to maintain the...
                            </p>
                          </div>
                          <div className="arrow_redo">
                            <IoArrowRedoOutline />
                          </div>
                        </div>
                        <div className="exam_img_head">
                          <img src={img01} alt="" />
                        </div>
                      </div>
                      <div className="exam_right_content">
                        <div className="exam_img_head">
                          <img src={img01} alt="" />
                        </div>
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">NNl Press Releases</p>
                            <h3 className="nnl_head">
                              Campbell Wilson appointed as the CEO & MD of Air
                              India
                            </h3>
                            <p className="para_title_1">
                              Amidst all the stress and tension of the exams and
                              extensive studying, it is essential for the brain
                              to receive proper nourishment to maintain the...
                            </p>
                          </div>
                          <div className="arrow_redo">
                            <IoArrowRedoOutline />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="rivision_banner">
                  <div className="container">
                    {/* <div className="banner_start">
                                            <img src={newsBanner} alt="" />
                                        </div> */}
                  </div>
                </div>

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

                <div className="tab_card_content">
                  <div className="card_child">
                    <img src={img01} alt="" />
                  </div>
                  <div className="card_child">
                    <div className="card_border">
                      <div className="news_card_title">
                        <p className="press">NNl Press Releases</p>
                        <h3>Nutritious Snacking for a Healthy Mind & Body!</h3>
                        <p className="para_title">
                          Amidst all the stress and tension of the exams and
                          extensive studying, it is essential for the brain to
                          receive proper nourishment to maintain the...
                        </p>
                      </div>
                      <div className="para_btn">
                        <button>read more</button>
                      </div>
                      <div className="arrow_redo">
                        <IoArrowRedoOutline />
                      </div>
                    </div>
                  </div>
                  <div className="card_child">
                    <div className="card_border">
                      <div className="news_card_title">
                        <p className="press">NNl Press Releases</p>
                        <h3>
                          Campbell Wilson appointed as the CEO & MD of Air India
                        </h3>
                        <p className="para_title_1">
                          Amidst all the stress and tension of the exams and
                          extensive studying, it is essential for the brain to
                          receive proper nourishment to maintain the...
                        </p>
                      </div>
                      {/* <div className="para_btn">
                                            <button>read more</button>
                                        </div> */}
                      <div className="arrow_redo">
                        <IoArrowRedoOutline />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === 3 && (
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
                      <div className="arrow_redo">
                        <IoArrowRedoOutline />
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
                          <div className="arrow_redo">
                            <IoArrowRedoOutline />
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
                          <div className="arrow_redo">
                            <IoArrowRedoOutline />
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
                      <div className="arrow_redo">
                        <IoArrowRedoOutline />
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
                          <div className="arrow_redo">
                            <IoArrowRedoOutline />
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
                          <div className="arrow_redo">
                            <IoArrowRedoOutline />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="rivision_banner">
                  <div className="container">
                    {/* <div className="banner_start">
                                                                <img src={newsBanner} alt="" />
                                                            </div> */}
                  </div>
                </div>

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

                <div className="tab_card_content">
                  <div className="card_child">
                    <img src={img01} alt="" />
                  </div>
                  <div className="card_child">
                    <div className="card_border">
                      <div className="news_card_title">
                        <p className="press">NNl Press Releases</p>
                        <h3>Nutritious Snacking for a Healthy Mind & Body!</h3>
                        <p className="para_title">
                          Amidst all the stress and tension of the exams and
                          extensive studying, it is essential for the brain to
                          receive proper nourishment to maintain the...
                        </p>
                      </div>
                      <div className="para_btn">
                        <button>read more</button>
                      </div>
                      <div className="arrow_redo">
                        <IoArrowRedoOutline />
                      </div>
                    </div>
                  </div>
                  <div className="card_child">
                    <div className="card_border">
                      <div className="news_card_title">
                        <p className="press">NNl Press Releases</p>
                        <h3>
                          Campbell Wilson appointed as the CEO & MD of Air India
                        </h3>
                        <p className="para_title_1">
                          Amidst all the stress and tension of the exams and
                          extensive studying, it is essential for the brain to
                          receive proper nourishment to maintain the...
                        </p>
                      </div>
                      {/* <div className="para_btn">
                                                                <button>read more</button>
                                                            </div> */}
                      <div className="arrow_redo">
                        <IoArrowRedoOutline />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 4 && <div>Content for Tab 4</div>}
            {activeTab === 5 && <div>Content for Tab 5</div>}
            {activeTab === 6 && <div>Content for Tab 6</div>}
            {activeTab === 7 && <div>Content for Tab 7</div>}
            {activeTab === 8 && <div>Content for Tab 8</div>}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsRoom;
