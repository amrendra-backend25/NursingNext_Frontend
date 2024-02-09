import ReactPlayer from "react-player";
const StoryModel = ({ isOpen, onClose, records }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className={`story_modal ${isOpen ? "show" : ""}`} onClick={onClose}>
        {/* <div className="faculty_modal_content" onClick={(e) => e.stopPropagation()}> */}
        <div className="story_modal_content" onClick={handleModalClick}>
          <div className="story_modal_header">
            <div className="story_heading">
              {/* <h3>{records.videoHeading}</h3> */}
            </div>
            <div className="story_left_close">
              <span className="story_modal_close" onClick={onClose}>
                &times;
              </span>
            </div>
          </div>
          <div className="story_model_content_1">
            <div className="story_model_img">
              <ReactPlayer
                width="100%"
                height="70vh"
                controls
                url={records.storyVideo}
              />
              {/* <img src={records.storyVideo} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryModel;
