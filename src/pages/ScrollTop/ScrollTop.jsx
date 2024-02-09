import { useEffect, useState } from "react";
import "./ScrollTop.css";
import styled from "styled-components";
import { FaArrowUp } from "react-icons/fa";
const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 430;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <Wrapper>
        {isVisible && (
          <div className="top-btn" onClick={goToBtn}>
            <FaArrowUp className="top-btn--icon" />
          </div>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    // font-size: 2rem;
    // width: 10rem;
    // height: 1rem;
    // color: #fdfdff;
    // border-radius: 80%;
    // position: fixed;
    // bottom: 3rem;
    // right: 1.5rem;
    // z-index: 999;
    // display: flex;
    // justify-content: right;
    // align-items: right;
    // cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
      // background-color: #e4181e;
      // border-radius: 80%;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
`;

export default ScrollTop;
