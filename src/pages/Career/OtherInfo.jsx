import { useState } from "react";
import "./Style.css";

const OtherInfo = ({
  formData,
  setFormData,
  onNext,
  page,
  setPage,
  FormTitles,
}) => {
  const [inputStatus, setInputStatus] = useState({
    qualification: "",
    collegeName: "",
    passingYear: "",
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
    const requiredFields = ["qualification", "collegeName", "passingYear"];
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
    <div className="other-info-container">
      <form action="">
        <div className="career_input_box">
          <input
            type="text"
            placeholder="Highest Degree Earned*"
            value={formData.qualification}
            className={inputStatus.qualification}
            onChange={(event) =>
              handleInputChange("qualification", event.target.value)
            }
            onClick={() => handleInputClick("qualification")}
          />
        </div>
        <div className="career_input_box">
          <input
            type="text"
            placeholder="Institution Name*"
            value={formData.collegeName}
            className={inputStatus.collegeName}
            onChange={(event) =>
              handleInputChange("collegeName", event.target.value)
            }
            onClick={() => handleInputClick("collegeName")}
          />
        </div>
        <div className="career_input_box">
          <input
            type="number"
            placeholder="Graduation Year*"
            value={formData.passingYear}
            className={inputStatus.passingYear}
            onChange={(event) =>
              handleInputChange("passingYear", event.target.value)
            }
            onClick={() => handleInputClick("passingYear")}
          />
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

export default OtherInfo;
