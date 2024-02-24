import { AiOutlineExclamationCircle } from "react-icons/ai";
import "./HiringModel.css";

const HiringModel = ({ isOpen, onClose }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={`hiring_modal ${isOpen ? "show" : ""}`} onClick={onClose}>
        <div className="hiring_modal_content" onClick={handleModalClick}>
          <div className="hiring_modal_header">
            <span className="hiring_modal_close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="hiring_model_form">
            <div className="hiring_model_title">
              <h2>We are Hiring</h2>
              <p>
                <span>
                  <AiOutlineExclamationCircle />
                </span>
                Mail your resume @ hr@nursingnextlive.com{" "}
              </p>
            </div>
            <form action="">
              <div className="inputs_data">
                <div className="input_form_data">
                  <input
                    type="text"
                    placeholder="Name*"
                    name="fullName"
                    id="fullName"
                    // onChange={handleChange}
                    // value={registrationForm.fullName}
                    // autoComplete="Off"
                  />
                  {/* {isError.fullName && (
                                        <p className="error">{isError.fullName}</p>
                                    )} */}
                </div>
                <div className="input_form_data">
                  <input
                    type="text"
                    placeholder="Phone*"
                    name="fullName"
                    id="fullName"
                    // onChange={handleChange}
                    // value={registrationForm.fullName}
                    // autoComplete="Off"
                  />
                  {/* {isError.fullName && (
                                        <p className="error">{isError.fullName}</p>
                                    )} */}
                </div>
                <div className="input_form_data">
                  <input
                    type="text"
                    placeholder="Email*"
                    name="fullName"
                    id="fullName"
                    // onChange={handleChange}
                    // value={registrationForm.fullName}
                    // autoComplete="Off"
                  />
                  {/* {isError.fullName && (
                                        <p className="error">{isError.fullName}</p>
                                    )} */}
                </div>
                <div className="input_form_data">
                  <select
                    name="coursePursued"
                    id="coursePursued"
                    className="form_control"
                    // onChange={handleChange}
                    // value={registrationForm.coursePursued}
                    // autoComplete="Off"
                  >
                    <option value="" disabled selected>
                      Select your Role*
                    </option>
                    <option value="GNM">GNM</option>
                    <option value="Post Basic">Post Basic</option>
                    <option value="BSc">BSc</option>
                    <option value="MSc">MSc</option>
                    <option value="Other">Other</option>
                  </select>
                  {/* {isError.coursePursued && (
                                        <p className="error">{isError.coursePursued}</p>
                                    )} */}
                </div>
                <div className="input_form_data">
                  <input
                    type="text"
                    placeholder="State*"
                    name="fullName"
                    id="fullName"
                    // onChange={handleChange}
                    // value={registrationForm.fullName}
                    // autoComplete="Off"
                  />
                  {/* {isError.fullName && (
                                        <p className="error">{isError.fullName}</p>
                                    )} */}
                </div>
                <div className="input_form_data">
                  <input
                    type="text"
                    placeholder="LinkedIn Profile URL*"
                    name="fullName"
                    id="fullName"
                    // onChange={handleChange}
                    // value={registrationForm.fullName}
                    // autoComplete="Off"
                  />
                  {/* {isError.fullName && (
                                        <p className="error">{isError.fullName}</p>
                                    )} */}
                </div>
                <div className="input_form_data">
                  <input
                    type="file"
                    placeholder="file*"
                    // onChange={handleChange}
                    // value={registrationForm.fullName}
                    // autoComplete="Off"
                    className="customfile"
                  />
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
    </>
  );
};

export default HiringModel;
