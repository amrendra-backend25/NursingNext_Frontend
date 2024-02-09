import "./Footer.css";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { useState, useEffect } from "react";
//import appstore from "/images/simplify/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.png";
import playstore from "/images/simplify/Group 164217.png";
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [commonTabApi, setCommonTabApi] = useState([]);
  const [setIsError] = useState("");

  const commonFooterTab = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeCommonTab;
      axios({
        url: response,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((record) => {
        setCommonTabApi(record.data.data);
        //console.log(record.data.users);
      });
    } catch (error) {
      setIsError(error.msg);
      //console.log(error.msg);
    }
  };

  useEffect(() => {
    commonFooterTab();
  }, []);

  return (
    <div className="footer_section">
      <div className="container">
        <div className="footer_parent">
          <div className="box_img">
            {commonTabApi.slice(0, 4).map((result) => {
              const { tabHeading, tabImage } = result;
              return (
                <>
                  <div className="footer_card" style={{ cursor: "pointer" }}>
                    <div className="footer_img">
                      <img src={tabImage} alt="" />
                    </div>
                    <div className="footer_title_1">
                      <Link>
                        <p>{tabHeading}</p>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="underline"></div>
          <div className="footer_link_parent">
            <div className="footer_title">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="">Blogs</a>
                </li>
                <li>
                  <a href="/all-courses">Courses</a>
                </li>
                <li>
                  <a href="">Our Journey</a>
                </li>
                <li>
                  <a href="">Nursing Knowledge Tree</a>
                </li>
                <li>
                  <a href="">CBS Hybrid Phygital Books</a>
                </li>
                <li>
                  <a href="">Terms & Conditions</a>
                </li>
                <li>
                  <a href="">Career</a>
                </li>
                <li>
                  <a href="">Sitemap</a>
                </li>
              </ul>
            </div>
            <div className="footer_title">
              <h4>Targeted Exams</h4>
              <ul>
                <li>
                  <a href="/aiims-norcet">AIIMS NORCET</a>
                </li>
                <li>
                  <a href="/pgimer">PGIMER</a>
                </li>
                <li>
                  <a href="/esic">ESIC</a>
                </li>
                <li>
                  <a href="/rrb">RRB</a>
                </li>
                <li>
                  <a href="/jipmer">JIPMER</a>
                </li>
                <li>
                  <a href="nimhans">MIIMHANS</a>
                </li>
                <li>
                  <a href="/cho">CHO</a>
                </li>
              </ul>
            </div>
            <div className="footer_title">
              <h4>Important Links</h4>
              <ul>
                <li>
                  <a href="">CBS Nursing Books</a>
                </li>
                <li>
                  <a href="plan-msc">MSC Entrance Pack</a>
                </li>
                <li>
                  <a href="">Testimonials by Top Rankers</a>
                </li>
                <li>
                  <a href="">NNL Social</a>
                </li>
                <li>
                  <a href="all-courses">Crash Courses</a>
                </li>
                <li>
                  <a href="">NNL Talks</a>
                </li>
                <li>
                  <a href="plan-ug">Undergraduate Pack</a>
                </li>
                <li>
                  <a href="plan-b">Test Series Pack</a>
                </li>
                <li>
                  <a href=""></a>
                </li>
              </ul>
            </div>
            <div className="footer_title">
              <h4>Other Links</h4>
              <ul>
                <li>
                  <a href=""> Contact Us</a>
                </li>
                <li>
                  <a href="/offers">Offers</a>
                </li>
                <li>
                  <a href="/faq">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="underline"></div>
          <div className="footer_social_parent">
            <div className="social_icon">
              <a
                href="https://www.facebook.com/nursingnextlive/"
                target="blank"
              >
                <RiFacebookBoxFill />
              </a>
              <a
                href="https://www.instagram.com/nursingnextlive/?hl=en"
                target="blank"
              >
                <RiInstagramFill />
              </a>
              <a href="https://t.me/joinchat/lub_AeyKs30yOTI9" target="blank">
                <FaTelegram />
              </a>
              <a
                href="https://www.youtube.com/channel/UChoze-TFMOKaHB_Z5KvaV0A"
                target="blank"
              >
                <RiYoutubeFill />
              </a>
              <a
                href="https://www.linkedin.com/company/cbs-nursingnext/"
                target="blank"
              >
                <RiLinkedinFill />
              </a>
            </div>
            <div className="social_img">
              <img src={playstore} alt="" />
            </div>
          </div>
          <div className="underline"></div>
          <div className="copyright">
            <ul>
              <p>© 2023 Nursing Next Live</p>
              <li>
                <a href="">privacy</a>
              </li>
              <li>
                <a href="">terms & conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /* <span><RxDotFilled className='ri_dot'/></span> */
}
export default Footer;
