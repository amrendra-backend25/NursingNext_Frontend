import "./About.css";
import mission1 from "/images/aboutUs/RED.jpg";
import mission2 from "/images/aboutUs/BLUE.jpg";
import mission3 from "/images/aboutUs/GREY.jpg";
import vision1 from "/images/aboutUs/vision01.png";
import vision2 from "/images/aboutUs/vision02.png";
import vision3 from "/images/aboutUs/vision03.png";

import { NewWhyChoose } from "../WhyUs/NewWhyChoose";
const About = () => {
  return (
    <>
      {NewWhyChoose.slice(1, 2).map((banner, index) => {
        const { title, img } = banner;
        return (
          <>
            <section
              className="about_section"
              style={{ backgroundImage: `url(${img})` }}
              key={index}
            >
              <div className="container">
                <div className="about_parent">
                  <div className="about_title">
                    <h2>{title}</h2>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}

      <section className="learn_mission_section">
        <div className="container">
          <div className="learning_parent">
            <div className="learning_title">
              <h3>Overview</h3>
              <p>
                APSPL is a B2B (Business to Business) procurement solution
                connecting Buyers and Sellers so that helps you manage your
                buying process more efficiently. We are an Indian Based
                E-Commerce Company with some heightened goals to serve our
                Client with our full energy and make satisfy with our services
                which we are providing. Our main aim is to solve the complicated
                problems of Plants/ Corporate / Institution and make the market
                more easy and fair for the Customers. By this we want to make a
                better platform for Seller to sale the product and Buyer to
                purchase the product.
              </p>
            </div>
          </div>
          <div className="learn_value_parent">
            <div className="value_card_child">
              <div className="learn_card_img">
                <div className="learn_img_content">
                  <p>Vision</p>
                  <img src={mission2} alt="" />
                </div>
                <div className="learn_card_data">
                  <div className="learn_icon_data_03">
                    <img src={vision3} alt="" />
                  </div>
                  <p>
                    To be the most trusted partner in procurement, driving
                    efficiency, sustainability, and innovation in supply chains
                    worldwide, while empowering businesses to achieve
                    unparalleled growth.
                  </p>
                </div>
              </div>

              <div className="learn_card_img">
                <div className="learn_img_content">
                  <p>Mission</p>
                  <img src={mission1} alt="" />
                </div>
                <div className="learn_card_data">
                  <div className="learn_icon_data_01">
                    <img src={vision1} alt="" />
                  </div>
                  <p>
                    Our mission at AevitasProc is to provide exceptional
                    procurement solutions that streamline supply chains, reduce
                    costs, and foster lasting partnerships. We are dedicated to
                    leveraging our expertise and technology to offer tailored,
                    transparent, and sustainable sourcing strategies that align
                    with our clients goals.
                  </p>
                </div>
              </div>

              <div className="learn_card_img">
                <div className="learn_img_content">
                  <p>Values</p>
                  <img src={mission3} alt="" />
                </div>
                <div className="learn_card_data">
                  <div className="learn_icon_data_02">
                    <img src={vision2} alt="" />
                  </div>
                  <p>
                    AevitasProc is built on the values of integrity, excellence,
                    innovation, sustainability, and collaboration. We are
                    committed to conducting business with the highest ethical
                    standards, embracing change and innovation, promoting
                    sustainable practices, and working closely with clients and
                    partners to achieve shared success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="visionaries_section">
        <div className="container">
          <div className="vision_head_title">
            <h4>The Leading Visionaries</h4>
          </div>
          <div className="vision_head_parent">
            <div className="head_img_left">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHwW5GGt6sKpw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1703223992456?e=1729123200&v=beta&t=C96Op8T53jZpCd1JnQuzd5EUdjJcbIami1CIX-2JqY8"
                alt=""
              />
            </div>
            <div className="head_title_right">
              <div className="director_title">
                <h5>Irfan Ansari</h5>
                <span>Founder & CEO of AEVITAS</span>
                <p>
                  “At AevitasProc, our vision stems from a deep commitment to
                  revolutionize procurement practices. We aspire to be the
                  leading force in creating streamlined, efficient, and
                  sustainable supply chains that empower businesses globally. By
                  fostering innovation, integrity, and collaboration, we aim to
                  build enduring partnerships and drive growth, ensuring our
                  clients and partners achieve their highest potential. Our goal
                  is to transform the procurement landscape through cutting-edge
                  solutions and unwavering dedication to excellence.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
