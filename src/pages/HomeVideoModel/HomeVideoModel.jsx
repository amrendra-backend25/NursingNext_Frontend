import "./HomeVideoModel.css";
import ReactPlayer from "react-player";
import { useRef, useEffect } from "react";
const HomeVideoModel = ({ isOpen, onClose }) => {
  const videoRef = useRef(null);
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.seekTo(0);
    }
  }, [isOpen]);

  return (
    <>
      <div className={`story_modal ${isOpen ? "show" : ""}`} onClick={onClose}>
        <div className="story_modal_content" onClick={handleModalClick}>
          <div className="story_modal_header"></div>
          <div className="story_model_content_img">
            <div className="story_model_img">
              <div className="story_title">
                <ReactPlayer
                  ref={videoRef}
                  controls
                  url="https://www.youtube.com/watch?v=KNAzWNUzRoE"
                  playing={isOpen}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeVideoModel;
