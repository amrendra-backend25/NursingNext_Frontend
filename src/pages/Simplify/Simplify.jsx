import { Link } from "react-router-dom";
import "./Simplify.css";
//import appstore from '/images/simplify/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.png'
import playstore from "/images/simplify/Group 164217.png";
//import iosstore from '/images/simplify/iOS AppStore.png'
import androidstore from "/images/simplify/QRCODENNL.jpeg";
import MockupWebsite from "/images/simplify/MockupWebsite.png";
//import screenshot2 from '/images/simplify/Screenshot-2.png'

const Simplify = () => {
  return (
    <section className="simplify_section">
      <div className="container">
        <div className="parent_simplify">
          <div className="left_simplify">
            <p className="live">
              One Stop Platform For All <br />
              <span> Nursing Preparation Needs</span>
            </p>
            <p className="use">At the click of a button </p>
            <p className="easy">Download the App Now</p>
            <Link
              to="https://play.google.com/store/apps/details?id=com.live.nursingnext&hl=en_IN&pli=1"
              target="blank"
            >
              <div className="img_button">
                <img src={playstore} alt="" />
              </div>
            </Link>

            <div className="scan_code">
              <p>Scan the QR Code</p>
              <div className="scan_img">
                <img src={androidstore} alt="" className="android_store" />
              </div>
            </div>
          </div>
          <div className="right_simplify">
            <div className="right_img">
              <img src={MockupWebsite} alt="" className="screenshot-1" />
              {/* <img src={screenshot2} alt="" className='screenshot-2'/> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simplify;
