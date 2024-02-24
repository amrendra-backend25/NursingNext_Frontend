import "./AllFaq.css";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { Link } from "react-router-dom";
import Simplify from "../Simplify/Simplify";
import { GoDotFill } from "react-icons/go";
const AllFaq = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const [accordionData, setAccordionData] = useState([]);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [setIsError] = useState("");

  const accordionFAQ = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeFAQ;
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
        const [faqData] = await Promise.all([accordionFAQ()]);
        setAccordionData(faqData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);

  const handleAccordionClick = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className="allfaq_section">
        <div className="container">
          <div className="allfaq_parent">
            <div className="allfaq_title">
              <h2>faqs</h2>
              <p>
                Our Teaching Experts are here to guide you at every step of the
                preparation, enabling you to run the course well and crack the
                entrance exam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="allfaq_tab_section">
        <div className="container">
          <div className="allfaq_tab_title">
            <h3>Frequently Asked Questions</h3>
            <p>
              Our trail of achievements and recognitions that define our
              journey.
            </p>
          </div>
          {/* Tab buttons */}

          <ul className="allfaq_tabs">
            <li
              onClick={() => handleTabClick(1)}
              className={activeTab === 1 ? "tab active" : "tab"}
            >
              <Link>General</Link>
            </li>
            {accordionData.map((records, index) => {
              const { faqTabName } = records;
              return (
                <>
                  <li
                    key={index}
                    onClick={() => handleTabClick(index + 1)}
                    className={`tab ${
                      activeTab === index + 1 ? " tab active" : ""
                    }`}
                  >
                    <Link>{faqTabName}</Link>
                  </li>
                </>
              );
            })}
            {/* <li
              onClick={() => handleTabClick(2)}
              className={activeTab === 2 ? "tab active" : "tab"}
            >
              <Link>Plan Zero</Link>
            </li>
            <li
              onClick={() => handleTabClick(3)}
              className={activeTab === 3 ? "tab active" : "tab"}
            >
              <Link>Plan A</Link>
            </li>
            <li
              onClick={() => handleTabClick(4)}
              className={activeTab === 4 ? "tab active" : "tab"}
            >
              <Link>Plan B</Link>
            </li>
            <li
              onClick={() => handleTabClick(5)}
              className={activeTab === 5 ? "tab active" : "tab"}
            >
              <Link>Plan C+</Link>
            </li>
            <li
              onClick={() => handleTabClick(6)}
              className={activeTab === 6 ? "tab active" : "tab"}
            >
              <Link>Plan MSc</Link>
            </li>
            <li
              onClick={() => handleTabClick(7)}
              className={activeTab === 7 ? "tab active" : "tab"}
            >
              <Link>Plan TH</Link>
            </li>
            <li
              onClick={() => handleTabClick(8)}
              className={activeTab === 8 ? "tab active" : "tab"}
            >
              <Link>Plan UG</Link>
            </li>
            <li
              onClick={() => handleTabClick(8)}
              className={activeTab === 8 ? "tab active" : "tab"}
            >
              <Link>Plan CHO</Link>
            </li>
            <li
              onClick={() => handleTabClick(8)}
              className={activeTab === 8 ? "tab active" : "tab"}
            >
              <Link>MASTERMIND</Link>
            </li> */}
          </ul>

          {/* Content based on active tab */}
          <div className="allfaq_tab-content">
            {accordionData.map((record, index) => {
              const { faqDescription } = record;
              const sentences = faqDescription.split(". ");
              return (
                <>
                  {activeTab === index + 1 && (
                    <section className="allfaq_accordian_section">
                      {accordionData.map((item, index) => (
                        <div key={index} className="allfaq_accordion-item">
                          <div
                            className={`allfaq_accordion-header ${
                              openAccordion === index ? "open" : ""
                            }`}
                            onClick={() => handleAccordionClick(index)}
                          >
                            {item.faqHeading}
                            <span className="allfaq_accordion-icon">
                              {openAccordion === index ? "-" : "+"}
                            </span>
                          </div>

                          {openAccordion === index && (
                            <div className="accordion-content">
                              {sentences.map((sentence, sentenceIndex) => (
                                <div key={sentenceIndex}>
                                  <GoDotFill /> {sentence}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </section>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>

      <Simplify />
    </>
  );
};

export default AllFaq;
