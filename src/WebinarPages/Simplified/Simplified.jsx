import "./Simplified.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { BasePaths } from "../../webinarconfig/webinarBaseAPI";
import axios from "axios";
const Simplified = () => {
  const [simplifiedForm, setSimplifiedForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const navigate = useNavigate();
  const [isError, setIsError] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSimplifiedForm({ ...simplifiedForm, [name]: value });
    setIsError({ ...isError, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (!simplifiedForm.name.trim()) {
      newErrors.name = "Name is Required";
      isValid = false;
    }
    if (!simplifiedForm.phone.trim()) {
      newErrors.phone = "Phone Number is Required";
      isValid = false;
    }
    if (!simplifiedForm.email.trim()) {
      newErrors.email = "Email is Required";
      isValid = false;
    }
    if (!simplifiedForm.message.trim()) {
      newErrors.message = "Message is Required";
      isValid = false;
    }

    setIsError(newErrors);
    return isValid;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const newRegistrationForm = { ...simplifiedForm, id: new Date() };
    // console.log("Request Payload:", newRegistrationForm);
    if (validateForm()) {
      try {
        const response = await BasePaths.EndpointsURL.WebinarQueryForm;
        const res = await axios({
          url: response,
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          data: JSON.stringify(newRegistrationForm),
        });
        setSimplifiedForm(res.data.data);
        //console.log(res);
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 1000,
        });
        setSimplifiedForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        navigate("/thank-you/success");
      } catch (error) {
        toast.error("Error uploading data:", error);
      }
    }
  };
  return (
    <>
      <section className="simplified_section">
        <div className="container">
          <div className="simplified_parent">
            <div className="simplified_title">
              <p className="simplified_link">#NursingUGsimplified</p>
              <p className="simplified_para">
                Raising the Bar in Nursing Education
              </p>
              <div className="simplified_list">
                <ul>
                  <li>Are you struggling to study smartly?</li>
                  <li>
                    Do you study hard, but still unable to score good marks?
                  </li>
                  <li>
                    Do you fail to properly present the answers despite having
                    knowledge{" "}
                  </li>
                  <li>about the topic?</li>
                  <li>
                    Do you want to build a strong conceptual foundation of
                    nursing subjects?
                  </li>
                </ul>
              </div>
              <p className="simplified_ques">
                If you said <span>YES</span> to any of the above questions then
                this webinar is for <span>YOU.</span>
              </p>

              <p className="simplified_detail">
                This LIVE Webinar gives you a detailed conceptual revision of
                high yielding topics & provide you knowledge in a clear & simple
                way. Get a rapid review of the topic through flowcharts,
                mnemonics, Visual Aids including charts, graphs, and
                illustrations to enhance comprehension.
              </p>
            </div>

            <div className="register_form_right">
              <div className="register_form_title">
                <h2>Want to know about NNL Courses</h2>
                <p>
                  Submit your query below to receive guidance from our Nursing
                  Counsellors
                </p>
              </div>
              <form onSubmit={handleFormSubmit}>
                <div className="inputs_simplify">
                  <div className="simplify_input_form">
                    <input
                      type="text"
                      placeholder="Name*"
                      name="name"
                      id="name"
                      onChange={handleChange}
                      value={simplifiedForm.fullName}
                      autoComplete="Off"
                    />
                    {isError.name && (
                      <p className="input_error">{isError.name}</p>
                    )}
                  </div>
                  <div className="simplify_input_form">
                    <input
                      type="number"
                      placeholder="Phone*"
                      name="phone"
                      id="phone"
                      onChange={handleChange}
                      value={simplifiedForm.phone}
                      autoComplete="Off"
                    />
                    {isError.phone && (
                      <p className="input_error">{isError.phone}</p>
                    )}
                  </div>
                  <div className="simplify_input_form">
                    <input
                      type="text"
                      placeholder="Email*"
                      name="email"
                      id="email"
                      onChange={handleChange}
                      value={simplifiedForm.email}
                      autoComplete="Off"
                    />
                    {isError.email && (
                      <p className="input_error">{isError.email}</p>
                    )}
                  </div>
                  <div className="simplify_textarea_form">
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      onChange={handleChange}
                      value={simplifiedForm.message}
                      autoComplete="Off"
                      placeholder="Message*"
                    ></textarea>
                    {isError.message && (
                      <p className="input_error">{isError.message}</p>
                    )}
                  </div>
                  <div className="submit_data">
                    <button className="submit_btn" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Simplified;
