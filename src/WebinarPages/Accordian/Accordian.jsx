import { useState, useEffect } from "react";
import axios from "axios";
import "./Accordian.css";
import { GoDotFill } from "react-icons/go";
import { BasePaths } from "../../webinarconfig/webinarBaseAPI";

const Accordian = () => {
  const [accordionAPI, setAccordionAPI] = useState([]);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [setIsError] = useState("");

  const accordionFAQ = async () => {
    try {
      const response = await BasePaths.EndpointsURL.MLBPROFAQ;
      axios({
        url: response,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((record) => {
        setAccordionAPI(record.data.data);
        // console.log("Testing" + record);
      });
    } catch (error) {
      setIsError(error.msg);
      //console.log(error.msg);
    }
  };

  useEffect(() => {
    accordionFAQ();
  }, []);

  const handleAccordionClick = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className="allfaq_accordian_section">
        <div className="container">
          <div className="accordian_title">
            <h3>Frequently Asked Questions</h3>
            <p>
              Our trail of achievements and recognitions that define our
              journey.
            </p>
          </div>
          {accordionAPI.slice(0, 14).map((item, index) => {
            const { faqHeading, faqParagraph } = item;
            const sentences = faqParagraph.split(". ");
            return (
              <>
                <div key={index} className="allfaq_accordion-item">
                  <div
                    className={`allfaq_accordion-header ${
                      openAccordion === index ? "open" : ""
                    }`}
                    onClick={() => handleAccordionClick(index)}
                  >
                    {faqHeading}
                    <span className="allfaq_accordion-icon">
                      {openAccordion === index ? "-" : "+"}
                    </span>
                  </div>
                  {openAccordion === index && (
                    <div className="allfaq_accordion-content">
                      {sentences.map((sentence, sentenceIndex) => (
                        <div key={sentenceIndex}>
                          <GoDotFill /> {sentence}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Accordian;
