import "./Digital.css";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { Link } from "react-router-dom";

const Digital = () => {
  const [digitalApi, setDigitalApi] = useState([]);
  const [setIsError] = useState("");

  const pathshalaDetails = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeNNLCourses;
      axios({
        url: response,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((record) => {
        setDigitalApi(record.data.data);
        //console.log(record.data);
      });
    } catch (error) {
      setIsError(error.msg);
      //console.log(error.msg);
    }
  };

  useEffect(() => {
    pathshalaDetails();
  }, []);

  return (
    <section className="digital_section">
      <div className="container">
        <div className="digital_title">
          <h3>Your Digital Coaching Pathshala</h3>
        </div>
        <div className="digital_parent">
          {digitalApi.slice(0, 8).map((result) => {
            const { courseHeading, subHeading, subHeading2, courseImage } =
              result;
            return (
              <>
                <div className="digital_card">
                  <div className="digital_img">
                    <img src={courseImage} alt="" />
                  </div>
                  <div className="digital_title">
                    <h3
                      style={{
                        fontWeight: "bold",
                        color: "hsl(358.04deg 74.19% 51.37%",
                      }}
                    >
                      {courseHeading}
                    </h3>
                    <h5>{subHeading}</h5>
                    <h3>{subHeading2}</h3>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="digital_btn_submit">
          <Link to="all-courses">
            <button className="digital_btn">Know More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Digital;
