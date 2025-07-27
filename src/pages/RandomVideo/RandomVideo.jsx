import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player";
import Video1 from "/public/videos/video1.mp4";
import Video2 from "/public/videos/video2.mp4";
import Video3 from "/public/videos/video3.mp4";
import Video4 from "/public/videos/video4.mp4";
import Video5 from "/public/videos/video5.mp4";
import apply from "/images/aboutUs/apply.png";
import PlanC from "/images/courses/PlanC.png";
import Planug from "/images/courses/Planug.png";
import PlanN from "/images/courses/PlanN.png";
import "./RandomVideo.css";

const initialVideo = Video5;

const carData = [
  {
    id: "plan-msc",
    name: "Plan MSc",
    videoSrc: Video1,
    imageSrc: apply,
  },
  {
    id: "planc",
    name: "Plan C+",
    videoSrc: Video2,
    imageSrc: PlanC,
  },
  {
    id: "plan-ug",
    name: "Plan UG",
    videoSrc: Video3,
    imageSrc: Planug,
  },
  {
    id: "nnl-vsl",
    name: "Plan NNL",
    videoSrc: Video4,
    imageSrc: PlanN,
  },
];

const RandomVideo = () => {
  const [currentVideo, setCurrentVideo] = useState(initialVideo);
  const [showCarList, setShowCarList] = useState(false);
  const [showBackButton, setShowBackButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [showEnquiryButton, setShowEnquiryButton] = useState(false);
  const playerRef = useRef(null);
  const backButtonTimerRef = useRef(null);
  const enquiryButtonTimerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (isPlaying && currentVideo === initialVideo) {
      timer = setTimeout(() => {
        setShowCarList(true);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, currentVideo]);

  const handleCarClick = useCallback((car) => {
    setCurrentVideo(car.videoSrc);
    setShowCarList(false);
    setShowBackButton(false);
    setIsPlaying(true);
    setVideoEnded(false);
    setShowEnquiryButton(false);
    if (backButtonTimerRef.current) {
      clearTimeout(backButtonTimerRef.current);
    }
    backButtonTimerRef.current = setTimeout(() => {
      setShowBackButton(true);
    }, 3000);
    if (enquiryButtonTimerRef.current) {
      clearTimeout(enquiryButtonTimerRef.current);
    }
    enquiryButtonTimerRef.current = setTimeout(() => {
      setShowEnquiryButton(true);
    }, 10000);
  }, []);

  const handleBackButtonClick = useCallback(() => {
    setShowCarList(true);
    setShowBackButton(false);
    setCurrentVideo(initialVideo);
    setIsPlaying(false);
    setVideoEnded(false);
    setShowEnquiryButton(false);
    if (backButtonTimerRef.current) {
      clearTimeout(backButtonTimerRef.current);
    }
    if (enquiryButtonTimerRef.current) {
      clearTimeout(enquiryButtonTimerRef.current);
    }
  }, []);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    setVideoEnded(false);
    setShowEnquiryButton(false);
  }, []);

  const handleEnded = useCallback(() => {
    setVideoEnded(true);
    setIsPlaying(false);
    if (currentVideo !== initialVideo) {
      enquiryButtonTimerRef.current = setTimeout(() => {
        setShowEnquiryButton(true);
      }, 1000);
    }
  }, [currentVideo]);

  const handleReplay = useCallback(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(0);
      setIsPlaying(true);
      setVideoEnded(false);
      setShowEnquiryButton(false);
      if (enquiryButtonTimerRef.current) {
        clearTimeout(enquiryButtonTimerRef.current);
      }
    }
  }, []);

  const handleEnquiryClick = useCallback(() => {
    navigate("/global-query");
  }, [navigate]);

  return (
    <div className="container">
      <div className="video-container">
        {showBackButton && currentVideo !== initialVideo && (
          <button className="back-button" onClick={handleBackButtonClick}>
            Back
          </button>
        )}
        <ReactPlayer
          ref={playerRef}
          url={currentVideo}
          controls
          playing={isPlaying}
          onPlay={handlePlay}
          onEnded={handleEnded}
          className="video-player"
          width="70%"
          height="auto"
        />
        {showEnquiryButton && currentVideo !== initialVideo && (
          <button className="enquiry-button" onClick={handleEnquiryClick}>
            Enquiry Now
          </button>
        )}
        {videoEnded && currentVideo === initialVideo && (
          <button className="replay-button" onClick={handleReplay}></button>
        )}
        {showCarList && (
          <div className="car-grid">
            {carData.map((car) => (
              <div
                key={car.id}
                className="car-item"
                onClick={() => handleCarClick(car)}
              >
                <img src={car.imageSrc} alt={car.name} className="car-image" />
                <div className="car-details">
                  <h3 className="car-name">{car.name}</h3>
                  <span className="car-offer">OFFER</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(RandomVideo);
