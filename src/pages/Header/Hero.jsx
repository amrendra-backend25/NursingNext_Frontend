import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { lazy, useState, Suspense } from "react";
import "swiper/css";
import user from "/images/person.png";
import phone from "/images/phone.png";
import email from "/images/email.png";
import { FaMessage } from "react-icons/fa6";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Why = lazy(() => import("../WhyUs/Why"));
const Digital = lazy(() => import("../DigitalPathshala/Digital"));
const Mastermind = lazy(() => import("../Mastermind/Mastermind"));
import VideoData from "../VideoData/VideoData";
const Ournextian = lazy(() => import("../OurNextians/Ournextian"));

import { ToastContainer, toast } from "react-toastify";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createLead } from "../LeadsquaredService/LeadsquaredService";
import { NewWhyChoose } from "../WhyUs/NewWhyChoose";
const Home = () => {
  const [uploadForm, setUploadForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isError, setIsError] = useState([]);
  const [isSuccess, setIsSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUploadForm({ ...uploadForm, [name]: value });
    setIsError({ ...isError, [name]: "" });
    setIsSuccess({ message: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (!uploadForm.name.trim()) {
      newErrors.name = "Name is Required";
      isValid = false;
    }
    if (!uploadForm.phone) {
      newErrors.phone = "Phone number is Required";
      isValid = false;
    } else if (uploadForm.phone.length !== 10) {
      newErrors.phone = "Number must be 10 digits long only";
      isValid = false;
    } else if (!/^\d{10}$/.test(uploadForm.phone)) {
      newErrors.phone = "Phone number can only contain digits";
      isValid = false;
    }
    if (!uploadForm.email.trim()) {
      newErrors.email = "Email is Required";
      isValid = false;
    }
    if (!uploadForm.message.trim()) {
      newErrors.message = "Message is Required";
      isValid = false;
    }
    setIsError(newErrors);
    return isValid;
  };

  const validateLeadData = (data) => {
    if (!data.name || !data.email || !data.phone || !data.message) {
      throw new Error("Missing required lead details");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      validateLeadData(uploadForm);
      await createLead(uploadForm);
      const newBanner = { ...uploadForm, id: new Date().toISOString() };
      const response = await axios.post(
        Paths.EndpointsURL.PostTopForm,
        newBanner,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setIsSuccess({ message: response.data.message });
      resetForm();
      navigate("/thank-you");
      setTimeout(() => setIsSuccess(""), 1000);
    } catch (error) {
      handleSubmissionError(error);
    }
  };

  const resetForm = () => {
    setUploadForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  const handleSubmissionError = (error) => {
    const errorMessage =
      error.response?.data?.ExceptionMessage || error.message;
    const prefix = error.response?.data?.ExceptionMessage
      ? "LeadSquared Error: "
      : "Error: ";
    toast.error(prefix + errorMessage);
  };

  return (
    <>
      <section className="slider_header">
        <Swiper
          className="heroBannerSlider"
          spaceBetween={0}
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
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {NewWhyChoose?.slice(0, 2).map((banner, index) => {
            const { img } = banner;
            return (
              <>
                <SwiperSlide>
                  <div className="image_slider" key={index}>
                    <img src={img} alt="" />
                  </div>
                </SwiperSlide>
              </>
            );
          })}

          <div className="swiper_button">
            <div className="button-prev-slide" style={{ cursor: "pointer" }}>
              <IoIosArrowForward />
            </div>
            <div className="button-next-slide" style={{ cursor: "pointer" }}>
              <IoIosArrowBack />
            </div>
          </div>
        </Swiper>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="header_from_1">
              <div className="container">
                <div className="text">Fill up & Claim the Offer!🎁</div>
                <div className="inputs">
                  <div className="input_form">
                    <img src={user} alt="" />
                    <input
                      type="text"
                      placeholder="Name*"
                      id="name"
                      name="name"
                      value={uploadForm.name}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    {isError.name && <p className="error">{isError.name}</p>}
                  </div>
                  <div className="input_form">
                    <img src={phone} alt="" />
                    <input
                      type="number"
                      placeholder="Phone*"
                      id="phone"
                      name="phone"
                      value={uploadForm.phone}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    {isError.phone && <p className="error">{isError.phone}</p>}
                  </div>
                  <div className="input_form">
                    <img src={email} alt="" />
                    <input
                      type="email"
                      placeholder="Email*"
                      id="email"
                      name="email"
                      value={uploadForm.email}
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    {isError.email && <p className="error">{isError.email}</p>}
                  </div>
                  <div className="textarea_data">
                    <div className="message_box">
                      <FaMessage />
                    </div>
                    <textarea
                      type="message"
                      placeholder="Message*"
                      id="message"
                      name="message"
                      value={uploadForm.message}
                      onChange={handleChange}
                      autoComplete="off"
                    ></textarea>
                    {isError.message && (
                      <p className="error">{isError.message}</p>
                    )}
                  </div>
                  <div className="banner_submit_container">
                    <button className="submit" type="submit">
                      Submit
                    </button>
                  </div>
                  {isSuccess.message && (
                    <div className="submit_success">
                      <p className="success">{isSuccess.message}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      <section className="header_mobile_section">
        <div className="header_mobile_slider">
          <Swiper
            className="heroBannerSlider"
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".button-prev-slide",
              prevEl: ".button-next-slide",
            }}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
          >
            {NewWhyChoose?.slice(0, 2).map((banner) => {
              const { img } = banner;
              return (
                <>
                  <SwiperSlide>
                    <div className="header_mobile_offers_slider">
                      <img src={img} alt="" />
                      <div className="container">
                        <div className="header_mobile_offers_content"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}

            <div className="header_mobile_offers_button">
              <div className="button-prev-slide" style={{ cursor: "pointer" }}>
                <IoIosArrowForward />
              </div>
              <div className="button-next-slide" style={{ cursor: "pointer" }}>
                <IoIosArrowBack />
              </div>
            </div>
          </Swiper>
        </div>
        <div className="header_form_section">
          <div className="header_main_container">
            <div className="header_register_form">
              <h2>Fill up & Claim the Offer!🎁</h2>
              <form action="" className="header_form" onSubmit={handleSubmit}>
                <div className="header_input_box">
                  {/* <label for="">Full Name</label> */}
                  <input
                    type="text"
                    placeholder="Name*"
                    id="name"
                    name="name"
                    value={uploadForm.name}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {isError.name && <p className="error">{isError.name}</p>}
                </div>
                <div className="header_input_box">
                  {/* <label for="">phone</label> */}
                  <input
                    type="number"
                    placeholder="Phone*"
                    id="phone"
                    name="phone"
                    value={uploadForm.phone}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {isError.phone && <p className="error">{isError.phone}</p>}
                </div>
                <div className="header_input_box">
                  {/* <label for="">Email</label> */}
                  <input
                    type="email"
                    placeholder="Email*"
                    id="email"
                    name="email"
                    value={uploadForm.email}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {isError.email && <p className="error">{isError.email}</p>}
                </div>
                <div className="header_textarea_form">
                  {/* <img src={message} alt="" /> */}
                  <textarea
                    type="text"
                    placeholder="Message*"
                    name="message"
                    id="message"
                    onChange={handleChange}
                    value={uploadForm.message}
                  ></textarea>
                  {isError.message && (
                    <p className="error">{isError.message}</p>
                  )}
                </div>
                <div className="header_input_btn">
                  <button type="submit">Submit</button>
                </div>
                {isSuccess.message && (
                  <p className="success">{isSuccess.message}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Suspense>
        <Mastermind />
        <Why />
        <Digital />
        <VideoData />
        <Ournextian />
      </Suspense>
      <ToastContainer />
    </>
  );
};

export default Home;
