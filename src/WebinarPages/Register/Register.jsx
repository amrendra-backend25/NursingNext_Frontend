import "./Register.css";
import register from "/images/video/WebinarImages.jpg";

const Register = () => {
  return (
    <>
      <section className="webinar_register_section">
        <div className="container">
          <div className="register_main">
            <div className="register_content_left">
              <h3>How is the webinar going to help you ?</h3>
              <ul>
                <li>
                  A detailed conceptual revision of high yielding topics from
                  the Target High Next Nursing Decode book
                </li>
                <li>Provides knowledge in a clear, simple format</li>
                <li>
                  Rapid review of the topic is assisted by providing flowcharts,
                  line diagram and mnemonics{" "}
                </li>
                <li>
                  Visual Aids including charts, graphs, and illustrations to
                  enhance comprehension
                </li>
                <li>
                  Easy-to-understand examples are provided to facilitate
                  conceptual building of the topics
                </li>
              </ul>
            </div>
            <div className="simplified_right_video">
              <img src={register} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
