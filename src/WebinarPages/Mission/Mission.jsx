import "./Mission.css";
import { useState, useEffect } from "react";
import { BasePaths } from "../../webinarconfig/webinarBaseAPI";
import axios from "axios";
const Mission = () => {
  const [poweredByApi, setPoweredByApi] = useState([]);
  const [setIsError] = useState("");
  const showPoweredBy = async () => {
    try {
      const response = await BasePaths.EndpointsURL.PoweredBy;
      const record = await axios.get(response, {
        headers: {
          "Content-type": "application/json",
        },
      });
      //console.log(record.data.data);
      return record.data.data;
    } catch (error) {
      setIsError(error.msg);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [poweredData] = await Promise.all([showPoweredBy()]);
        setPoweredByApi(poweredData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="mission_section">
        <div className="container">
          <div className="mission_title">
            <h2>
              ON A Mission to Shape Highly Qualified and Proficient
              <br /> <span>nursing professionals</span>
            </h2>
          </div>
          <div className="mission_card">
            <div className="mission_subtitle">
              <p className="mission_para_sub">Powered by</p>
              <p className="mission_para">
                India’s Most Trusted Nursing Platform{" "}
              </p>
            </div>
            <div className="mission_card_head">
              {poweredByApi.slice(0, 4).map((powered) => {
                const { poweredName, poweredImage } = powered;
                return (
                  <>
                    <div className="mission_parent">
                      <div className="mission_icon">
                        <img src={poweredImage} alt="" />
                      </div>
                      <div className="mission_content">
                        <p className="mission_heading">{poweredName}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
