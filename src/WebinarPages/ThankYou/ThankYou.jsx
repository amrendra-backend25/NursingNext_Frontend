import { FaWhatsapp } from "react-icons/fa6";
import thankyou from "/images/thankyou/payment.png";
import "./ThankYou.css";
import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
  const { registrationStatus } = useParams();

  return (
    <>
      <section className="thankyou_section">
        <div className="container">
          {registrationStatus === "success" ? (
            <div className="thankyou_parent">
              <div className="thankyou_title">
                <div className="check_icon">
                  {/* <span><FaCheck /></span> */}
                  <img src={thankyou} alt="" />
                </div>
                <div className="register_heading">
                  <h2>Thank you for registering!</h2>
                  <p>Your Query Request Submitted Successfully!</p>
                </div>
              </div>
              <div className="thankyou_sub_title">
                <p className="sub_title_group">
                  Join our WhatsApp group and stay updated on the upcoming
                  sessions!
                </p>
                <p className="notification_title">
                  ( All related notifications and live session links will be
                  shared on WhatsApp group only )
                </p>
              </div>
              <div className="whatsapp_btn">
                <Link
                  to="https://chat.whatsapp.com/FJ3VOoah7hw4KzxSGHPwK3"
                  target="_blank"
                >
                  <button>
                    <span>
                      <FaWhatsapp className="social_icon" />
                    </span>
                    Join Now
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="register_heading">
              <h2>
                Invalid Access. Please submit the registration form to access
                this page.
              </h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default ThankYou;
