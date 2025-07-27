import "./VideoModel.css";
import ReactPlayer from "react-player";
import { useState, useEffect, useRef } from "react";
import { BasePaths } from "../../webinarconfig/webinarBaseAPI";
import axios from "axios";

const VideoModel = ({ isOpen, onClose }) => {
  const [successVideoApi, setSuccessVideoApi] = useState([]);
  const [setIsError] = useState("");
  const videoRef = useRef(null);
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const showSuccessVideo = async () => {
    try {
      const response = await BasePaths.EndpointsURL.SessionVideos;
      const record = await axios.get(response, {
        headers: {
          "Content-type": "application/json",
        },
      });
      //console.log(record.data.data);
      return record.data.data;
    } catch (error) {
      setIsError(error.msg);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [videoData] = await Promise.all([showSuccessVideo()]);

        setSuccessVideoApi(videoData);
      } catch (error) {
        setIsError(error.msg);
      }
    };
    if (isOpen && videoRef.current) {
      videoRef.current.seekTo(0);
    }
    fetchData();
  }, [isOpen]);

  return (
    <>
      <div className={`story_modal ${isOpen ? "show" : ""}`} onClick={onClose}>
        <div className="story_modal_content" onClick={handleModalClick}>
          <div className="story_modal_header"></div>
          <div className="story_model_content_img">
            <div className="story_model_img">
              {successVideoApi.slice(0, 1).map((video) => {
                const { videoLink } = video;
                return (
                  <>
                    <div className="story_title">
                      <ReactPlayer
                        controls
                        url={videoLink}
                        ref={videoRef}
                        playing={isOpen}
                      />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoModel;
