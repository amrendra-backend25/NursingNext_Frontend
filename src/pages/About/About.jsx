import "./About.css";
import gallery1 from "/images/aboutUs/gallery-1.png";
import gallery2 from "/images/aboutUs/gallery-2.png";
import gallery3 from "/images/aboutUs/gallery-3.png";
import gallery4 from "/images/aboutUs/gallery-4.png";
import gallery5 from "/images/aboutUs/gallery-5.png";
import gallery6 from "/images/aboutUs/gallery-6.png";
import gallery7 from "/images/aboutUs/gallery-7.png";
import gallery8 from "/images/aboutUs/gallery-8.png";
import gallery9 from "/images/aboutUs/gallery-9.png";
import founder from "/images/aboutUs/sk.png";
import director from "/images/aboutUs/varun.png";
import director2 from "/images/aboutUs/bhupesh.png";
import Award from "/images/aboutUs/award.png";
import apply from "/images/aboutUs/apply.png";
import hiring from "/images/aboutUs/hiring.png";
import help from "/images/aboutUs/Help.png";
import shape from "/images/aboutUs/Shape.svg";
import FAQ from "/images/aboutUs/FAQs.png";
import app from "/images/aboutUs/App.png";

import mission1 from "/images/aboutUs/mission01.jpg";
import mission2 from "/images/aboutUs/mission02.jpg";
import mission3 from "/images/aboutUs/mission03.jpg";
import vision1 from "/images/aboutUs/vision01.png";
import vision2 from "/images/aboutUs/vision02.png";
import vision3 from "/images/aboutUs/vision03.png";

import { SwiperSlide, Swiper } from "swiper/react";

