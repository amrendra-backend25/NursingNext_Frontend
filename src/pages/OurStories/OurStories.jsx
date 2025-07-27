import "./OurStories.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import StoryModel from "./StoryModel";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";
const OurStories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState({});
  const [storiesBanner, setStoriesBanner] = useState([]);
  const [successStories, setSuccessStories] = useState([]);
  const [isError, setIsError] = useState("");
  const location = useLocation();
  const [canonicalUrl] = useState("");

  const showStoriesBanner = async () => {
    try {
      const response = await Paths.EndpointsURL.StoriesBanner;
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

  const showSuccessStories = async () => {
    try {
      const response = await Paths.EndpointsURL.SuccessStories;
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [storiesBannerData, successStoriesData] = await Promise.all([
          showStoriesBanner(),
          showSuccessStories(),
        ]);
        setStoriesBanner(storiesBannerData);
        setSuccessStories(successStoriesData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    const currentUrl = window.location.origin + location.pathname;
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", currentUrl);
    }
    fetchData();
  }, [location]);

  const openModal = (person) => {
    setSelectedFaculty(person);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Layout
        title="NNL One Inspiring Journeys - Our Success Stories"
        description="Discover inspiring journeys at NNL One through our success stories. Explore how individuals have achieved their goals and overcome challenges with NNL ONE"
      ></Layout>
      <link rel="canonical" href={canonicalUrl} />
      {isError && <div>Error: {isError}</div>}
      {storiesBanner.slice(0, 1).map((banner) => {
        const { bannerImage, bannerHeading, bannerSubHeading } = banner;
        return (
          <>
            <section
              className="stories_section"
              style={{ backgroundImage: `url(${bannerImage})` }}
            >
              <div className="container">
                <div className="stories_parent">
                  <div className="stories_title">
                    <h2>{bannerHeading}</h2>
                    <p>{bannerSubHeading}</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}

      <section className="story_video_section">
        <div className="container">
          <div className="story_video_title">
            <h3>Success Stories</h3>
            <p>
              Our Teaching Experts are here to guide you at every step of the
              preparation, enabling you to run the course well and crack the
              entrance exam.
            </p>
          </div>
          <div className="story_card_section">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation={{
                nextEl: ".button-prev-slide",
                prevEl: ".button-next-slide",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Navigation, Autoplay, Pagination]}
            >
              <SwiperSlide>
                <div className="success_story_parent">
                  <div className="success_story_left">
                    {successStories.slice(0, 4).map((person, index) => {
                      const { videoHeading, videoImage } = person;
                      return (
                        <div
                          key={index}
                          className="story_video_left"
                          onClick={() => openModal(person)}
                        >
                          <div className="video_part_left">
                            <img src={videoImage} alt="" />
                          </div>
                          <div className="story_video_content">
                            <p>{videoHeading}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="success_story_right">
                    {successStories.slice(4, 5).map((person) => {
                      const { videoHeading, videoImage } = person;
                      return (
                        <>
                          <div
                            className="video_success_part"
                            onClick={() => openModal(person)}
                          >
                            <div className="video_part_right">
                              <img src={videoImage} alt="" />
                            </div>
                            <div className="story_video_content_2">
                              <p>{videoHeading}</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>

              <div className="success_story_button">
                <div className="success_story_button_right">
                  <div className="button-prev-slide">
                    <IoIosArrowForward />
                  </div>
                  <div className="button-next-slide">
                    <IoIosArrowBack />
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
        {/* Modal Component */}
        <StoryModel
          isOpen={modalOpen}
          onClose={closeModal}
          person={selectedFaculty}
        />
      </section>
    </>
  );
};

export default OurStories;
