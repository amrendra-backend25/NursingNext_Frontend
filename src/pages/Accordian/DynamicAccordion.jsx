import "./Accordian.css";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

const DynamicAccordion = () => {
  const [accordionData, setAccordionData] = useState([]);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [setIsError] = useState("");

  const accordionFAQ = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeFAQ;
      axios({
        url: response,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((record) => {
        setAccordionData(record.data.data);
        //console.log(record.data);
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
    <section className="accordian_section">
      <div className="container">
        <div className="accordian_title">
          <h3>Frequently Asked Questions</h3>
        </div>
        {accordionData.slice(0, 7).map((item, index) => {
          const { faqDescription, faqHeading } = item;
          const sentences = faqDescription.split(". ");
          return (
            <>
              <div key={index} className="accordion-item">
                <div
                  className={`accordion-header ${
                    openAccordion === index ? "open" : ""
                  }`}
                  onClick={() => handleAccordionClick(index)}
                >
                  {faqHeading}
                  <span className="accordion-icon">
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
            </>
          );
        })}
        <div className="accordian_btn">
          <Link to="all-faq">
            {" "}
            <button>Plan Related FAQS</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DynamicAccordion;
