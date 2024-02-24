import { Link, useNavigate } from "react-router-dom";
import "./Blogs.css";
// import latestBanner from "/images/latestblogs/rajasthan-1.png";
import blog1 from "/images/blogs/blogs1.jpg";
import blog2 from "/images/blogs/blogs2.jpg";
import blog3 from "/images/blogs/blogs3.png";
import blog4 from "/images/blogs/blogs4.jpeg";
import blog5 from "/images/blogs/blogs5.png";

// import gentleman from "/images/blogs/gentleman.jpg";
import { GoDotFill } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { useState, useEffect } from "react";
const Blogs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [blogsBanner, setBlogsBanner] = useState([]);
  const [setIsError] = useState("");
  const navigate = useNavigate();

  const showBlogsBanner = async () => {
    try {
      const response = await Paths.EndpointsURL.BlogsBanner;
      const record = await axios.get(response, {
        headers: {
          "Content-type": "application/json",
        },
      });
      return record.data.data;
    } catch (error) {
      setIsError(error.msg);
      return [];
    }
  };

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const goToLatestBlog = () => {
    navigate("/blogs/innerblogs");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogsBannerData] = await Promise.all([showBlogsBanner()]);
        setBlogsBanner(blogsBannerData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      {blogsBanner.slice(0, 1).map((banner) => {
        const { bannerImage } = banner;
        return (
          <>
            <section
              className="blogs_section"
              style={{ backgroundImage: `url(${bannerImage})` }}
            >
              <div className="container">
                <div className="blogs_parent">
                  <div className="blogs_title">
                    <h2>latest blogs</h2>
                    <p>nursing education</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}

      <section className="blog_tab_section">
        <div className="container">
          {/* Tab buttons */}
          <ul className="blog_tabs">
            <li
              onClick={() => handleTabClick(1)}
              className={activeTab === 1 ? "tab active" : "tab"}
            >
              <Link>Popular</Link>
            </li>
            {/* <li
              onClick={() => handleTabClick(2)}
              className={activeTab === 2 ? "tab active" : "tab"}
            >
              <Link>More Recent</Link>
            </li>
            <li
              onClick={() => handleTabClick(3)}
              className={activeTab === 3 ? "tab active" : "tab"}
            >
              <Link>Community</Link>
            </li>
            <li
              onClick={() => handleTabClick(4)}
              className={activeTab === 4 ? "tab active" : "tab"}
            >
              <Link>Others</Link>
            </li> */}
          </ul>

          {/* Content based on active tab */}
          <div className="blog_tab-content">
            {activeTab === 1 && (
              <div className="blog_tab_parent">
                <div
                  className="blog_tab_right"
                  onClick={() => goToLatestBlog()}
                >
                  <img src={blog1} alt="" />
                  <div className="blog_tab_content">
                    <h4>
                      AIIMS NORCET 2024 Exam Syllabus, Age Limit, Eligibility
                      Criteria
                    </h4>
                    <p>
                      AIIMS NORCET 2024 conducted by the All India Institute of
                      Medical Science (AIIMS) will be held in April to recruit
                      nursing officers. This article discusses....
                    </p>
                  </div>

                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle">
                        <CgProfile />
                      </div>
                      <div className="blog_circle_title">
                        <h4>Soni</h4>
                        <ul>
                          <li>
                            <a href="">6 min read</a>
                          </li>
                          <li>
                            <a href="">
                              <span>
                                <GoDotFill />
                              </span>
                              February 14, 2024
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="blog_tab_right"
                  onClick={() => goToLatestBlog()}
                >
                  <img src={blog2} alt="" />
                  <div className="blog_tab_content">
                    <h4>BSc Nursing Admission Process 2024, Exam Date, Fees</h4>
                    <p>
                      The BSc Nursing Admission Process 2024 will be conducted
                      this year to accept undergraduate candidates for the BSc
                      Nursing course. This article discusses the Exam...
                    </p>
                  </div>

                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle">
                        {/* <img src="Profile" alt="" /> */}
                        <CgProfile />
                      </div>
                      <div className="blog_circle_title">
                        <h4>Soni</h4>
                        <ul>
                          <li>
                            <a href="">6 min read</a>
                          </li>
                          <li>
                            <a href="">
                              <span>
                                <GoDotFill />
                              </span>
                              February 21, 2024
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog_tab_right">
                  <img src={blog3} alt="" />
                  <div className="blog_tab_content">
                    <h4>
                      Rajasthan CHO Exam 2024 Exam pattern ,Admit Card Download
                    </h4>
                    <p>
                      Rajasthan CHO Exam 2024 will be conducted on March 3, 2024
                      to recruit Community Health Officers for the state of
                      Rajasthan. This article discusses the...
                    </p>
                  </div>
                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle">
                        {/* <img src="Profile" alt="" /> */}
                        <CgProfile />
                      </div>
                      <div className="blog_circle_title">
                        <h4>Soni</h4>
                        <ul>
                          <li>
                            <a href="">6 min read</a>
                          </li>
                          <li>
                            <a href="">
                              <span>
                                <GoDotFill />
                              </span>
                              January 8, 2024
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_tab_right">
                  <img src={blog4} alt="" />
                  <div className="blog_tab_content">
                    <h4>
                      UP NHM CHO Recruitment 2024 For 5582 Posts Vacancies Out ,
                      Apply Now
                    </h4>
                    <p>
                      UP NHM CHO Recruitment 2024: The application period for UP
                      NHM CHO Recruitment 2024 is from January 29 to February 7,
                      2024, with a total...
                    </p>
                  </div>
                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle">
                        {/* <img src="Profile" alt="" /> */}
                        <CgProfile />
                      </div>
                      <div className="blog_circle_title">
                        <h4>Soni</h4>
                        <ul>
                          <li>
                            <a href="">6 min read</a>
                          </li>
                          <li>
                            <a href="">
                              <span>
                                <GoDotFill />
                              </span>
                              February 2, 2024
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog_tab_right">
                  {/* <img src={blog5} alt="" />
                  <div className="blog_tab_content">
                    <h4>
                      AIIMS NORCET 2024 Exam Syllabus, Age Limit, Eligibility
                      Criteria
                    </h4>
                    <p>
                      AIIMS NORCET 2024 conducted by the All India Institute of
                      Medical Science (AIIMS) will be held in April to recruit
                      nursing officers. This article discusses...
                    </p>
                  </div>
                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle">
                        <CgProfile />
                      </div>
                      <div className="blog_circle_title">
                        <h4>Soni</h4>
                        <ul>
                          <li>
                            <a href="">6 min read</a>
                          </li>
                          <li>
                            <a href="">
                              <span>
                                <GoDotFill />
                              </span>
                              January 29, 2024
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            )}

            {/* {activeTab === 2 && (
              <div className="blog_tab_parent">
                <div
                  className="blog_tab_right"
                  onClick={() => goToLatestBlog()}
                >
                  <img src={latestBanner} alt="" />
                  <div className="blog_tab_content">
                    <h4>
                      UP NHM CHO Recruitment 2024 For 5582 Posts Vacancies Out ,
                      Apply Now
                    </h4>
                    <p>
                      UP NHM CHO Recruitment 2024: The application period for UP
                      NHM CHO Recruitment 2024 is from January 29 to February 7,
                      2024, with a total...
                    </p>
                  </div>
                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle">
                        <img src={gentleman} alt="" />
                      </div>
                      <div className="blog_circle_title">
                        <h4>Author</h4>
                        <ul>
                          <li>
                            <a href="">6 min read</a>
                          </li>
                          <li>
                            <a href="">
                              <span>
                                <GoDotFill />
                              </span>
                              November 23, 2023
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="blog_tab_right">
                  <img src={blog2} alt="" />
                  <div className="blog_tab_content">
                    <h4>
                      AIIMS NORCET 2024 Exam Syllabus, Age Limit, Eligibility
                      Criteria
                    </h4>
                    <p>
                      AIIMS NORCET 2024 conducted by the All India Institute of
                      Medical Science (AIIMS) will be held in April to recruit
                      nursing officers. This article discusses....
                    </p>
                  </div>
                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle">
                        <img src={gentleman} alt="" />
                      </div>
                      <div className="blog_circle_title">
                        <h4>Author</h4>
                        <ul>
                          <li>
                            <a href="">6 min read</a>
                          </li>
                          <li>
                            <a href="">
                              <span>
                                <GoDotFill />
                              </span>
                              November 23, 2023
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_tab_right">
                  <img src={blog3} alt="" />
                  <div className="blog_tab_content">
                    <h4>Nutritious Snacking for a Healthy Mind & Body!</h4>
                    <p>
                      Amidst all the stress and tension of the exams and
                      extensive studying, it is essential for the brain to
                      receive proper nourishment to maintain the...
                    </p>
                  </div>
                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle">
                        <img src={gentleman} alt="" />
                      </div>
                      <div className="blog_circle_title">
                        <h4>Author</h4>
                        <ul>
                          <li>
                            <a href="">6 min read</a>
                          </li>
                          <li>
                            <a href="">
                              <span>
                                <GoDotFill />
                              </span>
                              November 23, 2023
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_tab_right">
                  <img src={blog4} alt="" />
                  <div className="blog_tab_content">
                    <h4>Nutritious Snacking for a Healthy Mind & Body!</h4>
                    <p>
                      Amidst all the stress and tension of the exams and
                      extensive studying, it is essential for the brain to
                      receive proper nourishment to maintain the...
                    </p>
                  </div>
                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle">
                        <img src={gentleman} alt="" />
                      </div>
                      <div className="blog_circle_title">
                        <h4>Author</h4>
                        <ul>
                          <li>
                            <a href="">6 min read</a>
                          </li>
                          <li>
                            <a href="">
                              <span>
                                <GoDotFill />
                              </span>
                              November 23, 2023
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="blog_tab_parent">
                <div
                  className="blog_tab_right"
                  onClick={() => goToLatestBlog()}
                >
                  <img src={latestBanner} alt="" />
                  <div className="blog_tab_content">
                    <h4>
                      UP NHM CHO Recruitment 2024 For 5582 Posts Vacancies Out ,
                      Apply Now
                    </h4>
                    <p>
                      UP NHM CHO Recruitment 2024: The application period for UP
                      NHM CHO Recruitment 2024 is from January 29 to February 7,
                      2024, with a total...
                    </p>
                  </div>
                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle">
                        <img src={gentleman} alt="" />
                      </div>
                      <div className="blog_circle_title">
                        <h4>Author</h4>
                        <ul>
                          <li>
                            <a href="">6 min read</a>
                          </li>
                          <li>
                            <a href="">
                              <span>
                                <GoDotFill />
                              </span>
                              November 23, 2023
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_tab_right">
                  <img src={blog2} alt="" />
                  <div className="blog_tab_content">
                    <h4>
                      AIIMS NORCET 2024 Exam Syllabus, Age Limit, Eligibility
                      Criteria
                    </h4>
                    <p>
                      AIIMS NORCET 2024 conducted by the All India Institute of
                      Medical Science (AIIMS) will be held in April to recruit
                      nursing officers. This article discusses....
                    </p>
                  </div>
                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle">
                        <img src={gentleman} alt="" />
                      </div>
                      <div className="blog_circle_title">
                        <h4>Author</h4>
                        <ul>
                          <li>
                            <a href="">6 min read</a>
                          </li>
                          <li>
                            <a href="">
                              <span>
                                <GoDotFill />
                              </span>
                              November 23, 2023
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_tab_right">
                  <img src={blog3} alt="" />
                  <div className="blog_tab_content">
                    <h4>Nutritious Snacking for a Healthy Mind & Body!</h4>
                    <p>
                      Amidst all the stress and tension of the exams and
                      extensive studying, it is essential for the brain to
                      receive proper nourishment to maintain the...
                    </p>
                  </div>
                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle">
                        <img src={gentleman} alt="" />
                      </div>
                      <div className="blog_circle_title">
                        <h4>Author</h4>
                        <ul>
                          <li>
                            <a href="">6 min read</a>
                          </li>
                          <li>
                            <a href="">
                              <span>
                                <GoDotFill />
                              </span>
                              November 23, 2023
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog_tab_right">
                  <img src={blog4} alt="" />
                  <div className="blog_tab_content">
                    <h4>Nutritious Snacking for a Healthy Mind & Body!</h4>
                    <p>
                      Amidst all the stress and tension of the exams and
                      extensive studying, it is essential for the brain to
                      receive proper nourishment to maintain the...
                    </p>
                  </div>
                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle">
                        <img src={gentleman} alt="" />
                      </div>
                      <div className="blog_circle_title">
                        <h4>Author</h4>
                        <ul>
                          <li>
                            <a href="">6 min read</a>
                          </li>
                          <li>
                            <a href="">
                              <span>
                                <GoDotFill />
                              </span>
                              November 23, 2023
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 4 && <div>Coming Soon...</div>} */}
          </div>
        </div>
      </section>

      {/* <section className="blog_video_section">
        <div className="container">
          <div className="blog_video_title">
            <h3>Similar Video</h3>
          </div>
          <div className="blog_video_card">
            <div className="blog_video_child">
              <div className="blog_image">
                <img src={latestBanner} alt="" />
              </div>
              <div className="blog_sub_content">
                <h4>Nutritious Snacking for a Healthy Mind & Body!</h4>
                <p>
                  Amidst all the stress and tension of the exams and extensive
                  studying, it is essential for the brain to receive proper
                  nourishment to maintain the...
                </p>
              </div>
            </div>
            <div className="blog_video_child">
              <div className="blog_image">
                <img src={latestBanner} alt="" />
              </div>
              <div className="blog_sub_content">
                <h4>Nutritious Snacking for a Healthy Mind & Body!</h4>
                <p>
                  Amidst all the stress and tension of the exams and extensive
                  studying, it is essential for the brain to receive proper
                  nourishment to maintain the...
                </p>
              </div>
            </div>
            <div className="blog_video_child">
              <div className="blog_image">
                <img src={latestBanner} alt="" />
              </div>
              <div className="blog_sub_content">
                <h4>Nutritious Snacking for a Healthy Mind & Body!</h4>
                <p>
                  Amidst all the stress and tension of the exams and extensive
                  studying, it is essential for the brain to receive proper
                  nourishment to maintain the...
                </p>
              </div>
            </div>
            <div className="blog_video_child">
              <div className="blog_image">
                <img src={latestBanner} alt="" />
              </div>
              <div className="blog_sub_content">
                <h4>Nutritious Snacking for a Healthy Mind & Body!</h4>
                <p>
                  Amidst all the stress and tension of the exams and extensive
                  studying, it is essential for the brain to receive proper
                  nourishment to maintain the...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Blogs;
