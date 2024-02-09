import { Link } from "react-router-dom";
import "./Blogs.css";
import { useState } from "react";
import blog1 from "/images/blogs/blog01.png";
import blog2 from "/images/blogs/blog02.png";
import blog3 from "/images/blogs/blog03.png";
import blog4 from "/images/blogs/blog04.png";
import { GoDotFill } from "react-icons/go";

const Blogs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <>
      <section className="blogs_section">
        <div className="container">
          <div className="blogs_parent">
            <div className="blogs_title">
              <h2>latest blogs</h2>
              <p>nursing education</p>
            </div>
          </div>
        </div>
      </section>

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
            <li
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
            </li>
          </ul>

          {/* Content based on active tab */}
          <div className="blog_tab-content">
            {activeTab === 1 && (
              <div className="blog_tab_parent">
                <div className="blog_tab_right">
                  <img src={blog1} alt="" />
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
                      <div className="blog_circle"></div>
                      <div className="blog_circle_title">
                        <h4>Mr Om</h4>
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
                    <h4>Nutritious Snacking for a Healthy Mind & Body!</h4>
                    <p>
                      Amidst all the stress and tension of the exams and
                      extensive studying, it is essential for the brain to
                      receive proper nourishment to maintain the...
                    </p>
                  </div>
                  <div className="blog_tab_sub_content">
                    <div className="blog_tab_sub_title">
                      <div className="blog_circle"></div>
                      <div className="blog_circle_title">
                        <h4>Mr Om</h4>
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
                      <div className="blog_circle"></div>
                      <div className="blog_circle_title">
                        <h4>Mr Om</h4>
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
                      <div className="blog_circle"></div>
                      <div className="blog_circle_title">
                        <h4>Mr Om</h4>
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
            {activeTab === 2 && <div>Content for Tab 2</div>}
            {activeTab === 3 && <div>Content for Tab 3</div>}
            {activeTab === 4 && <div>Content for Tab 4</div>}
          </div>
        </div>
      </section>

      <section className="blog_video_section">
        <div className="container">
          <div className="blog_video_title">
            <h3>Similar Video</h3>
          </div>
          <div className="blog_video_card">
            <div className="blog_video_child">
              <div className="blog_image">
                <img src={blog1} alt="" />
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
                <img src={blog1} alt="" />
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
                <img src={blog1} alt="" />
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
                <img src={blog1} alt="" />
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
      </section>
    </>
  );
};

export default Blogs;
