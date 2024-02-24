import { Link } from "react-router-dom";
import "./NNLAllExams.css";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
const KERALA = () => {
  const [examsTabs, setExamsTabs] = useState([]);

  const [setIsError] = useState("");

  const showNorcetExams = async () => {
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

  //Logic for received data in parallel
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [examsData] = await Promise.all([showNorcetExams()]);

        setExamsTabs(examsData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="allexam_section">
        <div className="container">
          <div className="allexam_header">
            <h2>All India Nursing Exams</h2>
            <p>NURSING EDUCATION</p>
          </div>
        </div>
      </section>

      <section className="tab_section">
        <div className="container">
          <div className="tab_sub_title">
            <h3>All India Nursing Exams</h3>
          </div>

          {/* Tab buttons */}
          <div className="tab-content">
            <div className="tab_parent">
              {examsTabs.slice(7, 8).map((exams) => {
                const { tabHeading, tabParagraph, tabImage } = exams;
                const sentences = tabParagraph.split(". ");
                return (
                  <>
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
                  </>
                );
              })}
            </div>
          </div>
          {/* Content based on active tab */}
        </div>
      </section>

      {/* <section className="month_offer_section">
        <div className="container">
          <div className="month_offer_title">
            <h3>OFFER OF THE MONTH</h3>
          </div>
          <div className="month_offer_parent">
            <div className="month_offer_child">
              <div className="month_offer_img_box"></div>
              <div className="month_offer_sub_content">
                <p>Plan Zero - Free Pack 2.0</p>
              </div>
            </div>
            <div className="month_offer_child">
              <div className="month_offer_img_box"></div>
              <div className="month_offer_sub_content">
                <p>Plan C+ - Mastermind Pack 6.0 & 7.0</p>
              </div>
            </div>
            <div className="month_offer_child">
              <div className="month_offer_img_box"></div>
              <div className="month_offer_sub_content">
                <p>Plan A - Crash Courses</p>
              </div>
            </div>
            <div className="month_offer_child">
              <div className="month_offer_img_box"></div>
              <div className="month_offer_sub_content">
                <p>Plan B -Test Series 4.0</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default KERALA;
