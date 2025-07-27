import "./Footer.css";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinFill,
  // RiTwitterFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { FaFacebookF,FaInstagram,FaTelegramPlane  } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="footer_section">
        <div className="container">
          <div className="footer_title_parent">
            <div className="footer_left_social">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/nursingnextlive/"
                    target="blank"
                  >
                    <FaFacebookF className="fab"/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/nursingnextlive/?hl=en"
                    target="blank"
                  >
                    <RiInstagramFill className="fab"/>
                  </a>
                </li>
                {/* <li>
                  <a href="">
                    <RiTwitterFill />
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.youtube.com/channel/UChoze-TFMOKaHB_Z5KvaV0A"
                    target="blank"
                  >
                    <RiYoutubeFill className="fab"/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/cbs-nursingnext/"
                    target="blank"
                  >
                    <RiLinkedinFill className="fab"/>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer_right_child">
              <div className="img_app"></div>
            </div>
          </div>
          <div className="underline"></div>
          <div className="copyright">
            <ul>
              <p>© 2024 Nursing Next Live</p>
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">terms & conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
