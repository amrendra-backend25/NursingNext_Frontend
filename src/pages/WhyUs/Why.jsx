import "./Why.css";
import whychoose from "/images/why_choose/WhyChoose.png";
import { useState } from "react";
import { NewWhyChoose } from "./NewWhyChoose";
const Why = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

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
                {NewWhyChoose.slice(0, 7).map((records, index) => {
                  const { title } = records;
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
                          {title}
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <section className="tab_section_data">
              <div className="container">
                <div className="tab_sub_title">
                  <h2>why choose us?</h2>
                </div>
                <div className="tab_button_right_1">
                  {NewWhyChoose.slice(0, 7).map((records, index) => {
                    const { title } = records;
                    return (
                      <>
                        <div
                          key={index}
                          className={`why_tab_button_1 ${index + 1}`}
                        >
                          <button
                            className={`tab ${
                              activeTab === index + 1 ? "active" : ""
                            }`}
                            onClick={() => handleTabClick(index + 1)}
                          >
                            {title}
                          </button>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </section>

            <div className="tab_button_right">
              {NewWhyChoose.map((tabData, index) => {
                const { img, title, Paragraph } = tabData;
                return (
                  <div
                    key={index}
                    className="why_choose_right"
                    style={{
                      display: activeTab === index + 1 ? "block" : "none",
                    }}
                  >
                    <div className="tab_right_img">
                      <img src={img} alt="" />
                    </div>
                    <div className="tab_right_content">
                      <p className="tab_heading">{title}</p>
                      <p className="tab_para">{Paragraph}</p>
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