import "swiper/css";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
const About = () => {
  const [aboutBanner, setAboutBanner] = useState([]);
  const [setIsError] = useState("");

  const displayAboutUs = async () => {
    try {
      const response = await Paths.EndpointsURL.AboutUsBanner;
      axios({
        url: response,
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }).then((record) => {
        setAboutBanner(record.data.data);
        //console.log(record.data.products);
      });
    } catch (error) {
      setIsError(error.msg);
      //console.log(error.msg);
    }
  };

  useEffect(() => {
    displayAboutUs();
  }, []);
  return (
    <>
      {aboutBanner.slice(0, 1).map((banner, index) => {
        const { bannerHeading, bannerSubHeading, bannerImage } = banner;
        return (
          <>
            <section
              className="about_section"
              style={{ backgroundImage: `url(${bannerImage})` }}
              key={index}
            >
              <div className="container">
                <div className="about_parent">
                  <div className="about_title">
                    <h2>{bannerHeading}</h2>
                    <p>{bannerSubHeading}</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}

      {/* <section className="learning_section">
        <div className="container">
          <div className="learning_parent">
            <div className="learning_title">
              <h3>Where Learning Meets Innovation</h3>
              <p>
                A platform like no other. We are here to bridge the gap between
                the nursing and the medical sector. We are an exclusive and a
                one of its kind online platform trying to transform the lives of
                students by digitally connecting them to the best mastermind
                faculty for their preparation.
              </p>
              <p>
                {" "}
                Nursing Next Live is a synonym for Nursing Education with a
                cutting edge and ever evolving technology that is forming the
                backbone of each student’s bright future, with a dedication to
                contribute a significant change in the field of medical
                education.
              </p>
            </div>
          </div>
          <div className="learning_img">
            <div className="learn_left_img">
              <img src={learning1} alt="" />
              <div className="left_img_content">
                <p className="content_bold">our vision</p>
                <p>
                  At Nursing Next Live, our vision is firmly rooted in our
                  commitment to enhance healthcare by fostering the development
                  of highly qualified and proficient nursing professionals.
                </p>
              </div>
            </div>
            <div className="learn_right_img">
              <img src={learning2} alt="" />
              <div className="right_img_content">
                <p className="content_bold">our mission</p>
                <p>
                  Our mission goes beyond conventional education; its about
                  revolutionizing the way future Nurses prepare for competitive
                  exams. With advanced technology, affordability, and a
                  student-centric approach, we provide the tools aspiring Nurses
                  need to excel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="learn_mission_section">
        <div className="container">
          <div className="learning_parent">
            <div className="learning_title">
              <h3>Where Learning Meets Innovation</h3>
              <p>
                A platform like no other. We are here to bridge the gap between
                the nursing and the medical sector. We are an exclusive and a
                one of its kind online platform trying to transform the lives of
                students by digitally connecting them to the best mastermind
                faculty for their preparation.
              </p>
              <p>
                {" "}
                Nursing Next Live is a synonym for Nursing Education with a
                cutting edge and ever evolving technology that is forming the
                backbone of each student’s bright future, with a dedication to
                contribute a significant change in the field of medical
                education.
              </p>
            </div>
          </div>
          <div className="learn_value_parent">
            <div className="value_card_child">
              <div className="learn_card_img">
                <div className="learn_img_content">
                  <img src={mission1} alt="" />
                </div>
                <div className="learn_card_data">
                  <div className="learn_icon_data_01">
                    <img src={vision1} alt="" />
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa corrupti excepturi fugiat iure. Labore nobis optio
                    corrupti quis dolore, deleniti iusto accusamus, dolorum
                    porro quasi quae, similique alias inventore facilis.
                  </p>
                </div>
              </div>
              <div className="learn_card_img">
                <div className="learn_img_content">
                  <img src={mission3} alt="" />
                </div>
                <div className="learn_card_data">
                  <div className="learn_icon_data_03">
                    <img src={vision3} alt="" />
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa corrupti excepturi fugiat iure. Labore nobis optio
                    corrupti quis dolore, deleniti iusto accusamus, dolorum
                    porro quasi quae, similique alias inventore facilis.
                  </p>
                </div>
              </div>
              <div className="learn_card_img">
                <div className="learn_img_content">
                  <img src={mission2} alt="" />
                </div>
                <div className="learn_card_data">
                  <div className="learn_icon_data_02">
                    <img src={vision2} alt="" />
                  </div>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa corrupti excepturi fugiat iure. Labore nobis optio
                    corrupti quis dolore, deleniti iusto accusamus, dolorum
                    porro quasi quae, similique alias inventore facilis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="nursingnext_section">
        <div className="container">
          <div className="nursingnext_title">
            <h3>Nursing Next Live</h3>
            <p>
              A platform like no other. We are here to bridge the gap between
              the nursing and the medical sector. We are an exclusive and a one
              of its kind online platform trying to transform the lives of
              students by digitally connecting them to the best mastermind
              faculty for their preparation.
            </p>
          </div>
        </div>
      </section>

      <section className="gallery_section">
        <div className="container">
          <div className="gallery_box_parent">
            <div className="col_img">
              <img src={gallery1} alt="" />
              <img src={gallery2} alt="" />
            </div>
            <div className="col_img">
              <img src={gallery3} alt="" />
            </div>
            <div className="col_img">
              <img src={gallery4} alt="" />
              <img src={gallery9} alt="" />
            </div>
            <div className="col_img">
              <img src={gallery6} alt="" />
            </div>
            <div className="col_img">
              <img src={gallery7} alt="" />
              <img src={gallery8} alt="" />
              <img src={gallery5} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="award_section">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          // navigation={{
          //   nextEl: ".button-prev-slide",
          //   prevEl: ".button-next-slide",
          // }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className="container">
              <div className="award_parent">
                <div className="left_award">
                  <p>
                    Nursing Next Live Clinches the{" "}
                    <span>
                      2021 Indian Achievers Award for Promising Start-Up by the
                      Indian Achievers Forum!
                    </span>{" "}
                  </p>
                  {/* <h3>Indian Achievers’ Award 2021 For PROMISING START-UP by the Indian Achievers’ Forum</h3> */}
                </div>
                <div className="right_award">
                  <div className="right_img_award">
                    <img src={Award} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="award_parent">
                <div className="left_award">
                  <p>
                    Empowering Healthcare, One Click at a Time:
                    <span>
                      {" "}
                      Nursing Next Live - Achieving Excellence with the YouTube
                      Silver Button 2023!
                    </span>
                  </p>
                  {/* <h3>Indian Achievers’ Award 2021 For PROMISING START-UP by the Indian Achievers’ Forum</h3> */}
                </div>
                <div className="right_award">
                  <div className="right_img_award">
                    <img src={Award} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container">
              <div className="award_parent">
                <div className="left_award">
                  <p>Nursing Next Live is honoured with the </p>
                  <h3>
                    Indian Achievers’ Award 2021 For PROMISING START-UP by the
                    Indian Achievers’ Forum
                  </h3>
                </div>
                <div className="right_award">
                  <div className="right_img_award">
                    <img src={Award} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <div className="swiper_button">
            <div className="button-prev-slide">
              <IoIosArrowForward />
            </div>
            <div className="button-next-slide">
              <IoIosArrowBack />
            </div>
          </div> */}
        </Swiper>
      </section>

      <section className="visionaries_section">
        <div className="container">
          <div className="vision_head_title">
            <h4>The Leading Visionaries</h4>
          </div>
          <div className="vision_head_parent">
            <div className="head_img_left">
              <img src={founder} alt="" />
            </div>
            <div className="head_title_right">
              <div className="director_title">
                <h5>Mr. S.K. Jain</h5>
                <span>Chairman</span>
                <p>
                  “The founder of CBS Publishers & Distributors Pvt. Ltd., which
                  is now a household name in the field of medical education. He
                  has successfully established himself as one of the most sought
                  after publishers in the country. Determination and
                  perseverance paved the way for his exemplary success in
                  getting the most recognized authors and faculties on board.
                  Constantly competing with international players in the field
                  of medical education and then carving a niche for himself,
                  speaks volumes about his hard work. CBS was also awarded by
                  the Federation of Publishers’ & Booksellers’ Association,
                  India for completing 50 glorious years in the field of
                  publishing.”
                </p>
              </div>
            </div>
          </div>
          <div className="vision_head_parent_1">
            <div className="head_img_left_1">
              <img src={director} alt="" />
            </div>
            <div className="head_title_right_1">
              <div className="director_title_1">
                <h5>Mr. Varun Jain</h5>
                <span>Director</span>
                <p>
                  “With a strong belief in spreading his wings and transforming
                  the world of nursing education to provide the finest quality
                  education digitally to our students, he has focused on making
                  Nursing Next Live a one of its kind platform. The field of
                  medical education being his forte, he decided to venture into
                  the world of nursing education and use the best quality
                  content and the most sought after faculties to provide a world
                  full of opportunities to our aspiring nurses. Digitally
                  transforming the Nursing sector for a better learning
                  experience is the way forward. “
                </p>
              </div>
            </div>
          </div>
          <div className="vision_head_parent_2">
            <div className="head_img_left_2">
              <img src={director2} alt="" />
            </div>
            <div className="head_title_right_2">
              <div className="director_title_2">
                <h5>Mr. Bhupesh Aarora</h5>
                <span>Director</span>
                <p>
                  “With a strong belief in spreading his wings and transforming
                  the world of nursing education to provide the finest quality
                  education digitally to our students, he has focused on making
                  Nursing Next Live a one of its kind platform. The field of
                  medical education being his forte, he decided to venture into
                  the world of nursing education and use the best quality
                  content and the most sought after faculties to provide a world
                  full of opportunities to our aspiring nurses. Digitally
                  transforming the Nursing sector for a better learning
                  experience is the way forward. “
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="hiring_section">
        <div className="container">
          <div className="hiring_parent">
            <div className="hiring_img">
              <img src={hiring} alt="" />
              <h4 className="hiring_content">
                <span>WE ARE </span>
                <br /> HIRING
              </h4>
            </div>
            <div className="explore_div">
              <div className="left_explore">
                <p>
                  Let’s Work <span>Together</span> & <span>Explore</span>{" "}
                  Opportunities
                </p>
              </div>
              <div className="right_explore_button">
                <button>Apply Now</button>
              </div>
            </div>
            <div className="apply_img">
              <img src={apply} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="about_support">
        <div className="container">
          <div className="about_support_title">
            <div className="about_support_content">
              <img src={help} alt="" />
              <h4>Help & Support</h4>
              <p>Contact us for any Queries, service requests or complaints</p>
            </div>
            <div className="about_support_content">
              <img src={shape} alt="" />
              <h4>Your Feedback</h4>
              <p>Do you have any suggestions? We’d love to hear from you!</p>
            </div>
            <div className="about_support_content">
              <img src={FAQ} alt="" />
              <h4>FAQs</h4>
              <p>All your frequently asked questions, answered in one place</p>
            </div>
            <div className="about_support_content">
              <img src={app} alt="" />
              <h4>Download App</h4>
              <p>Get the App and access a world of goodness</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
