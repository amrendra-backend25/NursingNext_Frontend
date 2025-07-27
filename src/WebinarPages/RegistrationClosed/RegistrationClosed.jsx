import "./RegistrationClosed.css";
const RegistrationClosed = ({ isOpen, onClose }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`nextian_modal ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="nextian_modal_content_1" onClick={handleModalClick}>
        <div className="nextian_modal_header">
          <span className="nextian_modal_close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="master_nextian">
          <div className="master_nextian_content_1">
            <div className="nextian_description_right">
              <div className="nextian_master_title">
                <h2>Registration closed!</h2>
                <p className="nextian_degree"></p>
                <h4 className="nextian_medal">Coming Soon...</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationClosed;
