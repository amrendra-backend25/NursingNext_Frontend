import "./SocialIcons.css";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="tel:9919914449" className="icon call" rel="noopener noreferrer">
        <div className="sticy_icon">
          <FaPhoneAlt className="icon4" />
        </div>
        <p>Phone</p>
      </a>
      <a
        href="mailto:feedback@nursingnextlive.in"
        className="icon call"
        rel="noopener noreferrer"
      >
        <div className="sticy_icon">
          <FaEnvelope className="icon4" />
        </div>
        <p>Email</p>
      </a>
      <a
        href="https://wa.me/919999117411?text=Hello%20there!"
        className="icon call"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="sticy_icon">
          <FaWhatsapp className="icon4" />
        </div>
        <p>WhatsApp</p>
      </a>
    </div>
  );
};

export default SocialIcons;
