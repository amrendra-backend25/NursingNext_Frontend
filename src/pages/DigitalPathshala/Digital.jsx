import "./Digital.css";
import { digitalAchivemant } from "./Digital";
const Digital = () => {
  return (
    <section className="digital_section">
      <div className="container">
        <div className="digital_title">
          <h3>Key Achivement</h3>
        </div>
        <div className="digital_parent_container">
          <div className="digital_parent">
            {[...digitalAchivemant, ...digitalAchivemant].map((result) => {
              const { img } = result;
              return (
                <>
                  <div className="digital_card">
                    <div className="digital_img">
                      <img src={img} alt="" />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Digital;
