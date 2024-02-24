import { AiOutlineExclamationCircle } from "react-icons/ai";
import "./FeedbackModel.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
const FeedbackModel = ({ isOpen, onClose }) => {
  const [registrationForm, setRegistrationForm] = useState({
    name: "",
    phone: "",
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
      <div className={`about_modal ${isOpen ? "show" : ""}`} onClick={onClose}>
        <div className="about_modal_content" onClick={handleModalClick}>
          <div className="about_modal_header">
            <span className="about_modal_close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="about_model_form">
            <div className="about_model_title">
              <h2>Your Feedback is valuable </h2>
              <p>
                <span>
                  <AiOutlineExclamationCircle />
                </span>
                Please share your thoughts with us here !
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
      <ToastContainer />
    </>
  );
};

export default FeedbackModel;
