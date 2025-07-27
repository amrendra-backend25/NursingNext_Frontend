import "./ContactUs.css";
import { AiOutlineMessage } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import need01 from "/images/contact/need1.png";
import need02 from "/images/contact/need2.png";
import need03 from "/images/contact/need3.png";
import need04 from "/images/contact/need4.png";
import nursing from "/images/contact/nursing.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Simplify from "../Simplify/Simplify";
import { useEffect, useState } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import Layout from "../Layout/Layout";
import { createContactUsLead } from "../LeadsquaredService/LeadsquaredService";
const ContactUs = () => {
  const [registrationForm, setRegistrationForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const [canonicalUrl] = useState("");
  const [isError, setIsError] = useState([]);
  const [isSuccess, setIsSuccess] = useState("");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegistrationForm({ ...registrationForm, [name]: value });
    setIsError({ ...isError, [name]: "" });
    setIsSuccess({ message: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (!registrationForm.name) {
      newErrors.name = "Name is Required";
      isValid = false;
    }
    if (!registrationForm.phone) {
      newErrors.phone = "Phone number is Required";
      isValid = false;
    } else if (registrationForm.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits long";
      isValid = false;
    } else if (!/^\d{10}$/.test(registrationForm.phone)) {
      newErrors.phone = "Phone number can only contain digits";
      isValid = false;
    }
    if (!registrationForm.email) {
      newErrors.email = "Email is Required";
      isValid = false;
    }
    if (!registrationForm.message.trim()) {
      newErrors.message = "Message is Required";
      isValid = false;
    }
    setIsError(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createContactUsLead(registrationForm);
    const newOffers = { ...registrationForm, id: new Date() };
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
        setRegistrationForm(res.data.data);
        setIsSuccess({ message: res.data.message });
        setRegistrationForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        navigate("/thank-you");
        setTimeout(() => {
          setIsSuccess("");
        }, 2000);
      } catch (error) {
        setIsError("Failed uploading data:", error);
      }
    }
  };

  useEffect(() => {
    const currentUrl = window.location.origin + location.pathname;
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", currentUrl);
    }
  }, [location]);
  return (
    <>
      <Layout
        title="Contact Us - Get in Touch Today!"
        description="Have questions or need support? Reach out to us via our contact form. We're here to assist you with any inquiries you may have."
      ></Layout>
      <link rel="canonical" href={canonicalUrl} />
      <section className="contact_section">
        <div className="container">
          s
          <div className="contact_parent">
            <div className="contact_title">
              <h1>contact us</h1>
              <p>
                For all the queries, questions and feedback you might have that
                is, towards success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="need_help_section">
        <div className="container">
          <div className="need_title_1">
            <h4>Need Help?</h4>
            <h2>We're here whenever you need us!</h2>
            <p>
              We provide personalized guidance and counseling to all our
              Subscribers, to ensure that their preparation is in the right
              direction, that is, toward success. That’s why we have an active
              support service, handled especially by our:
            </p>
          </div>
          <div className="need_help_card">
            <div className="need_help_data">
              <div className="need_img">
                <img src={need01} alt="" />
              </div>
              <div className="need_title">
                <h3>Nursing/Academic </h3>
                <p>
                  CounselorsTo suggest to you what to refer to as per your needs
                  and wants.
                </p>
              </div>
            </div>
            <div className="need_help_data">
              <div className="need_img">
                <img src={need02} alt="" />
              </div>
              <div className="need_title">
                <h3>Relationship Managers </h3>
                <p>
                  CounselorsTo suggest to you what to refer to as per your needs
                  and wants.
                </p>
              </div>
            </div>
            <div className="need_help_data">
              <div className="need_img">
                <img src={need03} alt="" />
              </div>
              <div className="need_title">
                <h3>Counselor </h3>
                <p>To teach you what to study and how to study.</p>
              </div>
            </div>
            <div className="need_help_data">
              <div className="need_img">
                <img src={need04} alt="" />
              </div>
              <div className="need_title">
                <h3>Scientific Team</h3>
                <p>To clear your Scientific Doubts within 24-48 Hours​.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map_section">
        <div className="container">
          <div className="map_parent">
            <div className="map_left_section">
              <p className="map_address">Address</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448451.27253888355!2d77.32726!3d28.584006000000002
            !3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb363fffffff%3A0xf7ba8f608b19e8e2!2sNursing%20Next%20Live%20
            (Nursing%20Next%20Exam%20Prep%20Private%20Limited)!5e0!3m2!1sen!2sus!4v1705992078977!5m2!1sen!2sus"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="map_right_section">
              <p className="link_address">
                Nursing Next Exam Prep Private Limited.
              </p>
              <div className="link_title">
                <div className="link_icon">
                  <Link>
                    <AiOutlineMessage />
                  </Link>
                </div>
                <div className="mail_link">
                  <Link>
                    <p>
                      Address – 2nd Floor, Amco Tower, A-5,6,7, Amaltash Marg, A
                      Block, Sector 9, Noida, Uttar Pradesh 201301, India
                    </p>
                  </Link>
                </div>
              </div>
              <div className="link_title">
                <div className="link_icon">
                  <Link>
                    <AiOutlineMessage />
                  </Link>
                </div>
                <div className="mail_link">
                  <Link>
                    <p>Free Users –queries@nursingnextlive.com</p>
                    <p>Paid Users – feedback@nursingnextlive.com</p>
                    <p>Institutes – faculty@nursingnextlive.com</p>
                  </Link>
                </div>
              </div>
              <div className="link_title">
                <div className="link_icon">
                  <Link>
                    <FiPhoneCall />
                  </Link>
                </div>
                <div className="mail_link">
                  <Link>
                    <p>Free Users – 9919914449</p>
                    <p>Paid Users – 9919915515</p>
                    <p>Institutes – 9919916949+91- 9999117411</p>
                  </Link>
                </div>
              </div>
              <div className="link_title">
                <div className="link_icon">
                  <Link>
                    <FaWhatsapp />
                  </Link>
                </div>
                <div className="mail_link">
                  <Link>
                    <p>WhatsAppFree Users – 9919914449</p>
                    <p>Paid Users – 9919915515</p>
                    <p>Institutes – 9919916949</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="leave_message_section">
        <div className="container">
          <div className="leave_background">
            <div className="leave_title">
              <h3>Leave a Message</h3>
              <p>
                We're here to assist you! If you have any questions, feedback,
                or require assistance, please don't hesitate to reach out. We
                appreciate your interest in connecting with us.
              </p>
            </div>
            <div className="leave_form_parent">
              <div className="learn_form_left">
                <form onSubmit={handleSubmit}>
                  <div className="inputs">
                    <div className="input_form">
                      <input
                        type="text"
                        placeholder="Full Name*"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        value={registrationForm.name}
                        autoComplete="Off"
                      />
                      {isError.name && <p className="error">{isError.name}</p>}
                    </div>
                    <div className="input_form">
                      <input
                        type="email"
                        placeholder="Email Id*"
                        name="email"
                        id="email"
                        onChange={handleChange}
                        value={registrationForm.email}
                        autoComplete="Off"
                      />
                      {isError.email && (
                        <p className="error">{isError.email}</p>
                      )}
                    </div>
                    <div className="input_form">
                      <input
                        type="number"
                        placeholder="Phone*"
                        name="phone"
                        id="phone"
                        onChange={handleChange}
                        value={registrationForm.phone}
                        autoComplete="Off"
                      />
                      {isError.phone && (
                        <p className="error">{isError.phone}</p>
                      )}
                    </div>
                    <div className="textarea_form">
                      {/* <img src={message} alt="" /> */}
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        placeholder="Message*"
                        onChange={handleChange}
                        value={registrationForm.message}
                        autoComplete="Off"
                        cols={30}
                        rows={10}
                      >
                        {isError.message && (
                          <p className="error">{isError.message}</p>
                        )}
                      </textarea>
                    </div>
                    <div className="submit_contact">
                      <button className="submit" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                  {isSuccess.message && (
                    <div className="submit_success_1">
                      <p className="success">{isSuccess.message}</p>
                    </div>
                  )}
                </form>
              </div>
              <div className="learn_form_right">
                <div className="form_img">
                  <img src={nursing} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Simplify />
    </>
  );
};

export default ContactUs;
