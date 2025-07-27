import { useState } from "react";
import "./Style.css";

const SignUpInfo = ({
  formData,
  setFormData,
  onNext,
  page,
  setPage,
  FormTitles,
}) => {
  const [inputStatus, setInputStatus] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    dateOfBirth: "",
  });

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    let status = "valid";
    if (field === "email" && !validateEmail(value)) {
      status = "invalid";
    } else if (field !== "email" && !value.trim()) {
      status = "invalid";
    }
    setInputStatus({ ...inputStatus, [field]: status });
  };

  const handleInputClick = (field) => {
    if (!formData[field].trim()) {
      setInputStatus({ ...inputStatus, [field]: "invalid" });
    }
  };

  const handleNextClick = () => {
    const requiredFields = ["name", "email", "phone", "address", "dateOfBirth"];
    let allValid = true;
    const updatedInputStatus = requiredFields.reduce((status, field) => {
      if (
        !formData[field]?.trim() ||
        (field === "email" && !validateEmail(formData[field]))
      ) {
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
      console.log("Please fill out all required fields correctly");
    }
  };

  return (
    <div className="sign-up-container">
      <form action="">
        <div className="career_input_box">
          <input
            type="text"
            placeholder="Full Name*"
            value={formData.name}
            className={inputStatus.name}
            onChange={(event) => handleInputChange("name", event.target.value)}
            onClick={() => handleInputClick("name")}
          />
        </div>
        <div className="career_input_box">
          <input
            type="text"
            placeholder="Email*"
            value={formData.email}
            className={inputStatus.email}
            onChange={(event) => handleInputChange("email", event.target.value)}
            onClick={() => handleInputClick("email")}
          />
        </div>
        <div className="career_input_box">
          <input
            type="number"
            placeholder="Phone*"
            value={formData.phone}
            className={inputStatus.phone}
            onChange={(event) => handleInputChange("phone", event.target.value)}
            onClick={() => handleInputClick("phone")}
          />
        </div>
        <div className="career_input_box">
          <input
            type="text"
            placeholder="Address*"
            value={formData.address}
            className={inputStatus.address}
            onChange={(event) =>
              handleInputChange("address", event.target.value)
            }
            onClick={() => handleInputClick("address")}
          />
        </div>
        <div className="career_input_box">
          <input
            type="text"
            placeholder="1999-02-25*"
            value={formData.dateOfBirth}
            className={inputStatus.dateOfBirth}
            onChange={(event) =>
              handleInputChange("dateOfBirth", event.target.value)
            }
            onClick={() => handleInputClick("dateOfBirth")}
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
    </div>
  );
};

export default SignUpInfo;
