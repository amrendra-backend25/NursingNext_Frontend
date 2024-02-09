import "./MainCourse.css";
import Planzero from "/images/courses/Planzero.png";
import PlanC from "/images/courses/PlanC.png";
import PlanA from "/images/courses/PlanA.png";
import PlanQB from "/images/courses/PlanQB.png";
import PlanNP from "/images/courses/PlanNP.png";
import PlanMScSNO from "/images/courses/PlanMScSNO.png";
import Planug from "/images/courses/Planug.png";
import PlanN from "/images/courses/PlanN.png";
import PlanTH from "/images/courses/PlanTH.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { Link } from "react-router-dom";

const MainCourse = () => {
  const [nextianAllCourses, setNextianAllCourses] = useState([]);
  const [masterAllCourses, setMasterAllCourses] = useState([]);
  const [allBannerCourses, setAllBannerCourses] = useState([]);
  const [setIsError] = useState("");
  const [isExpanded, setIsExpanded] = useState([]);
  //const [isKnowMore, setIsKnowMore] = useState([]);

  const coursesNextians = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeNextians;
      axios({
        url: response,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((record) => {
        setNextianAllCourses(record.data.data);
        //console.log(record.data.products);
      });
    } catch (error) {
      setIsError(error.msg);
      //console.log(error.msg);
    }
  };

  const showCourseBanner = async () => {
    try {
      const response = await Paths.EndpointsURL.CourseBanner;
      axios({
        url: response,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((record) => {
        setAllBannerCourses(record.data.data);
        //console.log(record.data.products);
      });
    } catch (error) {
      setIsError(error.msg);
      //console.log(error.msg);
    }
  };

  const coursesMasterMind = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeMasterMind;
      axios({
        url: response,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((record) => {
        setMasterAllCourses(record.data.data);
        //console.log(record.data.products);
      });
    } catch (error) {
      setIsError(error.msg);
      //console.log(error.msg);
    }
  };

  useEffect(() => {
    coursesNextians();
    coursesMasterMind();
    showCourseBanner();
  }, []);

  const handleToggleClick = (index) => {
    setIsExpanded((prevExpandedItems) => {
      const newExpandedItems = [...prevExpandedItems];
      newExpandedItems[index] = !newExpandedItems[index];
      return newExpandedItems;
    });
  };

  return (
    <section className="courses">
      {allBannerCourses.slice(0, 2).map((banner, index) => {
        const { bannerHeading, bannerSubHeading, bannerImage } = banner;
        return (
          <>
            <section
              className="course_section"
              style={{ backgroundImage: `url(${bannerImage})` }}
              key={index}
            >
              <div className="container">
                <div className="course_parent">
                  <div className="course_title">
                    <h2>{bannerHeading}</h2>
                    <p>{bannerSubHeading}</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}

      <section className="subscription_plan">
        <div className="container">
          <div className="subscription_title">
            <h2>Learning Modules</h2>
          </div>

          <div className="subscription_card_plan">
            <div className="subscription_parent">
              <div className="subscription_child">
                <div className="subscription_img">
                  <img src={Planzero} alt="" />
                </div>
                <div className="subscription_contet">
                  <Link to="/plan-zero">
                    <p className="subscription_heading">Plan Zero</p>
                  </Link>
                  <h5 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    Free Pack 4.0
                  </h5>
                  <h6 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    (Prepare with Us)
                  </h6>
                  <p>
                    Get Insights into the Content Covered Under All the
                    Subscription Plans Before Subscribing to the Suitable One!
                  </p>
                </div>
                <div className="subscription_btn">
                  <Link to="/plan-zero">
                    <button
                      style={{
                        marginTop: "65px",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
              <div className="subscription_child">
                <div className="subscription_img">
                  <img src={PlanC} alt="" />
                </div>
                <div className="subscription_contet">
                  <Link to="/plan-c-plus">
                    <p className="subscription_heading">Plan C+</p>
                  </Link>

                  <h5 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    Mastermind Pack
                  </h5>
                  <h6 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    (NORCET 6.0 & 7.0)
                  </h6>
                  <p>
                    The ONE-IN-ALL, ALL-IN-ONE Pack Covering TOP-NOTCH Content
                    Curated & Drafted by the Masterminds To Prepare You For
                    NORCET!
                  </p>
                </div>
                <div className="subscription_btn">
                  <Link to="/plan-c-plus">
                    <button
                      style={{
                        marginTop: "40px",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
              <div className="subscription_child">
                <div className="subscription_img">
                  <img src={PlanA} alt="" />
                </div>
                <div className="subscription_contet">
                  <Link to="/plan-a">
                    <p className="subscription_heading">Plan A</p>
                  </Link>

                  <h5 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    Crash Courses
                  </h5>
                  <h6 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    (Exam Centric)
                  </h6>
                  <p>
                    CHO, UPPSC, ESIC, DSSSB, OSSSC, APPSC, TSSSC, NIMHANS,
                    PGIMER, JIPMER, Kerala PSC, DHS, RRB, ISRO, CNCI, SCTIMST
                    Exams-Centric Crash Courses For Your!
                  </p>
                </div>
                <div className="subscription_btn">
                  <Link to="/plan-a">
                    <button
                      style={{
                        marginTop: "15px",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
              <div className="subscription_child">
                <div className="subscription_img">
                  <img src={PlanQB} alt="" />
                </div>
                <div className="subscription_contet">
                  <Link to="/plan-b">
                    {" "}
                    <p className="subscription_heading">Plan QB</p>
                  </Link>

                  <h5 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    Test Series 4.0
                  </h5>
                  <h6 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    (Invest in Practice)
                  </h6>
                  <p>360-Degree Approach From NORCET To NCLEX!</p>
                </div>
                <div className="subscription_btn">
                  <Link to="/plan-b">
                    <button
                      style={{
                        marginTop: "85px",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
              <div className="subscription_child">
                <div className="subscription_img">
                  <img src={PlanNP} alt="" />
                </div>
                <div className="subscription_contet">
                  <Link to="/plan-nnl-vsl">
                    <p className="subscription_heading">Plan NP</p>
                  </Link>

                  <h5 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    NNL-VSL Pack
                  </h5>
                  <h6 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    (Learning Nursing Procuders)
                  </h6>
                  <p>
                    To Enhance Your Clinical, Behavioral & Leadership Skills
                    with Simulation Videos Under the Guidance of Trained
                    Instructors!
                  </p>
                </div>
                <div className="subscription_btn">
                  <Link to="/plan-nnl-vsl">
                    <button
                      style={{
                        marginTop: "60px",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
              <div className="subscription_child">
                <div className="subscription_img">
                  <img src={PlanMScSNO} alt="" />
                </div>
                <div className="subscription_contet">
                  <Link to="/plan-msc">
                    <p className="subscription_heading">Plan MSc/SNO</p>
                  </Link>

                  <h5 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    Entrance Pack 3.0
                  </h5>
                  <h6 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    (The Next Level)
                  </h6>
                  <p>
                    Excel in All the MSc Entrance Exams (AIIMS/NIMHANS/JIPMER/
                    PGIMER/RAK/WBUHS/ RUHS/ILBS/Others) with Top-Notch Content!
                  </p>
                </div>
                <div className="subscription_btn">
                  <Link to="/plan-msc">
                    <button
                      style={{
                        marginTop: "35px",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      Know More
                    </button>
                  </Link>
                </div>
              </div>

              <div className="subscription_child">
                <div className="subscription_img">
                  <img src={Planug} alt="" />
                </div>
                <div className="subscription_contet">
                  <Link to="/plan-ug">
                    {" "}
                    <p className="subscription_heading">Plan UG</p>
                  </Link>

                  <h5 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    Undergraduate Pack
                  </h5>
                  <h6 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    (Mastermind UG)
                  </h6>
                  <p>
                    To Ease You with Your A-Z Career Needs From University Exams
                    to NORCET Or Other Competitive Exams with Step-By-Step
                    Learning!
                  </p>
                </div>
                <div className="subscription_btn">
                  <Link to="/plan-ug">
                    <button
                      style={{
                        marginTop: "55px",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      Know More
                    </button>
                  </Link>
                </div>
              </div>

              <div className="subscription_child">
                <div className="subscription_img">
                  <img src={PlanN} alt="" />
                </div>
                <div className="subscription_contet">
                  <Link to="/plan-rrr">
                    <p className="subscription_heading">Plan N</p>
                  </Link>

                  <h5 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    NOLEX PACK
                  </h5>
                  <h6 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    (Ticket to Global Success)
                  </h6>
                  <p>
                    A Compilation of Crisp & Concise Study Material For Your
                    Last-Minute Revision For NORCET!
                  </p>
                </div>
                <div className="subscription_btn">
                  <Link to="/plan-rrr">
                    <button
                      style={{
                        marginTop: "80px",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      Know More
                    </button>
                  </Link>
                </div>
              </div>

              <div className="subscription_child">
                <div className="subscription_img">
                  <img src={PlanTH} alt="" />
                </div>
                <div className="subscription_contet">
                  <Link to="/plan-th">
                    <p className="subscription_heading">Plan TH</p>
                  </Link>

                  <h5 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    Target High Digital Lite
                  </h5>
                  <h6 style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                    (Enter Unique Code Inside)
                  </h6>
                  <p>Comming Soon...!</p>
                </div>
                <div className="subscription_btn">
                  <Link to="/plan-th">
                    <button
                      style={{
                        marginTop: "103px",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="master_slider">
        <div className="container mm_container">
          <h3>Receive Step- By- Step Guidance from our Great Team</h3>
          <div className="master_head_2">
            <div className="master_two_part_2">
              <p>
                Our Teaching Experts are here to guide you at every step of the
                preparation, enabling you to run the course well and crack the
                entrance exam.
              </p>
            </div>
          </div>
          <div className="master_slider_main">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              navigation={{
                nextEl: ".button-prev-slide",
                prevEl: ".button-next-slide",
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
              breakpoints={{
                // When window width is >= 768px
                300: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                450: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // When window width is >= 768px
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                // When window width is >= 1024px
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {masterAllCourses.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="mastermind_card">
                    <div className="mastermind_img">
                      <img src={item.facilityImage} alt="" />
                      <div className="overlay">
                        <div className="content">
                          <p>{item.specialization}</p>
                        </div>
                      </div>
                    </div>
                    <div className="mastermind_title">
                      <h4>{item.facilityName}</h4>
                      {/* <p>{item.specialization}</p> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="master_button_main">
                <div className="master_right_button">
                  <div
                    className="button-prev-slide"
                    style={{ cursor: "pointer" }}
                  >
                    <IoIosArrowForward />
                  </div>
                  <div
                    className="button-next-slide"
                    style={{ cursor: "pointer" }}
                  >
                    <IoIosArrowBack />
                  </div>
                </div>
                <div className="master_see_main">
                  <button className="master_button-2">See All</button>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="ournextian_section">
        <div className="container">
          <div className="nextian_title">
            <div className="neaxtian_heading">
              <h3>What our learners say about the Courses</h3>
            </div>
            <div className="nextian_btn">
              <button>See All</button>
            </div>
          </div>

          <div className="ournextian_section_slider">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              navigation={{
                nextEl: ".button-prev-slide",
                prevEl: ".button-next-slide",
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              breakpoints={{
                // When window width is >= 768px
                300: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                // When window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // When window width is >= 1024px
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1191: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              {nextianAllCourses.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <div className="ournextian_card">
                    <div className="ournextian_img">
                      <img src={item.studentImage} alt={item.studentName} />
                    </div>
                    <div className="ournextian_title">
                      <h4>{item.studentName}</h4>
                      <span>{item.passYear}</span>
                      <p>
                        {isExpanded[index]
                          ? item.testimonial
                          : `${item.testimonial.substring(0, 140)}...`}
                      </p>
                      <span
                        style={{
                          cursor: "pointer",
                          color: "red",
                          marginBottom: "10px",
                        }}
                        onClick={() => handleToggleClick(index)}
                      >
                        {isExpanded[index] ? "Show less" : "  Show More"}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="ournextian_button">
                <div className="button-prev-slide">
                  <IoIosArrowForward />
                </div>
                <div className="button-next-slide">
                  <IoIosArrowBack />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MainCourse;

// {allCourses.map((result, index) => {
//     const { course_heading, subHeading, description, image } =
//       result;
//     return (
//       <>
//         <div className="subscription_child">
//           <div className="subscription_img">
//             <img src={image} alt="" />
//           </div>
//           <div className="subscription_contet">
//             <h4 className="subscription_heading">
//               {course_heading}
//             </h4>
//             <h6> {subHeading}</h6>
//             <p>
//               {isKnowMore[index]
//                 ? description
//                 : `${description.substring(0, 150)}...`}
//             </p>
//             <span
//               style={{
//                 cursor: "pointer",
//                 color: "red",
//                 marginBottom: "10px",
//               }}
//               onClick={() => handleToggleMore(index)}
//             >
//               {/* {isKnowMore[index] ? "Show less" : "  Show More"} */}
//             </span>
//           </div>
//           <div className="subscription_btn">
//             <button>Know More</button>
//           </div>
//         </div>
//       </>
//     );
//   })}
