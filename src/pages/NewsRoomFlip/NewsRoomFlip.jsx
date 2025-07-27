import "./NewsRoomFlip.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import CampusOffer from "/images/newsroom/CampusOffer.jpeg";
import CampusUG from "/images/newsroom/CampusUG.jpeg";
import CGoldEditionLaunched from "/images/newsroom/CGoldEditionLaunched.jpg";
CGoldEditionLaunched;
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { NewWhyChoose } from "../WhyUs/NewWhyChoose";

const NewsRoom = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [newsRoomTabs, setNewsRoomTabs] = useState([]);
  const [setIsError] = useState("");
  const location = useLocation();
  const [canonicalUrl] = useState("");
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

  //Logic for received data in parallel
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [newsRoomData] = await Promise.all([showNewsRoomTabs()]);

        setNewsRoomTabs(newsRoomData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    const currentUrl = window.location.origin + location.pathname;
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", currentUrl);
    }
    fetchData();
  }, [location]);

  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      {NewWhyChoose.slice(3, 4).map((banner) => {
        const { img } = banner;
        return (
          <>
            <section
              className="news_banner_section"
              style={{ backgroundImage: `url(${img})` }}
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
            {newsRoomTabs.slice(0, 6).map((tabs, index) => {
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
                        <img src={CampusOffer} alt="" />
                      </div>
                      <div className="exam_nnl_content">
                        <p className="press">Campus Offer</p>
                        <h3 className="nnl_head">
                          Never Before, Never Again: College Campus Offer
                        </h3>
                        <p className="para_title">
                          Bring your friends and save big with Nursing Next
                          Lives special group discount! Enroll 5 friends from
                          the same college in the Plan C+ Gold Edition and each
                          of you can enjoy the premium nursing education package
                          at a discounted rate of ₹15,000/- instead of
                          ₹29,799/-. Benefit from the comprehensive Mastermind
                          Pack (NORCET 7.0 & 8.0) and join the top-rated courses
                          designed to elevate your nursing career. Don’t miss
                          out on this opportunity to learn, save, and succeed
                          together!
                        </p>
                        <Link
                          className="download_link"
                          to="https://play.google.com/store/apps/details?id=com.live.nursingnext&hl=en_IN&pli=1"
                          target="blank"
                        >
                          Download The App.
                        </Link>
                      </div>
                    </div>

                    <div className="exam_image_right_part">
                      <div className="exam_right_content">
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press"> Fastrack 7.0 & Super 36</p>
                            <h3 className="nnl_head">
                              Introducing Fastrack 7.0 & Super 36 for NORCET 7.0
                              Success!
                            </h3>
                            <p className="para_title_1">
                              For your last minute preparation needs,
                              introducing Fastrack 7.0 & Super 36 , tailored for
                              NORCET 7.0 Prelims, Mains, and Skill Assessment.
                              Get live classes, advanced test series,
                              simulation-based clinical videos, past years paper
                              discussions, and more. Valid for 3+1 months, and
                              receive Practice Pearls 2024-25 complimentary with
                              this pack!
                            </p>
                          </div>
                        </div>
                        <div className="exam_img_head">
                          <img src={CampusUG} alt="" />
                        </div>
                      </div>

                      <div className="exam_right_content">
                        <div className="exam_img_head">
                          <img src={CampusUG} alt="" />
                        </div>
                        <div className="exam_img_left">
                          <div className="exam_nnl_content">
                            <p className="press">UG Campus Offer</p>
                            <h3 className="nnl_head">
                              College Campus Offer For Undergraduate Students
                            </h3>
                            <p className="para_title_1">
                              Bring your friends and save big with Nursing Next
                              Lives special group discount! Enroll 5 friends
                              from the same college in the PlanUG NORCET Pro and
                              each of you can enjoy the premium nursing
                              education package at a discounted rate of
                              ₹25,000/- instead of ₹49,995/-. Benefit from the
                              comprehensive Plan UG NORCET Pro and start early
                              with your NORCET preparation along with your UG
                              Exams. Don’t miss out on this opportunity to
                              learn, save, and succeed together!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            )}

            {activeTab === 11 && <div>Content for Tab 11</div>}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsRoom;
