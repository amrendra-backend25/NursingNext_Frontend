import "./Why.css";
import whychoose from "/images/why_choose/WhyChoose.png";
//import tabright from "/images/why_choose/visionright.png";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
const Why = () => {
  const [whyChooseTabs, setWhyChooseTabs] = useState([]);
  const [setIsError] = useState("");
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const showWhyChoose = async () => {
    try {
      const response = await Paths.EndpointsURL.WhyChooseUs;
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await showWhyChoose();
        setWhyChooseTabs(data);
        //console.log(data);
      } catch (error) {
        setIsError(error.msg);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <section className="why_tab_section">
        <div className="container">
          <div className="tab_button_section_parent">
            <div className="tab_button_left">
              <div className="tab_img_left">
                <h1>Why Choose Us ?</h1>
                <img src={whychoose} alt="" />
              </div>
              <div className="tab_button_right">
                {whyChooseTabs.slice(0, 7).map((records, index) => {
                  const { tabHeading } = records;
                  return (
                    <>
                      <div
                        key={index}
                        className={`why_tab_button tab_button_01${index + 1}`}
                      >
                        <button
                          className={`tab ${
                            activeTab === index + 1 ? "active" : ""
                          }`}
                          onClick={() => handleTabClick(index + 1)}
                        >
                          {tabHeading}
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="tab_button_right">
              {whyChooseTabs.map((tabData, index) => {
                const { tabImage, tabHeading, tabParagraph } = tabData;
                return (
                  <div
                    key={index}
                    className="why_choose_right"
                    style={{
                      display: activeTab === index + 1 ? "block" : "none",
                    }}
                  >
                    <div className="tab_right_img">
                      <img src={tabImage} alt="" />
                    </div>
                    <div className="tab_right_content">
                      <p className="tab_heading">{tabHeading}</p>
                      <p className="tab_para">{tabParagraph}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Why;
