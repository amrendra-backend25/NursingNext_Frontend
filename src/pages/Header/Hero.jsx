import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import "swiper/css";
import image1 from "/images/banner-1.jpg";
import image2 from "/images/banner-2.jpg";
import user from "/images/person.png";
import phone from "/images/phone.png";
import email from "/images/email.png";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Counter from "../Counter/Counter";
import Why from "../WhyUs/Why";
import Digital from "../DigitalPathshala/Digital";
import Mastermind from "../Mastermind/Mastermind";
import VideoData from "../VideoData/VideoData";
import Ournextian from "../OurNextians/Ournextian";
import Feedback from "../Feedback/Feedback";
import VisionandMission from "../VisionandMission/VisionandMission";
import Simplify from "../Simplify/Simplify";
import { ToastContainer, toast } from "react-toastify";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import DynamicAccordion from "../Accordian/DynamicAccordion";
const Home = () => {
  const [uploadForm, setUploadForm] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isError, setIsError] = useState([]);
  const [isHomeBanner, setIsHomeBanner] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUploadForm({ ...uploadForm, [name]: value });
    setIsError({ ...isError, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (!uploadForm.name.trim()) {
      newErrors.name = "Name is Required";
      isValid = false;
    }
    if (!uploadForm.phone.trim()) {
      newErrors.phone = "Phone is Required";
      isValid = false;
    }
    if (!uploadForm.email.trim()) {
      newErrors.email = "Email is Required";
      isValid = false;
    }
    setIsError(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBanner = { ...uploadForm, id: new Date() };
    if (validateForm()) {
      try {
        const response = await Paths.EndpointsURL.PostTopForm;
        const res = await axios({
          url: response,
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          data: JSON.stringify(newBanner),
        });
        setUploadForm(res.data.data);
        //console.log(res.data);
        toast.success("Form Submitted Successfully", {
          position: "top-right",
          autoClose: 1000,
        });
        setUploadForm({
          name: "",
          phone: "",
          email: "",
        });
      } catch (error) {
        toast.error("Error uploading data:", error);
      }
    }
  };

  const displayHomeBanner = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeBanner;
      axios({
        url: response,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((record) => {
        setIsHomeBanner(record.data.data);
        //console.log(record.data.products);
      });
    } catch (error) {
      setIsError(error.msg);
      //console.log(error.msg);
    }
  };

  useEffect(() => {
    displayHomeBanner();
  }, []);
  return (
    <>
      <section className="slider_header">
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
          {isHomeBanner.slice(0, 2).map((banner, index) => {
            const { bannerImage } = banner;
            return (
              <>
                <SwiperSlide>
                  <div className="image_slider" key={index}>
                    <img src={bannerImage} alt="" />
                    <div className="container"></div>
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
            <div className="header_from">
              <div className="container">
                <div className="text">Fill up & Claim the Offer!🎁</div>
                <div className="inputs">
                  <div className="input_error">
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
                  </div>
                  <div className="input_form">
                    <img src={phone} alt="" />
                    <input
                      type="phone"
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
                  <div className="submit_container">
                    <button className="submit">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="header_mobile_section">
        <div className="header_mobile_slider">
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
              <div className="header_mobile_offers_slider">
                <img src={image1} alt="" />
                <div className="container">
                  <div className="header_mobile_offers_content">
                    <h3>Offer of the Month</h3>
                    <h1>Discounts up to 40% Subscribe Now & Save</h1>
                    <button className="header_mobile_offers_btn">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header_mobile_offers_slider">
                <img src={image2} alt="" />
                <div className="container">
                  <div className="header_mobile_offers_content">
                    <h3>Offer of the Month</h3>
                    <h1>Discounts up to 40% Subscribe Now & Save</h1>
                    <button className="header_mobile_offers_btn">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header_mobile_offers_slider">
                <img src={image1} alt="" />
                <div className="container">
                  <div className="header_mobile_offers_content">
                    <h3>Offer of the Month</h3>
                    <h1>Discounts up to 40% Subscribe Now & Save</h1>
                    <button className="header_mobile_offers_btn">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="header_mobile_offers_slider">
                <img src={image2} alt="" />
                <div className="container">
                  <div className="header_mobile_offers_content">
                    <h3>Offer of the Month</h3>
                    <h1>Discounts up to 40% Subscribe Now & Save</h1>
                    <button className="header_mobile_offers_btn">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="header_mobile_offers_button">
              <div className="button-prev-slide">
                <IoIosArrowForward />
              </div>
              <div className="button-next-slide">
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
                    type="phone"
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
                {/* <div className="header_input_box">
                  <label for="">Email</label>
                    <input type="text" placeholder="Email" required />
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                    placeholder="Message*"
                  ></textarea>
                  <p>error</p>
                </div> */}
                <div className="header_input_btn">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Counter />
      <Why />
      <Digital />
      <Mastermind />
      <VideoData />
      <Ournextian />
      <Feedback />
      <VisionandMission />
      <Simplify />
      <DynamicAccordion />
      <ToastContainer />
    </>
  );
};

export default Home;
