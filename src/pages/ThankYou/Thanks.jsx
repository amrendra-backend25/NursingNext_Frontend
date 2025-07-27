// import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import thankyou from "/images/thankyou/correct.png";
import "./ThankYou.css";
import { Link } from "react-router-dom";

const Thanks = () => {
  // const { registrationStatus } = useParams();

  return (
    <>
      <section className="thankyou_section_web">
        <div className="thanks_container">
          <div className="thankyou_parent">
            <div className="thankyou_title">
              <div className="check_icon">
                {/* <span><FaCheck /></span> */}
                <img src={thankyou} alt="" />
              </div>
              <div className="register_heading">
                <h2>Thanks for contacting us!</h2>
                <p>
                  Our team will get back to you shortly. You can check out our
                  free content on!
                </p>
              </div>
            </div>

            <div className="whatsapp_btn">
              <Link
                to="https://www.youtube.com/@Nursingnextliveofficial"
                target="_blank"
              >
                <button>
                  <span>
                    <IoLogoYoutube className="socials_icon" />
                  </span>
                  Watch Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Thanks;
