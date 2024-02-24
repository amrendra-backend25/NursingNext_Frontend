import { AiOutlineExclamationCircle } from "react-icons/ai";
import "./DoubtModel.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
const DoubtModel = ({ isOpen, onClose, faculty }) => {
  const [registrationForm, setRegistrationForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
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
    if (!registrationForm.name.trim()) {
      newErrors.name = "Name is Required";
      isValid = false;
    }
    if (!registrationForm.phone.trim()) {
      newErrors.phone = "Phone is Required";
      isValid = false;
    }
    if (!registrationForm.email.trim()) {
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
        console.log(res);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 3000,
        });
        setRegistrationForm({
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

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="show_header">
        <div
          className={`about_modal ${isOpen ? "show" : ""}`}
          onClick={onClose}
        >
          <div className="about_modal_content" onClick={handleModalClick}>
            <div className="about_modal_header">
              <span className="about_modal_close" onClick={onClose}>
                &times;
              </span>
            </div>
            <div className="about_model_form">
              <div className="about_model_title">
                <h2>Have any doubts ?</h2>
                <p>
                  <span>
                    <AiOutlineExclamationCircle />
                  </span>
                  Fill in your details and we'll get back to you !
                </p>
              </div>
              <form action="" onSubmit={handleSubmit}>
                <div className="inputs_data">
                  <div className="input_form_data">
                    <input
                      type="text"
                      placeholder="Name*"
                      name="name"
                      id="name"
                      onChange={handleChange}
                      value={registrationForm.name}
                      autoComplete="Off"
                    />
                    {isError.name && <p className="error">{isError.name}</p>}
                  </div>
                  <div className="input_form_data">
                    <input
                      type="text"
                      placeholder="Phone*"
                      name="phone"
                      id="phone"
                      onChange={handleChange}
                      value={registrationForm.phone}
                      autoComplete="Off"
                    />
                    {isError.phone && <p className="error">{isError.phone}</p>}
                  </div>
                  <div className="input_form_data">
                    <input
                      type="email"
                      placeholder="Email*"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      value={registrationForm.email}
                      autoComplete="Off"
                    />
                    {isError.email && <p className="error">{isError.email}</p>}
                  </div>
                  <div className="textarea_form">
                    {/* <img src={message} alt="" /> */}
                    <textarea
                      type="text"
                      placeholder="Message*"
                      name="message"
                      id="message"
                      onChange={handleChange}
                      value={registrationForm.message}
                      autoComplete="Off"
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
      </div>
      <ToastContainer />
    </>
  );
};

export default DoubtModel;
