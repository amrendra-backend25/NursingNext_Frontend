import "./Offers.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "/images/banner-1.jpg";
import image2 from "/images/banner-2.jpg";
import user from "/images/person.png";
import phone from "/images/phone.png";
import email from "/images/email.png";
import message from "/images/offers/message.png";
import icon1 from "/images/plan_zero/icon1.png";
import help from "/images/aboutUs/Help.png";
import shape from "/images/aboutUs/Shape.svg";
import FAQ from "/images/aboutUs/FAQs.png";
import app from "/images/aboutUs/App.png";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Offers = () => {
  const [masterAllCourses, setMasterAllCourses] = useState([]);
  const [offersBanner, setOffersBanner] = useState([]);
  // const [selectedValidity, setSelectedValidity] = useState("");

  const [offersForm, setOffersForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isError, setIsError] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setOffersForm({ ...offersForm, [name]: value });
    setIsError({ ...isError, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (!offersForm.name.trim()) {
      newErrors.name = "Name is Required";
      isValid = false;
    }
    if (!offersForm.phone.trim()) {
      newErrors.phone = "Phone is Required";
      isValid = false;
    }
    if (!offersForm.email.trim()) {
      newErrors.email = "Email is Required";
      isValid = false;
    }
    if (!offersForm.message.trim()) {
      newErrors.message = "Message is Required";
      isValid = false;
    }
    setIsError(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOffers = { ...offersForm, id: new Date() };
    if (validateForm()) {
      try {
        const response = await Paths.EndpointsURL.OffersForm;
        const res = await axios({
          url: response,
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          data: JSON.stringify(newOffers),
        });
        setOffersForm(res.data.data);
        //console.log(res);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 1000,
        });
        setOffersForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } catch (error) {
        toast.error("Error uploading data:", error);
      }
    }
  };

  const coursesMasterMind = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeMasterMind;
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

  const showOffersBanner = async () => {
    try {
      const response = await Paths.EndpointsURL.OffersBanner;
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

  const [monthsOffers, setMonthsOffers] = useState([]);
  const showOffersOfmonths = async (validity) => {
    try {
      const response =
        (await Paths.EndpointsURL.OfferOfMonths) + `?validity=${validity}`;
      const record = await axios.get(response, {
        headers: {
          "Content-type": "application/json",
        },
      });
      return record.data.data;
    } catch (error) {
      setIsError(error.message);
      return [];
    }
  };

  // const handleValidityClick = async (validity) => {
  //   setSelectedValidity(validity);
  //   const offerData = await showOffersOfmonths(validity);
  //   setMonthsOffers(offerData);
  // };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [offersData, mastermindData, offerMonthData] = await Promise.all([
          showOffersBanner(),
          coursesMasterMind(),
          showOffersOfmonths(),
        ]);
        setOffersBanner(offersData);
        setMasterAllCourses(mastermindData);
        setMonthsOffers(offerMonthData);
      } catch (error) {
        setIsError(error.message);
      }
    };
    fetchData();
  });
  return (
    <>
      <section className="offers_section">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".button-prev-slide",
            prevEl: ".button-next-slide",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {offersBanner.slice(0, 2).map((banner) => {
            const { bannerImages } = banner;
            return (
              <>
                <SwiperSlide>
                  <div className="offers_slider">
                    <img src={bannerImages} alt="" />
                    <div className="container">
                      <div className="offers_content">
                        {/* <h3>Offer of the Month</h3>
                        <h1>Discounts up to 40% Subscribe Now & Save</h1>
                        <button className="offers_btn">Know More</button> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </>
            );
          })}
          <div className="offers_button">
            <div className="button-prev-slide" style={{ cursor: "pointer" }}>
              <IoIosArrowForward />
            </div>
            <div className="button-next-slide" style={{ cursor: "pointer" }}>
              <IoIosArrowBack />
            </div>
          </div>
        </Swiper>
        <div className="container">
          <div className="offers_from">
            <div className="container">
              <div className="text">Fill & Get the Offers</div>
              <form action="" onSubmit={handleSubmit}>
                <div className="inputs">
                  <div className="input_form">
                    <img src={user} alt="" />
                    <input
                      type="text"
                      placeholder="Name*"
                      name="name"
                      id="name"
                      onChange={handleChange}
                      value={offersForm.name}
                      autoComplete="Off"
                    />
                    {isError.name && <p className="error">{isError.name}</p>}
                  </div>
                  <div className="input_form">
                    <img src={phone} alt="" />
                    <input
                      type="phone"
                      placeholder="Phone*"
                      name="phone"
                      id="phone"
                      onChange={handleChange}
                      value={offersForm.phone}
                      autoComplete="Off"
                    />
                    {isError.phone && <p className="error">{isError.phone}</p>}
                  </div>
                  <div className="input_form">
                    <img src={email} alt="" />
                    <input
                      type="email"
                      placeholder="Email*"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      value={offersForm.email}
                      autoComplete="Off"
                    />
                    {isError.email && <p className="error">{isError.email}</p>}
                  </div>
                  <div className="textarea_form">
                    <img src={message} alt="" />
                    <textarea
                      type="text"
                      placeholder="Message*"
                      name="message"
                      id="message"
                      onChange={handleChange}
                      value={offersForm.message}
                    ></textarea>
                    {isError.message && (
                      <p className="error">{isError.message}</p>
                    )}
                  </div>
                  <div className="submit_container">
                    <button className="submit" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile_section">
        <div className="mobile_slider">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".button-prev-slide",
              prevEl: ".button-next-slide",
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
          >
            <SwiperSlide>
              <div className="mobile_offers_slider">
                <img src={image1} alt="" />
                <div className="container">
                  <div className="mobile_offers_content">
                    <h3>Offer of the Month</h3>
                    <h1>Discounts up to 40% Subscribe Now & Save</h1>
                    <button className="mobile_offers_btn">Know More</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile_offers_slider">
                <img src={image2} alt="" />
                <div className="container">
                  <div className="mobile_offers_content">
                    <h3>Offer of the Month</h3>
                    <h1>Discounts up to 40% Subscribe Now & Save</h1>
                    <button className="mobile_offers_btn">Know More</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile_offers_slider">
                <img src={image1} alt="" />
                <div className="container">
                  <div className="mobile_offers_content">
                    <h3>Offer of the Month</h3>
                    <h1>Discounts up to 40% Subscribe Now & Save</h1>
                    <button className="mobile_offers_btn">Know More</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="mobile_offers_slider">
                <img src={image2} alt="" />
                <div className="container">
                  <div className="mobile_offers_content">
                    <h3>Offer of the Month</h3>
                    <h1>Discounts up to 40% Subscribe Now & Save</h1>
                    <button className="mobile_offers_btn">Know More</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="mobile_offers_button">
              <div className="button-prev-slide" style={{ cursor: "pointer" }}>
                <IoIosArrowForward />
              </div>
              <div className="button-next-slide" style={{ cursor: "pointer" }}>
                <IoIosArrowBack />
              </div>
            </div>
          </Swiper>
        </div>
        <div className="form_section">
          <div className="main_container">
            <div className="register_form">
              <h2>Fill up & Claim the Offer!🎁</h2>
              <form action="" className="form" onSubmit={handleSubmit}>
                <div className="input_box">
                  {/* <label for="">Full Name</label> */}
                  <input
                    type="text"
                    placeholder="Name*"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={offersForm.name}
                    autoComplete="Off"
                  />

                  {isError.name && (
                    <p className="input-error">{isError.name}</p>
                  )}
                </div>
                <div className="input_box">
                  {/* <label for="">phone</label> */}
                  <input
                    type="text"
                    placeholder="Phone*"
                    name="phone"
                    id="phone"
                    onChange={handleChange}
                    value={offersForm.phone}
                    autoComplete="Off"
                  />
                  {isError.phone && (
                    <p className="input-error">{isError.phone}</p>
                  )}
                </div>
                <div className="input_box">
                  {/* <label for="">Email</label> */}
                  <input
                    type="text"
                    placeholder="Email*"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={offersForm.email}
                    autoComplete="Off"
                  />
                  {isError.email && (
                    <p className="input-error">{isError.email}</p>
                  )}
                </div>
                <div className="input_box">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                    placeholder="Message*"
                    onChange={handleChange}
                    value={offersForm.message}
                    autoComplete="Off"
                  ></textarea>
                  {isError.message && (
                    <p className="input-error">{isError.message}</p>
                  )}
                </div>
                <div className="input_btn">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="offer_month_section">
        <div className="container">
          <div className="month_title">
            <h2>Offer of the Month</h2>
          </div>
          <div className="month_card_section">
            <div className="month_card_parent">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                navigation={{
                  nextEl: ".button-prev-slide",
                  prevEl: ".button-next-slide",
                }}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 5000,
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
                  450: {
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
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1100: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {monthsOffers.slice(0, 4).map((offers) => {
                  const {
                    offersBanner,
                    description,
                    validity6,
                    validity12,
                    validity24,

                    price6,
                    price12,
                    price24,
                  } = offers;
                  const sentences = description.split(". ");
                  return (
                    <>
                      <SwiperSlide>
                        <div className="month_card_plan">
                          <div className="month_background">
                            <img src={offersBanner} alt="" />
                          </div>

                          {/* <div className="plan_validity">
                            {monthsOffers.slice(0, 3).map((offers) => {
                              const { offersValidity, offersPrice } = offers;
                              return (
                                <>
                                  <div className="validity_content">
                                    <p
                                      className={`validity_month ${
                                        selectedValidity === offersValidity
                                          ? "selected"
                                          : ""
                                      }`}
                                      onClick={() =>
                                        handleValidityClick(offersValidity)
                                      }
                                    >
                                      {offersValidity}
                                    </p>
                                    <p className="validity_price">
                                      ₹ {offersPrice}
                                    </p>
                                  </div>
                                </>
                              );
                            })}
                          </div> */}

                          <div className="plan_validity">
                            <div className="validity_content">
                              <p className="validity_month">{validity6}</p>
                              <p className="validity_price">₹ {price6}</p>
                            </div>
                            <div className="validity_content">
                              <p className="validity_month">{validity12}</p>
                              <p className="validity_price">₹ {price12}</p>
                            </div>
                            <div className="validity_content">
                              <p className="validity_month">{validity24}</p>
                              <p className="validity_price">₹ {price24}</p>
                            </div>
                          </div>

                          <div className="underline_plan"></div>
                          <div className="lectures_content">
                            {sentences.map((sentence, sentenceIndex) => {
                              return (
                                <>
                                  <p key={sentenceIndex}>
                                    <span>
                                      <FaCheck />
                                    </span>
                                    {sentence}
                                  </p>
                                </>
                              );
                            })}
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  );
                })}

                <div className="month_plan_button">
                  <div className="button_right">
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
                  <div className="button_left">See All</div>
                </div>
              </Swiper>
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
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <div className="master_button2">
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
                <div className="master_see">
                  <button className="master_button-2">See All</button>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>

      <section className="refer_section">
        <div className="container">
          <div className="refer_sub_title">
            <h3>You Can Also Refer These Courses</h3>
          </div>
          <div className="refer_card_parent">
            <div className="refer_child_card">
              <div className="refer_img">
                <img src={icon1} alt="" />
              </div>
              <div className="refer_title">
                <h5>
                  Plan C+ <br />
                  (Mastermind Pack)
                </h5>
                <p>
                  The One-In-All, All-In-One Pack to help you become the Master
                  of all Subjects!
                </p>
                <div className="refer_btn">
                  <Link to="/plan-c-plus">
                    <button>Know More</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="refer_child_card">
              <div className="refer_img">
                <img src={icon1} alt="" />
              </div>
              <div className="refer_title">
                <h5>
                  Plan B <br />
                  (Test Series)
                </h5>
                <p>
                  The One-In-All, All-In-One Pack to help you become the Master
                  of all Subjects!
                </p>
                <div className="refer_btn">
                  <Link to="/plan-b">
                    <button>Know More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_support">
        <div className="container">
          <div className="about_support_title">
            <div className="about_support_content">
              <img src={help} alt="" />
              <h4>Help & Support</h4>
              <p>Contact us for any Queries, service requests or complaints</p>
            </div>
            <div className="about_support_content">
              <img src={shape} alt="" />
              <h4>Your Feedback</h4>
              <p>Do you have any suggestions? We’d love to hear from you!</p>
            </div>
            <div className="about_support_content">
              <img src={FAQ} alt="" />
              <h4>FAQs</h4>
              <p>All your frequently asked questions, answered in one place</p>
            </div>
            <div className="about_support_content">
              <img src={app} alt="" />
              <h4>Download App</h4>
              <p>Get the App and access a world of goodness</p>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Offers;
