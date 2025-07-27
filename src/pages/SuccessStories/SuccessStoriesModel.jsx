import { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import "./SuccessStoriesModel.css";

const SuccessStoriesModel = ({ isOpen, onClose, person }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen && videoRef.current) {
      setIsPlaying(true);
      videoRef.current.seekTo(0);
    } else {
      setIsPlaying(false);
    }
  }, [isOpen, person]);

  if (!person || !person.storyVideo) {
    return null;
  }

  return (
    <>
      <div className={`story_modal ${isOpen ? "show" : ""}`} onClick={onClose}>
        <div className="story_modal_content_main" onClick={handleModalClick}>
          <div className="story_modal_header">
            {/* <span className="nextian_modal_close" onClick={onClose}>
              &times;
            </span> */}
          </div>
          <div className="story_model_content_img">
            <div className="story_model_img">
              <div className="story_title">
                <ReactPlayer
                  ref={videoRef}
                  controls
                  url={person.storyVideo}
                  playing={isPlaying}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStoriesModel;
