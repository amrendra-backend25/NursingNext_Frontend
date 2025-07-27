import { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import { FaArrowUp } from "react-icons/fa6";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll_to_top">
      {isVisible && (
        <button onClick={scrollToTop} className="top_btn">
          {/* <i className="bi bi-arrow-up-short"></i> <FaArrowUp /> */}
          {/* Font Awesome up arrow icon */}
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
