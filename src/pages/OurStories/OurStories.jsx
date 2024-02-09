import "./OurStories.css";
import podcast1 from "/images/stories/podcast1.png";
import podcast2 from "/images/stories/podcast2.png";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
//import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import StoryModel from "./StoryModel";
// import { AudioPlayer } from "react-audio-player-component";
// import video1 from "/images/stories/video1.png";
// import video2 from "/images/stories/video2.png";
// import video3 from "/images/stories/video3.png";

const OurStories = () => {
  const [successBanner, setSuccessBanner] = useState([]);
  const [successVideos, setSuccessVideos] = useState([]);
  const [setIsError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState({});

  const openModal = (records) => {
    setSelectedFaculty(records);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const successStoriesBanner = async () => {
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

  const displaySuccssVideos = async () => {
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
        const [storiesData, videosData] = await Promise.all([
          successStoriesBanner(),
          displaySuccssVideos(),
        ]);

        setSuccessBanner(storiesData);
        setSuccessVideos(videosData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {successBanner.slice(0, 1).map((banner, index) => {
        const { bannerHeading, bannerSubHeading, bannerImage } = banner;
        return (
          <section
            className="stories_section"
            style={{ backgroundImage: `url(${bannerImage})` }}
            key={index}
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
              {successVideos.map((records, index) => {
                const { videoHeading, videoImage } = records;
                return (
                  <>
                    <SwiperSlide>
                      <div className="success_story_parent" key={index}>
                        <div className="success_story_left">
                          <div
                            className="story_video_left"
                            onClick={() => openModal(records)}
                          >
                            <div className="video_part_left">
                              <img src={videoImage} alt="" />
                            </div>
                            <div className="story_video_content">
                              <p>{videoHeading}</p>
                            </div>
                          </div>
                          <div
                            className="story_video_left"
                            onClick={() => openModal(records)}
                          >
                            <div className="video_part_left">
                              <img src={videoImage} alt="" />
                            </div>
                            <div className="story_video_content">
                              <p>{videoHeading}</p>
                            </div>
                          </div>
                          <div
                            className="story_video_left"
                            onClick={() => openModal(records)}
                          >
                            <div className="video_part_left">
                              <img src={videoImage} alt="" />
                            </div>
                            <div className="story_video_content">
                              <p>{videoHeading}</p>
                            </div>
                          </div>
                          <div
                            className="story_video_left"
                            onClick={() => openModal(records)}
                          >
                            <div className="video_part_left">
                              <img src={videoImage} alt="" />
                            </div>
                            <div className="story_video_content">
                              <p>{videoHeading}</p>
                            </div>
                          </div>
                        </div>
                        <div className="success_story_right">
                          <div
                            className="video_success_part"
                            onClick={() => openModal(records)}
                          >
                            <div className="video_part_right">
                              <img src={videoImage} alt="" />
                            </div>
                            <div className="story_video_content">
                              <p>{videoHeading}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                );
              })}
              <div className="success_story_button">
                <div className="success_story_button_right">
                  <div className="button-prev-slide">
                    <IoIosArrowForward />
                  </div>
                  <div className="button-next-slide">
                    <IoIosArrowBack />
                  </div>
                </div>
                <div className="success_story_button_left">
                  <button>See All</button>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
        {/* Modal Component */}
        <StoryModel
          isOpen={modalOpen}
          onClose={closeModal}
          records={selectedFaculty}
        />
      </section>

      <section className="podcast_section">
        <div className="container">
          <div className="podcast_title">
            <h3>Podcast</h3>
            <p>Nursing Carvaan for your preparation</p>
          </div>
          <div className="podcast_video_main">
            <Swiper
              // install Swiper modules
              spaceBetween={20}
              slidesPerView={2}
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
                <div className="podcast_video_main">
                  <div className="podcast_video_slide">
                    <img src={podcast1} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="podcast_video_main">
                  <div className="podcast_video_slide">
                    <img src={podcast2} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="podcast_video_main">
                  <div className="podcast_video_slide">
                    <img src={podcast1} alt="" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="podcast_video_main">
                  <div className="podcast_video_slide">
                    <img src={podcast2} alt="" />
                    {/* <AudioPlayer
                      src=""
                      minimal={false}
                      width={350}
                      trackHeight={75}
                      barWidth={1}
                      gap={1}
                      visualise={true}
                      backgroundColor="#FFF8DE"
                      barColor="#C1D0B5"
                      barPlayedColor="#99A98F"
                      skipDuration={2}
                      showLoopOption={true}
                      showVolumeControl={true}
                    /> */}
                  </div>
                </div>
              </SwiperSlide>
              <div className="podcast_audio_button">
                <div className="podcast_audio_button_right">
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
      </section>
    </>
  );
};

export default OurStories;
