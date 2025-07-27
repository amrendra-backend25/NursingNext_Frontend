// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./PopupVideo.css";
// import fastract7 from "/images/newsroom/fastract7.jpeg";
// const PopupVideo = () => {
//   const [showPopup, setShowPopup] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const popupState = params.get("popup");

//     if (popupState === "open" || popupState === null) {
//       setShowPopup(true);
//     } else {
//       setShowPopup(false);
//     }
//   }, [location]);

//   const handleClose = () => {
//     setShowPopup(false);
//   };

//   const handleOpenPopup = () => {
//     setShowPopup(true);
//   };

//   return (
//     <>
//       {showPopup && (
//         <div className="popup">
//           <div className="popup-content_1">
//             <button className="close-button" onClick={handleClose}>
//               ×
//             </button>
//             <div className="video-container">
//               {/* <iframe
//                 src="https://www.youtube.com/embed/iVpwliJhb0c"
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe> */}
//               <Link to="/plan-a">
//                 <img src={fastract7} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//       <button onClick={handleOpenPopup}></button>
//     </>
//   );
// };

// export default PopupVideo;

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PopupVideo.css";
import fastract7 from "/images/newsroom/Academy.jpeg";

const PopupVideo = () => {
  const [showPopup, setShowPopup] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      setShowPopup(true);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname !== "/") {
      setShowPopup(false);
    }
  }, [location.pathname]);

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleImageClick = () => {
    setShowPopup(false);
    window.open("https://aiims-norcet-8-preparation.nnlone.com/", "_blank");
    navigate("/", {
      state: { showFastrackTab: true },
    });
  };

  return (
    <>
      {showPopup && (
        <div className="popup">
          <div className="popup-content_1">
            <button className="close-button" onClick={handleClose}>
              ×
            </button>
            <div className="video-container">
              <img
                src={fastract7}
                alt="Fastrack 7"
                onClick={handleImageClick}
              />
            </div>
          </div>
        </div>
      )}
      <button onClick={handleOpenPopup}></button>
    </>
  );
};

export default PopupVideo;
