import { useState } from "react";
import "./Style.css";

const Upload = ({
  formData,
  setFormData,
  page,
  setPage,
  FormTitles,
  onSubmit,
}) => {
  const [inputStatus, setInputStatus] = useState({
    ApplyingFor: "",
    resume: "",
    workingMode: "wfo",
  });

  const handleInputChange = (field, value) => {
    if (field === "resume") {
      setFormData({ ...formData, [field]: value });
    } else {
      setFormData({ ...formData, [field]: value });
      setInputStatus({
        ...inputStatus,
        [field]: value.trim() ? "valid" : "invalid",
      });
    }
  };

  // const handleInputChange = (field, value) => {
  //   setFormData({ ...formData, [field]: value });
  //   setInputStatus({
  //     ...inputStatus,
  //     [field]: value.trim() ? "valid" : "invalid",
  //   });
  // };

  const handleInputClick = (field) => {
    if (!formData[field].trim()) {
      setInputStatus({ ...inputStatus, [field]: "invalid" });
    }
  };

  const handleNextClick = () => {
    const requiredFields = ["ApplyingFor", "workingMode"];
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
    if (!formData.resume) {
      updatedInputStatus.resume = "invalid";
      allValid = false;
    } else {
      updatedInputStatus.resume = "valid";
    }

    setInputStatus(updatedInputStatus);

    if (allValid) {
      onNext();
    } else {
      console.log("Please fill out all required fields");
    }
  };

  // const handleNextClick = () => {
  //   const requiredFields = ["ApplyingFor", "workingMode", "resume"];
  //   let allValid = true;
  //   const updatedInputStatus = requiredFields.reduce((status, field) => {
  //     if (!formData[field]?.trim()) {
  //       status[field] = "invalid";
  //       allValid = false;
  //     } else {
  //       status[field] = "valid";
  //     }
  //     return status;
  //   }, {});
  //   setInputStatus(updatedInputStatus);
  //   if (allValid) {
  //     onNext();
  //   } else {
  //     console.log("Please fill out all required fields");
  //   }
  // };

  return (
    <>
      <div className="upload-info-container">
        <form action="">
          <div className="select-box">
            <select
              name=""
              id="select_apply"
              value={formData.ApplyingFor}
              className={inputStatus.ApplyingFor}
              onChange={(event) =>
                handleInputChange("ApplyingFor", event.target.value)
              }
              onClick={() => handleInputClick("ApplyingFor")}
              required
            >
              <option value="" disabled selected>
                Applying For
              </option>
              <option value="Android Developer">Android Developer</option>
              <option value="FullStack Developer">Full Stack Developer</option>
              <option value="Web Developer">Web Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
              <option value="MERN Developer">MERN Developer</option>
              <option value="MEAN Developer">MEAN Developer</option>
            </select>
          </div>
          <div className="upload_box">
            <h3>Working Mode</h3>
            <div className="upload_radio">
              <div className="upload_option">
                <input
                  type="radio"
                  id="check"
                  name="workingMode"
                  value="wfo"
                  checked={formData.workingMode === "wfo"}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      workingMode: event.target.value,
                    });
                  }}
                />
                <label htmlFor="check">WFO</label>
              </div>
              <div className="upload_option">
                <input
                  type="radio"
                  id="check"
                  name="workingMode"
                  value="wfh"
                  checked={formData.workingMode === "wfh"}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      workingMode: event.target.value,
                    });
                  }}
                />
                <label htmlFor="check">WFH</label>
              </div>
              <div className="upload_option">
                <input
                  type="radio"
                  id="check"
                  name="workingMode"
                  value="hybrid"
                  checked={formData.workingMode === "hybrid"}
                  onChange={(event) => {
                    setFormData({
                      ...formData,
                      workingMode: event.target.value,
                    });
                  }}
                />
                <label htmlFor="check">Hybrid</label>
              </div>
            </div>
          </div>
          <div className="input_form_data">
            <input
              type="file"
              placeholder="file*"
              className="customfile"
              accept=".pdf, .doc, .docx"
              onChange={(event) => {
                setFormData({ ...formData, resume: event.target.files[0] });
              }}
            />
          </div>
        </form>
        <div className="footer_btn">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
            className={page === 0 ? "prev_btn disabled" : "prev_btn"}
          >
            Prev
          </button>
          <button
            // onClick={handleNextClick}
            onClick={() => {
              if (page === FormTitles.length - 1) {
                onSubmit();
                // console.log(formData);
              } else {
                handleNextClick();
              }
            }}
            className="next_btn"
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
        {/* <button type="button" onClick={handleNextClick} className="next_btn">Submit</button> */}
      </div>
    </>
  );
};

export default Upload;
