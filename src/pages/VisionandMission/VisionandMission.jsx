import { Link } from "react-router-dom";
import "./VisionandMission.css";

const VisionandMission = () => {
  return (
    <section className="vision_section">
      <div className="container">
        <div className="vision_title">
          <div className="vision_sub_title">
            <p>
              Bringing Learning to People, <br /> Instead of People Going for
              Learning
            </p>
            {/* <span>We will fill the gap together!</span> */}
          </div>
          <div className="vision_btn">
            <Link to="all-courses">
              <button className="free_trial" style={{ cursor: "pointer" }}>
                View Courses
              </button>
            </Link>
            <Link to="stories">
              <button className="watch_vi" style={{ cursor: "pointer" }}>
                Success Stories
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionandMission;
