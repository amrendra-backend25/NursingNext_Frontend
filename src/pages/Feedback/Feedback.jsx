import "./Feedback.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Paths } from "../../config/configAPI";
import axios from "axios";
const Feedback = () => {
  const [shareFeedback, setShareFeedback] = useState({
    feedback: "",
  });
  const [isError, setIsError] = useState([]);
  const [isSuccess, setIsSuccess] = useState("");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setShareFeedback({ ...shareFeedback, [name]: value });
    setIsError({ ...isError, [name]: "" });
    setIsSuccess({ message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFeedback = { ...shareFeedback, id: new Date() };
    try {
      const response = await Paths.EndpointsURL.HomeShareFeedback;
      const res = await axios({
        url: response,
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        data: JSON.stringify(newFeedback),
      });
      setShareFeedback(res.data.data);
      setIsSuccess({ message: res.data.message });
      // console.log(res);
      // toast.success(res.data.message, {
      //   position: "top-right",
      //   autoClose: 1000,
      // });
      setShareFeedback({
        feedback: "",
      });
    } catch (error) {
      toast.error("Error uploading data:", error, { autoClose: 1000 });
    }
  };

  return (
    <>
      <section className="feedback_section">
        <div className="container">
          <div className="feedback_title">
            <div className="feedback_head">
              <h3>Share Your Feedback</h3>
            </div>
            <div className="feedback_input">
              <form onSubmit={handleSubmit}>
                <div className="input_form1">
                  <input
                    type="text"
                    placeholder="enter your feedback"
                    id="feedback"
                    name="feedback"
                    onChange={handleChange}
                    value={shareFeedback.feedback}
                    autoComplete="off"
                  />
                  <button className="submit_btn" type="submit">
                    Share Now
                  </button>
                  {isSuccess.message && (
                    <p className="success">{isSuccess.message}</p>
                  )}
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

export default Feedback;
