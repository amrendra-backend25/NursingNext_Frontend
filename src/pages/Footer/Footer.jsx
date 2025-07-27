import "./Footer.css";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { useState, useEffect } from "react";
import { RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import HomeTabRoutes from "../../components/HomeTabRoutes/HomeTabRoutes";

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
            {commonTabApi.slice(0, 4).map((result, index) => {
              const { tabHeading, tabImage } = result;
              return (
                <>
                  <Link to={`/${HomeTabRoutes[index]?.link}`} key={index}>
                    <div className="footer_card" style={{ cursor: "pointer" }}>
                      <div className="footer_img">
                        <img src={tabImage} alt="" />
                      </div>
                      <div className="footer_title_1">
                        <p>{tabHeading}</p>
                      </div>
                    </div>
                  </Link>
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
                  <a href="/blogs">Blogs</a>
                </li>
                <li>
                  <a href="/all-courses">Courses</a>
                </li>
                <li>
                  <a href="">Our Journey</a>
                </li>

                <li>
                  <a href="/policy">Terms & Conditions</a>
                </li>
                <li>
                  <a
                    href="https://forms.zohopublic.com/irfan66/form/JobApplication1/formperma/bHdA0qAsjUre0_1YPJckNpqyPeJEOUvBQzH3a5JGQLM"
                    target="blank"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a href="/sitemap">Sitemap</a>
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
                  <a href="/officer-exams">Nursing Officer Exams</a>
                </li>
                <li>
                  <a href="/msc">MSc</a>
                </li>
                <li>
                  <a href="/nclex">NCLEX</a>
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
                  <a href="plan-msc">MSC Entrance Pack</a>
                </li>
                <li>
                  <a href="/see-all-nextians">Testimonials by Top Rankers</a>
                </li>

                <li>
                  <a href="plan-a">Crash Courses</a>
                </li>

                <li>
                  <a href="plan-ug">Undergraduate Pack</a>
                </li>
              </ul>
            </div>
            <div className="footer_title">
              <h4>Other Links</h4>
              <ul>
                <li>
                  <a href="/contactus"> Contact Us</a>
                </li>
                <li>
                  <a href="/offers">Offers</a>
                </li>
                <li>
                  <a href="/all-faq">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="underline"></div>
          <div className="footer_social_parent">
            <div className="social_icon">
              <a href="" target="blank">
                <FaFacebookF className="fab" />
              </a>
              <a
                href="https://www.instagram.com/aevitasproc_official?igsh=bW5jNHZiMWk5MTZr&utm_source=qr"
                target="blank"
              >
                <FaInstagram className="fab" />
              </a>
              <a href="" target="blank">
                <FaTelegramPlane className="fab" />
              </a>
              <a
                href="https://www.youtube.com/@aevitasprocurement1733"
                target="blank"
              >
                <RiYoutubeFill className="fab" />
              </a>
              <a
                href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEafWYWYETvwwAAAZGI24rYRZQQuHBMPBdCryNreXO8BCfUBkpk6swn7kJGmAJlIQF9eAyVWCLbJsjJWCQfNS_zhChDDAQDhGUjzezBCroISgV61JVCqOuZ5BK58kBXW7HgOG8=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Faevitas-procurement-services-pvt-ltd%2Fmycompany%2F"
                target="blank"
              >
                <RiLinkedinFill className="fab" />
              </a>
            </div>
          </div>
          <div className="underline"></div>
          <div className="copyright">
            <ul>
              <p>© 2024 Aevitas Procurement Services Private Limited</p>

              <li>
                <a href="/policy">terms & conditions</a>
              </li>

              <li>
                <a href="/about">About Us</a>
              </li>

              <li>
                <a href="/contactus">ContactUs</a>
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
