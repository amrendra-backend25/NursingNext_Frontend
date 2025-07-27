import { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import form_img from "/images/Image-removebg-preview.png";
import Upload from "./Upload";
import { ToastContainer, toast } from "react-toastify";
import "./Style.css";
import axios from "axios";

const Career = () => {
  const [page, setPage] = useState(0);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   dateOfBirth: "",
  //   currentJobTitle: "",
  //   currentEmployer: "",
  //   totalExperience: "",
  //   qualification: "",
  //   collegeName: "",
  //   passingYear: "",
  //   address: "",
  //   ApplyingFor: "",
  //   resume: "",
  //   immediateJoiner: "yes",
  //   workingMode: "wfo",
  // });

  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    currentJobTitle: "",
    currentEmployer: "",
    totalExperience: "",
    qualification: "",
    collegeName: "",
    passingYear: "",
    address: "",
    ApplyingFor: "",
    resume: null,
    immediateJoiner: "yes",
    workingMode: "wfo",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [inputStatus, setInputStatus] = useState({});

  const handleNextClick = () => {
    const requiredFields = [
      "name",
      "email",
      "phone",
      "dateOfBirth",
      "currentJobTitle",
      "currentEmployer",
      "totalExperience",
      "qualification",
      "collegeName",
      "passingYear",
      "workingMode",
      "address",
      "ApplyingFor",
      "resume",
      "immediateJoiner",
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
      setPage((currPage) => currPage + 1);
    } else {
      console.log("Please fill out all required fields");
    }
  };

  const FormTitles = [
    "Personal Details",
    "Professional Details",
    "Educational Qualifications",
    "Upload Resume",
  ];

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("dateOfBirth", formData.dateOfBirth);
      formDataToSend.append("currentJobTitle", formData.currentJobTitle);
      formDataToSend.append("currentEmployer", formData.currentEmployer);
      formDataToSend.append("totalExperience", formData.totalExperience);
      formDataToSend.append("immediateJoiner", formData.immediateJoiner);
      formDataToSend.append("qualification", formData.qualification);
      formDataToSend.append("collegeName", formData.collegeName);
      formDataToSend.append("passingYear", formData.passingYear);
      formDataToSend.append("ApplyingFor", formData.ApplyingFor);
      formDataToSend.append("workingMode", formData.workingMode);
      formDataToSend.append("resume", formData.resume);

      const response = await axios.post(
        "https://web.nnlone.com/api/v1/career-page",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData(initialFormState);
        setPage(0);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("An error occurred. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  const PageDisplay = () => {
    const props = {
      formData,
      setFormData,
      page,
      setPage,
      FormTitles,
    };
    if (page === 0) {
      return <SignUpInfo {...props} onNext={() => setPage(1)} />;
    } else if (page === 1) {
      return <PersonalInfo {...props} onNext={() => setPage(2)} />;
    } else if (page === 2) {
      return <OtherInfo {...props} onNext={() => setPage(3)} />;
    } else {
      return <Upload {...props} onSubmit={handleSubmit} />;
    }
  };

  // const PageDisplay = () => {
  //   if (page === 0) {
  //     return (
  //       <SignUpInfo
  //         formData={formData}
  //         setFormData={setFormData}
  //         page={page}
  //         setPage={setPage}
  //         FormTitles={FormTitles}
  //         onNext={() => setPage(1)}
  //       />
  //     );
  //   } else if (page === 1) {
  //     return (
  //       <PersonalInfo
  //         formData={formData}
  //         setFormData={setFormData}
  //         page={page}
  //         setPage={setPage}
  //         FormTitles={FormTitles}
  //         onNext={() => setPage(2)}
  //       />
  //     );
  //   } else if (page === 2) {
  //     return (
  //       <OtherInfo
  //         formData={formData}
  //         setFormData={setFormData}
  //         page={page}
  //         setPage={setPage}
  //         FormTitles={FormTitles}
  //         onNext={() => setPage(3)}
  //       />
  //     );
  //   } else {
  //     return (
  //       <Upload
  //         formData={formData}
  //         setFormData={setFormData}
  //         page={page}
  //         setPage={setPage}
  //         FormTitles={FormTitles}
  //       />
  //     );
  //   }
  // };

  return (
    <>
      <div className="career_header">
        <div className="career_form">
          <div className="career_title">
            <div className="career_img">
              <img src={form_img} alt="" />
            </div>
            <div className="career_content">
              <h2>We are Hiring</h2>
              <p>
                You Think You Can Make a Difference? We think that too! Come and
                become a part of this initiative to create an ecosystem of
                revolutionized learning and adding value to the health care
                system with <span>Nursing Next Live.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="form">
          <div className="progressbar">
            <div
              style={{
                width:
                  page === 0
                    ? "25%"
                    : page === 1
                    ? "50%"
                    : page === 2
                    ? "75%"
                    : "100%",
              }}
            ></div>
          </div>
          <div className="form-container">
            <div className="header">
              <h2>Complete Your Application</h2>
              <h3>{FormTitles[page]}</h3>
            </div>
            <div className="body">{PageDisplay()}</div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Career;
