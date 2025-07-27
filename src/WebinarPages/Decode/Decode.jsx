import WebinarForm from "../BookRegister/WebinarForm";
import { useState, useEffect } from "react";
import "./Decode.css";
import vector from "/images/video/Vector.png";
import { BasePaths } from "../../webinarconfig/webinarBaseAPI";
import axios from "axios";
import CountDownTimer from "../CountDown/CountDownTimer";
import VideoModel from "../VideoModel/VideoModel";
import ReactPlayer from "react-player";
import RegistrationClosed from "../RegistrationClosed/RegistrationClosed";
const Decode = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState({});
  const [modalOpen1, setModalOpen1] = useState(false);
  const [selectedFaculty1, setSelectedFaculty1] = useState({});
  const [modalOpen3, setModalOpen3] = useState(false);
  const [selectedFaculty3, setSelectedFaculty3] = useState({});

  const [successMantraApi, setSuccessMantraApi] = useState([]);
  const [successVideoApi, setSuccessVideoApi] = useState([]);
  const [setIsError] = useState("");
  const targetDate = new Date("2024-04-18T18:59:59");

  const showSuccessVideo = async () => {
    try {
      const response = await BasePaths.EndpointsURL.SessionVideos;
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

  const showSuccessMantra = async () => {
    try {
      const response = await BasePaths.EndpointsURL.SuccessMantra;
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
        const [successMantraData, videoData] = await Promise.all([
          showSuccessMantra(),
          showSuccessVideo(),
        ]);
        setSuccessMantraApi(successMantraData);
        setSuccessVideoApi(videoData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setSelectedFaculty();
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal1 = () => {
    setSelectedFaculty1();
    setModalOpen1(true);
  };

  const closeModal1 = () => {
    setModalOpen1(false);
  };

  const openModal3 = () => {
    setSelectedFaculty3();
    setModalOpen3(true);
  };
  const closeModal3 = () => {
    setModalOpen3(false);
  };

  return (
    <>
      <section className="decode_success_section">
        <div className="container">
          <div className="decode_success_parent">
            <div className="decode_success_left">
              {successVideoApi.slice(0, 1).map((video) => {
                const { videoLink } = video;
                return (
                  <>
                    <div
                      className="decode_img_left"
                      onClick={() => openModal3()}
                    >
                      <ReactPlayer
                        className="react-player"
                        width="100%"
                        height="100%"
                        url={videoLink}
                      />
                      {/* <img src={simplify} alt="" /> */}
                      {/* <div className="youtube_btn" >
                        <FaYoutube className="fa_youtube"/>
                          <VideoModel />{" "}
                      </div> */}
                    </div>
                  </>
                );
              })}

              <div className="right_topic" onClick={openModal1}>
                <button>Register Now!</button>
              </div>
              <div className="left_img">
                <p className="topic_language">(WEBINAR WILL BE HINGLISH)</p>
              </div>
            </div>

            <div className="decode_success_right">
              <div className="decode_heading">
                <h2>Decode Success Mantra Webinar</h2>
                <p>
                  Nursing Next live in association with Target High Brings to
                  you a series of live webinar to make your nursing topic easy
                </p>
              </div>
              {successMantraApi.slice(0, 1).map((result) => {
                const { topic, date, time, day, sessionMentors, duration } =
                  result;
                return (
                  <>
                    <div className="topic_infection_parent">
                      <div className="topic_infection">
                        <h3 className="topic_content_head">
                          Last Webinar Topic: {topic}
                        </h3>
                        <p className="topic_date">
                          Held on {date} | {day} | {time}
                        </p>
                        <p className="topic_mentor">
                          | Session Mentor : {sessionMentors}
                        </p>
                        <p className="topic_hour">{duration}</p>
                      </div>
                      <div className="topic_infection_offer">
                        {/* <img src={vector} alt="" /> */}
                        <div className="offer_content">
                          {/* <p className="offer_price">Coming </p> */}
                          <p className="join_offer">Coming</p>
                          <p className="join_offer">Soon!</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

              <div className="offer_timer_parent">
                <div className="offer_timer_left">
                  {/* <p className="timer_haed">Offer Start in...</p> */}
                  <CountDownTimer targetDate={targetDate} />
                  {/* <Timer /> */}
                </div>
                <div className="offer_timer_right">
                  <p>
                    <span>*Note:</span> <b>Stay Tuned! </b>Keep following us for
                    all the latest updates and webinar schedules
                  </p>
                </div>
              </div>
            </div>
          </div>
          <RegistrationClosed
            isOpen={modalOpen1}
            onClose={closeModal1}
            person={selectedFaculty1}
          />
          <WebinarForm
            isOpen={modalOpen}
            onClose={closeModal}
            person={selectedFaculty}
          />
        </div>
        {/* Modal Component */}
        <VideoModel
          isOpen={modalOpen3}
          onClose={closeModal3}
          person={selectedFaculty3}
        />
      </section>
    </>
  );
};

export default Decode;
