const NextianModel = ({ isOpen, onClose, person }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`nextian_modal ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="nextian_modal_content" onClick={handleModalClick}>
        <div className="nextian_modal_header">
          <span className="nextian_modal_close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="master_nextian">
          <div className="master_nextian_content">
            <div className="nextian_image_left">
              <img src={person.studentImage} alt="" />
            </div>
            <div className="nextian_description_right">
              <div className="nextian_master_title">
                <h2>{person.studentName}</h2>
                <p className="nextian_degree"></p>
                <h4 className="nextian_medal">
                  {person.rank} | {person.passYear}
                </h4>
                <p>{person.testimonial}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextianModel;
