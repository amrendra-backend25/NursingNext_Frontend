import "./Counter.css";
import CountUp from "react-countup";

const Counter = () => {
  return (
    <section className="counter_part">
      <div className="container counter_container">
        <div className="stat_box">
          {/* <div className="counter_image">
                <img src={Strike} alt="" />
            </div> */}
          <span className="count_percent">
            <CountUp start={10} end={90} duration={5} />
            <p>%</p>
          </span>
          <span className="counter_title">App Strike rate</span>
        </div>
        <div className="stat_box">
          {/* <div className="counter_image">
                <img src={Users} alt="" />
            </div> */}
          <span className="count_percent">
            <CountUp start={1000} end={150000} duration={5} />
            <p>+</p>
          </span>
          <span className="counter_title">Registered Users</span>
        </div>
        <div className="stat_box">
          {/* <div className="counter_image">
                <img src={Students} alt="" />
            </div> */}
          <span className="count_percent">
            <CountUp start={500} end={5000} duration={5} />
            <p>+</p>
          </span>
          <span className="counter_title">Students Selected</span>
        </div>
        <div className="stat_box">
          {/* <div className="counter_image">
                <img src={Success} alt="" />
            </div> */}
          <span className="count_percent">
            <CountUp start={400} end={4000} duration={5} />
            <p>+</p>
          </span>
          <span className="counter_title">Success Stories</span>
        </div>
      </div>
    </section>
  );
};

export default Counter;
