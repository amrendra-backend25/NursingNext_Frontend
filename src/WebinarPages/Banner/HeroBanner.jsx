import { Link } from "react-router-dom";
import "./HeroBanner.css";
// import IntroImg from "/images/Banner/Home_Page_Slider01.jpg";
import { useState, useEffect, lazy, Suspense } from "react";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";
import { BasePaths } from "../../webinarconfig/webinarBaseAPI";
import RegistrationClosed from "../RegistrationClosed/RegistrationClosed";
const Mission = lazy(() => import("../Mission/Mission"));
const Decode = lazy(() => import("../Decode/Decode"));
const Register = lazy(() => import("../Register/Register"));
const Simplified = lazy(() => import("../Simplified/Simplified"));
const Upcoming = lazy(() => import("../Upcoming/Upcoming"));
const BookRegister = lazy(() => import("../BookRegister/BookRegister"));
const OurLearners = lazy(() => import("../OurLearners/OurLearners"));
const Accordian = lazy(() => import("../Accordian/Accordian"));
const WebinarForm = lazy(() => import("../BookRegister/WebinarForm"));

const HeroBanner = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState({});
  const [modalOpen1, setModalOpen1] = useState(false);
  const [selectedFaculty1, setSelectedFaculty1] = useState({});
  const [homeBannerApi, setHomeBannerApi] = useState([]);
  const [setIsError] = useState("");
  const showHomeBanner = async () => {
    try {
      const response = await BasePaths.EndpointsURL.HomeBanner;
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
        const [BannerData] = await Promise.all([showHomeBanner()]);
        setHomeBannerApi(BannerData);
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
  return (
    <>
      <section className="slider_header_webinar">
        <div className="hero">
          {homeBannerApi.slice(0, 1).map((banner) => {
            const { bannerImage } = banner;
            return (
              <>
                <div className="mask">
                  <img className="intro_img" src={bannerImage} alt="IntroImg" />
                </div>
                <div className="container">
                  <div className="content">
                    <p className="hero_subtitle">
                      Attention BSc Nursing Undergrads!
                    </p>
                    <h2 className="heading_title">
                      Are you striving for Success in your UG Exams?
                    </h2>
                    <p className="hero_para">
                      Ignite the flame to excel with our Target High Next
                      Nursing Decode Webinars
                    </p>
                    <Link className="hero_link"># NursingUGsimplified</Link>
                    {/* <div className="hero_btn" onClick={openModal}> */}
                    <div className="hero_btn" onClick={openModal1}>
                      <button>Stay Tuned for Upcoming Webinars</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
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
      </section>
      <Suspense
        fallback={
          <div style={{ margin: "350px", textAlign: "center" }}>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        }
      >
        <Decode />
        <Register />
        <Upcoming />
        <BookRegister />
        <OurLearners />
        <Accordian />
        <Simplified />
        <Mission />
        <ScrollToTopButton />
      </Suspense>
    </>
  );
};

export default HeroBanner;
