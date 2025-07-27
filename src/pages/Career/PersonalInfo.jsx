import { useState } from "react";
import "./Style.css";

const PersonalInfo = ({
  formData,
  setFormData,
  onNext,
  page,
  setPage,
  FormTitles,
}) => {
  const [inputStatus, setInputStatus] = useState({
    currentJobTitle: "",
    currentEmployer: "",
    totalExperience: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setInputStatus({
      ...inputStatus,
      [field]: value.trim() ? "valid" : "invalid",
    });
  };

  const handleInputClick = (field) => {
    if (!formData[field].trim()) {
      setInputStatus({ ...inputStatus, [field]: "invalid" });
    }
  };

  const handleNextClick = () => {
    const requiredFields = [
      "currentJobTitle",
      "currentEmployer",
      "totalExperience",
    ];
    let allValid = true;

    const updatedInputStatus = requiredFields.reduce((status, field) => {
      if (!formData[field]?.trim()) {
        status[field] = "invalid";
        allValid = false;
      } else {
        status[field] = "valid";
      }
      return status;
    }, {});

    setInputStatus(updatedInputStatus);

    if (allValid) {
      onNext();
    } else {
      console.log("Please fill out all required fields");
    }
  };

  return (
    <div className="personal-info-container">
      <form action="">
        <div className="personal_info">
          <div className="career_input_box">
            <input
              type="text"
              placeholder="Current Job Title*"
              value={formData.currentJobTitle}
              className={inputStatus.currentJobTitle}
              onChange={(event) =>
                handleInputChange("currentJobTitle", event.target.value)
              }
              onClick={() => handleInputClick("currentJobTitle")}
            />
          </div>
          <div className="career_input_box">
            <input
              type="text"
              placeholder="Current Employer*"
              value={formData.currentEmployer}
              className={inputStatus.currentEmployer}
              onChange={(event) =>
                handleInputChange("currentEmployer", event.target.value)
              }
              onClick={() => handleInputClick("currentEmployer")}
            />
          </div>
          <div className="career_input_box">
            <input
              type="number"
              placeholder="Total Years of Experience*"
              value={formData.totalExperience}
              className={inputStatus.totalExperience}
              onChange={(event) =>
                handleInputChange("totalExperience", event.target.value)
              }
              onClick={() => handleInputClick("totalExperience")}
            />
          </div>
        </div>
        <div className="joiner_box">
          <h3>Immediate Joiner</h3>
          <div className="joiner_radio">
            <div className="joiner_option">
              <input
                type="radio"
                id="yes"
                name="immediateJoiner"
                value="yes"
                checked={formData.immediateJoiner === "yes"}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    immediateJoiner: event.target.value,
                  });
                }}
                onClick={() => handleInputClick("immediateJoiner")}
              />
              <label htmlFor="check">Yes</label>
            </div>
            <div className="joiner_option">
              <input
                type="radio"
                id="check"
                name="immediateJoiner"
                value="no"
                checked={formData.immediateJoiner === "no"}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    immediateJoiner: event.target.value,
                  });
                }}
                onClick={() => handleInputClick("immediateJoiner")}
              />
              <label htmlFor="check">No</label>
            </div>
          </div>
        </div>
      </form>
      <div className="footer">
        <button
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
          className={page === 0 ? "prev_btn disabled" : "prev_btn"}
        >
          Prev
        </button>
        <button onClick={handleNextClick} className="next_btn">
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
      {/* <button type="button" onClick={handleNextClick} className="next_btn">Next</button> */}
    </div>
  );
};

export default PersonalInfo;
