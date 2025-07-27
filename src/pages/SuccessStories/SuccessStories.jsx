import { useState, useEffect, useCallback, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Layout from "../Layout/Layout";
import { Paths } from "../../config/configAPI";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SuccessStories.css";
import SuccessStoriesModel from "./SuccessStoriesModel";

const SuccessStories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState({});
  const [storiesBanner, setStoriesBanner] = useState([]);
  const [successStories, setSuccessStories] = useState([]);
  const [isError, setIsError] = useState("");
  const location = useLocation();
  const canonicalUrl = useMemo(
    () => window.location.origin + location.pathname,
    [location]
  );

  const fetchData = useCallback(async (url) => {
    try {
      const response = await axios.get(url, {
        headers: { "Content-type": "application/json" },
      });
      return response.data.data;
    } catch (error) {
      setIsError(error.message);
      return [];
    }
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      const [storiesBannerData, successStoriesData] = await Promise.all([
        fetchData(Paths.EndpointsURL.StoriesBanner),
        fetchData(Paths.EndpointsURL.SuccessStories),
      ]);
      setStoriesBanner(storiesBannerData);
      setSuccessStories(successStoriesData);
    };

    fetchAllData();

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    }
  }, [fetchData, canonicalUrl]);

  const openModal = useCallback((person) => {
    setSelectedFaculty(person);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const renderStorySlide = useCallback(
    (stories) => (
      <div className="success_story_parent">
        <div className="success_story_left">
          {stories.slice(0, 4).map((person, index) => (
            <div
              key={index}
              className="story_video_left"
              onClick={() => openModal(person)}
            >
              <div className="video_part_left">
                <img src={person.videoImage} alt="" loading="lazy" />
              </div>
              <div className="story_video_content">
                <p>{person.videoHeading}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="success_story_right">
          {stories.slice(4, 5).map((person, index) => (
            <div
              key={index}
              className="video_success_part"
              onClick={() => openModal(person)}
            >
              <div className="video_part_right">
                <img src={person.videoImage} alt="" loading="lazy" />
              </div>
              <div className="story_video_content_2">
                <p>{person.videoHeading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    [openModal]
  );

  const storySlides = useMemo(() => {
    const slides = [];
    for (let i = 0; i < successStories.length; i += 5) {
      slides.push(renderStorySlide(successStories.slice(i, i + 5)));
    }
    return slides;
  }, [successStories, renderStorySlide]);

  return (
    <>
      <Layout
        title="NNL One Inspiring Journeys - Our Success Stories"
        description="Discover inspiring journeys at NNL One through our success stories. Explore how individuals have achieved their goals and overcome challenges with NNL ONE"
      />
      <link rel="canonical" href={canonicalUrl} />
      {isError && <div>Error: {isError}</div>}
      {storiesBanner.slice(0, 1).map((banner) => (
        <section
          key={banner.id}
          className="stories_section"
          style={{ backgroundImage: `url(${banner.bannerImage})` }}
        >
          <div className="container">
            <div className="stories_parent">
              <div className="stories_title">
                <h2>{banner.bannerHeading}</h2>
                <p>{banner.bannerSubHeading}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

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
              {storySlides.map((slide, index) => (
                <SwiperSlide key={index}>{slide}</SwiperSlide>
              ))}
            </Swiper>
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
          </div>
        </div>
        {/* Modal Component */}
        <SuccessStoriesModel
          isOpen={modalOpen}
          onClose={closeModal}
          person={selectedFaculty}
        />
      </section>
    </>
  );
};

export default SuccessStories;
