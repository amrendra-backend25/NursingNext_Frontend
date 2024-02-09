const FacilityModel = ({ isOpen, onClose, person }) => {
  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent the click event from reaching the underlying elements
  };

  return (
    <div className={`faculty_modal ${isOpen ? "show" : ""}`} onClick={onClose}>
      {/* <div className="faculty_modal_content" onClick={(e) => e.stopPropagation()}> */}
      <div className="faculty_modal_content" onClick={handleModalClick}>
        <div className="faculty_modal_header">
          <span className="faculty_modal_close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="master_faculty">
          <div className="master_faculty_content">
            <div className="faculty_image_left">
              <img src={person.facilityImage} alt="" />
            </div>
            <div className="faculty_description_right">
              <div className="faculty_master_title">
                <h2>{person.facilityName}</h2>
                <p className="faculty_degree">{person.specialization}</p>
                <h4 className="faculty_medal">{person.subject}</h4>
                <p>{person.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityModel;
