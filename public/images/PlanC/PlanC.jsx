import './PlanC.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactPlayer from 'react-player';
import planc from '/images/plan_zero/planc.jpg';
import question from '/images/plan_zero/question.png';
import icon1 from '/images/plan_zero/icon1.png';
import icon2 from '/images/plan_zero/icon2.png';
import icon3 from '/images/plan_zero/icon3.png';
import icon4 from '/images/plan_zero/icon4.png';
import apply from '/images/aboutUs/apply.png'
import hiring from '/images/aboutUs/hiring.png'
import { Courses } from './courses';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { GoDotFill } from "react-icons/go"
import { Courseneaxtian } from './Coursenextian';
import tree from '/images/offers/tree.png'
import allplan from '/images/plan_zero/allplan.png'
import PlanModel from './PlanModel';
import { useState } from 'react'
import DoubtModel from './DoubtModel';


const PlanC = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedFaculty, setSelectedFaculty] = useState({});

    const openModal = () => {
        setSelectedFaculty();
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <section className="planzero_section ">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".button-prev-slide",
                        prevEl: ".button-next-slide",
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    modules={[Navigation, Pagination, Autoplay]}
                >
                    <SwiperSlide>
                        <div className="plan_zero_img">
                            <img src={planc} alt="" />
                            {/* <div className="container">
                                <div className="planzero_slider_title">
                                    <h1>Plan C+<br />(Free Pack 3.0)</h1>
                                    <p>Explore & Analyze the Free pack to make the right choice!</p>
                                    <div className="plan_title_btn" onClick={() => openModal()}>
                                        <button>Know More</button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="plan_zero_img">
                            <img src={planc} alt="" />
                            {/* <div className="container">
                                <div className="planzero_slider_title">
                                    <h1>Plan Zero<br /> (Free Pack 3.0)</h1>
                                    <p>Explore & Analyze the Free pack to make the right choice!</p>
                                    <div className="plan_title_btn" onClick={() => openModal()}>
                                        <button>Know More</button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </SwiperSlide>
                </Swiper>

                {/* Modal Component */}
                <PlanModel
                    isOpen={modalOpen}
                    onClose={closeModal}
                    person={selectedFaculty}
                />
            </section>

            <section className="planzero_video_section">
                <div className="container">
                    <div className="video_title">
                        <h3>Know All About Plan C+ Mastermind Pack</h3>
                        <div className="video_part">
                            <ReactPlayer width='100%' height='70vh' controls url='https://www.youtube.com/watch?v=A5gnmnftU8U&t=1s' />
                        </div>
                    </div>
                </div>
            </section>

            <section className="questions_section">
                <div className="container">
                    <div className="question_parent">
                        <div className="question_left">
                            <img src={question} alt="" />
                            <div className="question_head_para">
                                <h2 className='question_head'>#Your Success is Our Motto</h2>
                            </div>
                        </div>

                        <div className="question_right">
                            <div className="question_right_title">
                                <div className="icon_zero_img">
                                    <img src={icon1} alt="" />
                                </div>
                                <div className="title_zero">
                                    <h4>New Batch Start</h4>
                                    <p>Foundation, Intermediate & Revision Batch to crack NORCET Prelims & Mains</p>
                                </div>
                            </div>
                            <div className="question_right_title">
                                <div className="icon_zero_img">
                                    <img src={icon1} alt="" />
                                </div>
                                <div className="title_zero">
                                    <h4>Videos Lectures</h4>
                                    <p>Get recorded video lectures by the Masterminds (Top Educators of India)</p>
                                </div>
                            </div>
                            <div className="question_right_title">
                                <div className="icon_zero_img">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="title_zero">
                                    <h4>Hand Writing & Revision Notes</h4>
                                    <p>Aim for NORCET – Learn from the Masters</p>
                                </div>
                            </div>
                            <div className="question_right_title">
                                <div className="icon_zero_img">
                                    <img src={icon3} alt="" />
                                </div>
                                <div className="title_zero">
                                    <h4>Updated Question Bank</h4>
                                    <p>Aim for NORCET – Learn from the Masters</p>
                                </div>
                            </div>
                            <div className="question_right_title">
                                <div className="icon_zero_img">
                                    <img src={icon4} alt="" />
                                </div>
                                <div className="title_zero">
                                    <h4>Subject Assessment Test</h4>
                                    <p>Pre & Post Subject Assessment Test, Topic Assessment & National NORCET Prelims & Mains Test.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="master_slider">
                <div className='container mm_container'>
                    <h3>Receive Step- By- Step Guidance from our Great Team</h3>
                    <div className="master_head_2">
                        <div className="master_two_part_2">
                            <p>Our Teaching Experts are here to guide you at every step of the preparation, enabling you to run the course well and crack the entrance exam.</p>
                        </div>
                        <div className="master_btn_2">
                            <button className='master_button-2'>See All</button>
                        </div>
                    </div>
                    <div className="master_slider_main">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            navigation={{
                                nextEl: ".button-prev-slide",
                                prevEl: ".button-next-slide",
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay, Navigation,]}
                            className="mySwiper"
                            breakpoints={{
                                // When window width is >= 768px
                                300: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                450: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                // When window width is >= 768px
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                // When window width is >= 1024px
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {Courses.map((item) => <SwiperSlide key={item.id}>
                                <div className='mastermind_card'>
                                    <div className="mastermind_img">
                                        <img src={item.img} alt="" />
                                        <div className="overlay">
                                            <div className="content">
                                                <p>Team</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mastermind_title">
                                        <h4>{item.title}</h4>
                                        <p>{item.desgination}</p>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                            <div className="master_button2">
                                <div className="button-prev-slide">
                                    <IoIosArrowForward />
                                </div>
                                <div className="button-next-slide">
                                    <IoIosArrowBack />
                                </div>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </section>

            <section className="salient_section">
                <div className="container">
                    <div className="salient_title">
                        <h3>Salient Features</h3>
                    </div>
                    <div className="salient_parent">
                        <div className="salient_child">
                            <div className="salient_img">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="salient_title">
                                <h5>PREPARE</h5>
                                <p>Watch & learn from the Masterminds (Guided Study & Study Material)</p>
                            </div>
                        </div>
                        <div className="salient_child">
                            <div className="salient_img">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="salient_title">
                                <h5>PRACTICE</h5>
                                <p>Basic, Intermediate and Advanced level Practice
                                    Tests covering clinical/NCLEX/Skill Based Questions etc</p>
                            </div>
                        </div>
                        <div className="salient_child">
                            <div className="salient_img">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="salient_title">
                                <h5>REVISE</h5>
                                <p>Revise high yield topics with regular Live Sessions & FastTrack Classes</p>
                            </div>
                        </div>
                        <div className="salient_child">
                            <div className="salient_img">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="salient_title">
                                <h5>GUIDANCE</h5>
                                <p>Clear all your Scientific Doubts through
                                    Live Doubt Sessions by Mastermind Faculties</p>
                            </div>
                        </div>
                        {/* <div className="salient_child">
                            <div className="salient_img">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="salient_title">
                                <h5>when</h5>
                                <p>Glimpses of the content from Plan C, B, and A</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <section className="plan_tab_section">
                <div className="container">
                    <div className="plan_button_section_parent">
                        <div className="plan_tab_button_left">
                            <div className="plan_tab_img_left">
                                <h1>Know All About Plan C+  (Mastermind Pack)</h1>
                                <p>Watch, Learn & Succeed</p>
                                <div className="all_plan_tree">
                                    <img src={tree} alt="" className='tree_plan' />
                                    <img src={allplan} alt="" />
                                </div>
                            </div>
                            <div className="plan_tab_button_right">
                                <div className="plan_tab_button tab_button_01">
                                    <button
                                        className={`tab ${activeTab === 1 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(1)}
                                    >Plan C+ (6 Months) ₹16,999  |  ₹13,999</button>
                                </div>
                                <div className="plan_tab_button tab_button_02">
                                    <button
                                        className={`tab ${activeTab === 2 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(2)}
                                    >Plan C+ (12 Months) ₹16,999  |  ₹13,999</button>
                                </div>
                                <div className="plan_tab_button tab_button_03">
                                    <button
                                        className={`tab ${activeTab === 3 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(3)}
                                    >Plan C+ (24 Months) ₹16,999  |  ₹13,999</button>
                                </div>
                            </div>
                        </div>
                        <div className="plan_tab_button_right">
                            {activeTab === 1 &&
                                <div className="plan_choose_right">
                                    <div className="plan_content_title">
                                        <h3>Plan C+ (6 Months)  ₹16,999  |  ₹13,999</h3>
                                    </div>
                                    <div className="plan_lectures_content">
                                        <p><span><GoDotFill /></span>1700+ hrs of Video Lectures (Hinglish/English)</p>
                                        <p><span><GoDotFill /></span>100+ Hybrid Live Teaching Classes/Doubt Session</p>
                                        <p><span><GoDotFill /></span>0k+ Qs in Review/Practice Mode</p>
                                        <p><span><GoDotFill /></span>150+ System wise/Subject wise/Topic wise Tests</p>
                                        <p><span><GoDotFill /></span>10+ Review classes by Batch mentor</p>
                                        <p><span><GoDotFill /></span>100+ Previous Year Papers</p>
                                        <p><span><GoDotFill /></span>30+ Hours of Podcast</p>
                                        <p><span><GoDotFill /></span>1500+ High-Yielding Flashcards/E-notes</p>
                                        <p><span><GoDotFill /></span>1000+ IBQs/VBQs</p>
                                        <p><span><GoDotFill /></span>Mentor Support/Live Chat</p>
                                    </div>
                                </div>
                            }
                            {activeTab === 2 &&
                                <div className="plan_choose_right">
                                    <div className="plan_content_title">
                                        <h3>Plan C+ (12 Months)  ₹16,999  |  ₹13,999</h3>
                                    </div>
                                    <div className="plan_lectures_content">
                                        <p><span><GoDotFill /></span>1700+ hrs of Video Lectures (Hinglish/English)</p>
                                        <p><span><GoDotFill /></span>100+ Hybrid Live Teaching Classes/Doubt Session</p>
                                        <p><span><GoDotFill /></span>0k+ Qs in Review/Practice Mode</p>
                                        <p><span><GoDotFill /></span>150+ System wise/Subject wise/Topic wise Tests</p>
                                        <p><span><GoDotFill /></span>10+ Review classes by Batch mentor</p>
                                        <p><span><GoDotFill /></span>100+ Previous Year Papers</p>
                                        <p><span><GoDotFill /></span>30+ Hours of Podcast</p>
                                        <p><span><GoDotFill /></span>1500+ High-Yielding Flashcards/E-notes</p>
                                        <p><span><GoDotFill /></span>1000+ IBQs/VBQs</p>
                                        <p><span><GoDotFill /></span>Mentor Support/Live Chat</p>
                                    </div>
                                </div>
                            }
                            {activeTab === 3 &&
                                <div className="plan_choose_right">
                                    <div className="plan_content_title">
                                        <h3>Plan C+ (24 Months)  ₹16,999  |  ₹13,999</h3>
                                    </div>
                                    <div className="plan_lectures_content">
                                        <p><span><GoDotFill /></span>1700+ hrs of Video Lectures (Hinglish/English)</p>
                                        <p><span><GoDotFill /></span>100+ Hybrid Live Teaching Classes/Doubt Session</p>
                                        <p><span><GoDotFill /></span>0k+ Qs in Review/Practice Mode</p>
                                        <p><span><GoDotFill /></span>150+ System wise/Subject wise/Topic wise Tests</p>
                                        <p><span><GoDotFill /></span>10+ Review classes by Batch mentor</p>
                                        <p><span><GoDotFill /></span>100+ Previous Year Papers</p>
                                        <p><span><GoDotFill /></span>30+ Hours of Podcast</p>
                                        <p><span><GoDotFill /></span>1500+ High-Yielding Flashcards/E-notes</p>
                                        <p><span><GoDotFill /></span>1000+ IBQs/VBQs</p>
                                        <p><span><GoDotFill /></span>Mentor Support/Live Chat</p>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section className="refer_section">
                <div className="container">
                    <div className="refer_sub_title">
                        <h3>You Can Also Refer These Courses</h3>
                    </div>
                    <div className="refer_card_parent">
                        <div className="refer_child_card">
                            <div className="refer_img">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="refer_title">
                                <h5>Plan QB (Question Bank)</h5>
                                <p>The One-In-All, All-In-One Pack to help you become the Master of all Subjects!</p>
                                <div className="refer_btn">
                                    <button>Know More</button>
                                </div>
                            </div>
                        </div>
                        <div className="refer_child_card">
                            <div className="refer_img">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="refer_title">
                                <h5>Plan MLB Lite (Crash Course)</h5>
                                <p>The Mastermind Live Batch Lite (Live Fastrack Classes + Super 60 Test Series)</p>
                                <div className="refer_btn">
                                    <button>Know More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="doubt_section">
                <div className="container">
                    <div className="parent_doubt">
                        <div className="left_img_doubt">
                            <img src={hiring} alt="" />
                        </div>
                        <div className="center_content_button">
                            <div className="center_doubt_title">
                                <p className='doubt_sub_title'>Still have doubts?</p>
                                <p>Read FAQs</p>
                            </div>
                            <div className="center_btn" onClick={() => openModal()}>
                                <button>Know More</button>
                            </div>
                        </div>
                        <div className="right_img_doubt">
                            <img src={apply} alt="" />
                        </div>
                    </div>
                    {/* Modal Component */}
                    <DoubtModel
                        isOpen={modalOpen}
                        onClose={closeModal}
                        person={selectedFaculty}
                    />
                </div>
            </section>

            <section className="ournextian_section">
                <div className="container">
                    <div className="nextian_title">
                        <div className="neaxtian_heading">
                            <h3>What our learners say about the Course</h3>
                        </div>
                        <div className="nextian_btn">
                            <button>See All</button>
                        </div>
                    </div>

                    <div className="ournextian_section_slider">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            navigation={{
                                nextEl: ".button-prev-slide",
                                prevEl: ".button-next-slide",
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false
                            }}
                            loop={true}
                            modules={[Navigation, Autoplay,]}
                            className="mySwiper"
                            breakpoints={{
                                // When window width is >= 768px
                                300: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                // When window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                // When window width is >= 1024px
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                            }}
                        >
                            {Courseneaxtian.map((item) => <SwiperSlide key={item.id}>
                                <div className="ournextian_card">
                                    <div className="ournextian_img">
                                        <img src={item.img} alt={item.title} />
                                    </div>
                                    <div className="ournextian_title">
                                        <h4>{item.name}</h4>
                                        <span>{item.rank}</span>
                                        <p>{item.desc}</p>
                                    </div>
                                </div>
                            </SwiperSlide>)}
                            <div className="ournextian_button">
                                <div className="button-prev-slide">
                                    <IoIosArrowForward />
                                </div>
                                <div className="button-next-slide">
                                    <IoIosArrowBack />
                                </div>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlanC
