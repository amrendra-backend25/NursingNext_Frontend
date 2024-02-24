import "./InnerBlogs.css";
import latestBanner from "/images/latestblogs/rajasthan-1.png";
import leftBanner01 from "/images/latestblogs/left_banner_1.jpg";
import leftBanner02 from "/images/latestblogs/left_banner_2.jpg";
import leftBanner03 from "/images/latestblogs/left_banner_3.jpg";
import { IoSearchSharp } from "react-icons/io5";
import similar1 from "/images/latestblogs/left_banner_3.jpg";
import { Paths } from "../../config/configAPI";
import axios from "axios";
import { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
const InnerBlogs = () => {
  const [accordionData, setAccordionData] = useState([]);

  const [openAccordion, setOpenAccordion] = useState(null);
  const [setIsError] = useState("");

  const accordionFAQ = async () => {
    try {
      const response = await Paths.EndpointsURL.HomeFAQ;
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

  const showBlogsBanner = async () => {
    try {
      const response = await Paths.EndpointsURL.OffersBanner;
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
        const [faqData] = await Promise.all([accordionFAQ()]);
        setAccordionData(faqData);
      } catch (error) {
        setIsError(error.msg);
      }
    };

    fetchData();
  }, []);

  const handleAccordionClick = (index) => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className="recommended_section">
        <div className="container">
          <div className="recommended_parent">
            <div className="recommended_left">
              <div className="latest_blog_section">
                <h2 className="latest_heading">
                  Rajasthan CHO Exam 2024 Date, Syllabus, Exam pattern, Admit
                  Card Download{" "}
                </h2>
                <div className="latest_mask">
                  <img
                    className="latest_img"
                    src={latestBanner}
                    alt="IntroImg"
                  />
                </div>

                <div className="latest_blogs_para">
                  <p>
                    Rajasthan CHO Exam 2024 will be conducted on March 3, 2024
                    to recruit Community Health Officers for the state of
                    Rajasthan. This article discusses the Date, Syllabus, and
                    Exam pattern for this exam.
                  </p>
                </div>
              </div>

              <div className="recomended_title">
                <h2>Recommended Batches</h2>
              </div>
              <div className="recommended_link">
                <ul>
                  <li>
                    <a href="">Plan UG Batches</a>
                  </li>
                  <li>
                    <a href="">Plan C + Batches</a>
                  </li>
                  <li>
                    <a href="">Plan A Batches</a>
                  </li>
                  <li>
                    <a href="">Plan MSc/SNO 3.0 Batches</a>
                  </li>
                  <li>
                    <a href="">Plan Zero Free Batches</a>
                  </li>
                </ul>
              </div>
              <div className="recommended_content">
                <p>
                  <span>Rajasthan CHO Exam 2024:</span> The Rajasthan Staff
                  Selection Board released a notification for the recruitment of
                  3531 vacant positions for the post of Community Health Officer
                  (CHO), with 3071 posts designated for non-TSP and 460 for TSP
                  through the Rajasthan CHO exam 2024. As per the official
                  notification, the recruitment for these positions is limited
                  to one year or the projected duration. Selection of candidates
                  who have applied will be based on a written examination
                  consisting of 100 questions, with an allotted time of 1 hour
                  and 30 minutes for the exam.
                </p>
              </div>
              <div className="recommended_exam">
                <h3>Rajasthan CHO Exam 2024 </h3>
                <p>
                  The Rajasthan CHO exam is conducted every year by the
                  Department of Medical, Health & Family Welfare (DMHFW) to
                  recruit Community Health Officers. This year, the Rajasthan
                  CHO exam will be conducted on March 3, 2024, and the admit
                  card will be released on February 13, 2024.
                </p>
              </div>
              <div className="recommended_overview">
                <h3>Rajasthan CHO Exam 2024 Overview</h3>
                <p>
                  The Rajasthan CHO exam is conducted for the role of Community
                  Health Officers. The selection process will consist of a
                  written exam and an interview. The chart given below discusses
                  the entire overview of the Rajasthan CHO exam 2024.
                </p>
                <div className="recommended_table">
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th colspan="2">Rajasthan CHO Exam 2024 Overview</th>
                      {/* <th>Age</th> */}
                    </tr>
                    <tr>
                      <td>Event</td>
                      <td>NHM Rajasthan CHO Recruitment</td>
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td>Nursing Exam</td>
                    </tr>
                    <tr>
                      <td>Name of the Exam Conducting Body</td>
                      <td>
                        Department of Medical, Health & Family Welfare (DMHFW)
                      </td>
                    </tr>
                    <tr>
                      <td>Location of Work</td>
                      <td>Rajasthan</td>
                    </tr>
                    <tr>
                      <td>Job Role</td>
                      <td>Community Health Officers </td>
                    </tr>
                    <tr>
                      <td>Admit Card Release Date </td>
                      <td>February 13, 2024</td>
                    </tr>
                    <tr>
                      <td>Exam Date </td>
                      <td>March 3, 2024</td>
                    </tr>
                    <tr>
                      <td>Eligibility</td>
                      <td>
                        B.Sc. in Community Health GNM/B.Sc in Nursing An
                        Ayurveda Practitioner degree (BAMS)
                      </td>
                    </tr>
                    <tr>
                      <td>Age Limit</td>
                      <td>21 to 40 years</td>
                    </tr>
                    <tr>
                      <td>New Vacancies</td>
                      <td>3531</td>
                    </tr>
                    <tr>
                      <td>Selection Process</td>
                      <td>Written Exam and Interview</td>
                    </tr>
                    <tr>
                      <td>Official Website</td>
                      <td>http://www.rajswasthya.nic.in</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="recommended_overview">
                <h3>Rajasthan CHO Exam Date 2024</h3>
                <p>
                  The Rajasthan CHO exam will be conducted on March 3, 2024. The
                  admit card is scheduled to be released on February 13, 2024.
                  More information regarding additional events will soon be
                  released on the official website..
                </p>
                <div className="recommended_table">
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th colspan="2">Rajasthan CHO Exam Date 2024</th>
                      {/* <th>Age</th> */}
                    </tr>
                    <tr>
                      <td>Events</td>
                      <td>Dates</td>
                    </tr>
                    <tr>
                      <td>Admit Card Release Date</td>
                      <td>February 13, 2024</td>
                    </tr>
                    <tr>
                      <td>Exam Date</td>
                      <td>March 3, 2024</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="recommended_overview">
                <h3>Rajasthan CHO Syllabus 2024</h3>
                <p>
                  The Rajasthan CHO syllabus comprises 13 subjects which are-
                </p>
                <div className="recommended_list">
                  <ul className="recommended_awarness">
                    <li>General Awareness</li>
                    <li>Basics of Human Body</li>
                    <li>Basic Concepts of Public Health</li>
                    <li>Child Health</li>
                    <li>Family Planning and Adolescent Health</li>
                    <li>Maternal Health</li>
                    <li>Communicable & Non-Communicable Diseases</li>
                    <li>Nutrition</li>
                    <li>Skills Based</li>
                    <li>General Medicine and Medical Emergencies</li>
                    <li>General Pharmacology</li>
                    <li>
                      General Surgery, Trauma and Burns, ENT & Ophthalmology
                    </li>
                    <li>Miscellaneous subjects</li>
                  </ul>
                </div>
                <div className="recommended_table">
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th colspan="2">NHM Rajasthan CHO Syllabus 2024</th>
                      {/* <th>Age</th> */}
                    </tr>
                    <tr>
                      <td>Subjects</td>
                      <td>Topics</td>
                    </tr>
                    <tr>
                      <td>General Awareness</td>
                      <td>
                        Current events happening nationally and internationally,
                        latest developments in the relevant field, etc
                      </td>
                    </tr>
                    <tr>
                      <td>Basics of Human Body</td>
                      <td>
                        Human body parts and their description, functioning
                      </td>
                    </tr>
                    <tr>
                      <td>Basic Concepts of Public Health</td>
                      <td>
                        Concepts of Community Health Health Care Planning and
                        Organization of Health Care at Various Levels.
                        Environmental Health and Sanitation. Introduction to
                        Epidemiology, Epidemiological Approaches and Processes.
                        Demography, Surveillance and Interpretation of Data.
                        Biomedical Waste Management and Infection Control.
                      </td>
                    </tr>
                    <tr>
                      <td>Child Health</td>
                      <td>
                        Essential Care of New-borns at Birth. Management of
                        Common Neonatal and Child Health Problems. Integrated
                        Management of “Neonatal and Childhood Illness.
                        Introduction to Rastriya Bal Swasthya Karyakram.
                        Universal Immunization Programme (UIP).
                      </td>
                    </tr>
                    <tr>
                      <td>Family Planning and Adolescent Health</td>
                      <td>
                        Gynaecological Conditions. Family Planning Methods,
                        Spacing Techniques and Counselling .Medical Abortions
                        and MTP Act. Counselling in Reproductive and Sexual
                        Health including problems of Adolescents. Management of
                        Teenage Pregnancies.
                      </td>
                    </tr>
                    <tr>
                      <td>Maternal Health</td>
                      <td>
                        Introduction to RMNCH+A Programme Antenatal Care
                        Intranasal Care Early Identification, Management and
                        Referral of Complications Postpartum Care
                      </td>
                    </tr>
                    <tr>
                      <td>Communicable & Non-Communicable Diseases</td>
                      <td>
                        Epidemiology of Specific Communicable Diseases
                        Communicable Diseases- Vector Borne Diseases
                        Communicable Diseases- Infectious Diseases Communicable
                        Diseases- Zoonotic Diseases Epidemiology of Specific
                        Non-Communicable Diseases on-Communicable Diseases
                        -1Non-Communicable Diseases -2Occupational Diseases
                        Mental Health and Substance Abuse Disorders Elderly Care
                      </td>
                    </tr>
                    <tr>
                      <td>Nutrition</td>
                      <td>
                        Introduction to Nutrition and Nutritional Assessment
                        Nutrition during Pregnancy and Lactation Nutrition for
                        Infants, Child, Adolescent and Elderly Nutritional
                        Deficiency Disorders Food Borne Diseases, Food Safety
                      </td>
                    </tr>
                    <tr>
                      <td>Skills Based</td>
                      <td>
                        Public Health Skills General Skills and Laboratory
                        Skills Skills for Management of Common Conditions and
                        Emergencies Maternal Health Skills Reproductive and
                        Adolescent Health Skills Newburn and Child Health Skills
                      </td>
                    </tr>
                    <tr>
                      <td>General Medicine and Medical Emergencies</td>
                      <td>
                        Common Conditions – Gastrointestinal System Common
                        Conditions- Respiratory System Common Conditions- Heart,
                        Urinary System and Blood Disorders Common Conditions-
                        Eye, Ear, Nose and Throat First Aid in Common Emergency
                        Conditions Disaster Management
                      </td>
                    </tr>
                    <tr>
                      <td>General Pharmacology</td>
                      <td>Essential Drugs</td>
                    </tr>
                    <tr>
                      <td>
                        General Surgery, Trauma and Burns, ENT & Ophthalmology
                      </td>
                      <td>
                        Common Surgical Conditions- 1Common Surgical Conditions-
                        2Congenital Malformations Screening of Common Cancers
                      </td>
                    </tr>
                    <tr>
                      <td>Miscellaneous</td>
                      <td>
                        Behaviour Change Communication Skills and other Soft
                        Skills Work Management and Administration Leadership,
                        Supervision and Monitoring Health Management Information
                        System Financial Management, Account and Computing
                        Records and Reports
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="recommended_overview">
                <h3>Rajasthan CHO Exam Pattern 2024</h3>
                <p>
                  The Rajasthan CHO exam provides students with 100 questions in
                  total which can be asked from either General Awareness or CHO
                  Concerned Subjects. All of these questions carry 4 marks each
                  making 400 marks in total.
                </p>
                <div className="recommended_table">
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th colspan="2">Rajasthan CHO Exam Pattern 2024</th>
                      {/* <th>Age</th> */}
                    </tr>
                    <tr>
                      <th>Subject</th>
                      <th>No. of Questions</th>
                      <th>Marks Per Question</th>
                    </tr>
                    <tr>
                      <td>General Awareness</td>
                      <td rowSpan={2}>100</td>
                      <td rowSpan={2}>4</td>
                    </tr>
                    <tr>
                      <td>CHO Concerned Subjects</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>100</td>
                      <td>400</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="recommended_overview">
                <h3>Rajasthan CHO Exam Cut-off Marks 2024</h3>
                <p>
                  The Rajasthan CHO exam cutoff mark is 73-78 for the general
                  candidates, 68-73 for the OBC candidates, 62-67 for SC and
                  55-60 for the ST candidates.
                </p>
                <div className="recommended_table">
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th colspan="2">Rajasthan CHO Exam Cut-off Marks 2024</th>
                      {/* <th>Age</th> */}
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td>Cut-off Marks</td>
                    </tr>
                    <tr>
                      <td>General</td>
                      <td>73-78</td>
                    </tr>
                    <tr>
                      <td>OBC</td>
                      <td>68-73</td>
                    </tr>
                    <tr>
                      <td>SC</td>
                      <td>62-67</td>
                    </tr>
                    <tr>
                      <td>ST</td>
                      <td>55-60</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="recommended_overview">
                <h3>Rajasthan CHO Exam 2024 Eligibility Criteria</h3>
                <p>
                  The Rajasthan CHO exam eligibility criteria states that the
                  candidate must be between 21 to 40 years old and should have a
                  B.Sc. Nursing or GNM degree. On top of that, the candidate
                  must be a resident of the state of Rajasthan.{" "}
                </p>
                <div className="recommended_table">
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th colspan="2">
                        Rajasthan CHO Exam 2024 Eligibility Criteria
                      </th>
                      {/* <th>Age</th> */}
                    </tr>
                    <tr>
                      <td>Aspect</td>
                      <td>Requirement</td>
                    </tr>
                    <tr>
                      <td>Educational Qualification</td>
                      <td>
                        B.Sc. Nursing or GNM degree from a recognised university
                        or institution affiliated to the Indian Nursing Council
                      </td>
                    </tr>
                    <tr>
                      <td>Age Limit</td>
                      <td>
                        21 to 40 years (relaxation for reserved categories as
                        per Rajasthan government norms)
                      </td>
                    </tr>
                    <tr>
                      <td>Domicile Requirement</td>
                      <td>Must be a resident of Rajasthan</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="recommended_overview">
                {/* <h3>Rajasthan CHO Exam 2024 Eligibility Criteria</h3> */}
                <p className="recommended_criteria">
                  In addition to the above-mentioned criteria, there is a scope
                  for age relaxation which is usually 5 years for SC, ST, OBC,
                  MBC, EWS males and 10 years for SC, ST, OBC, MBC, EWS females
                  of Rajasthan.
                </p>
                <div className="recommended_table">
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th colspan="2">
                        Rajasthan CHO Exam 2024 Age Relaxation
                      </th>
                      {/* <th>Age</th> */}
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td>Age Relaxation</td>
                    </tr>
                    <tr>
                      <td>SC, ST, OBC, MBC, EWS Males of Rajasthan</td>
                      <td>5 years</td>
                    </tr>
                    <tr>
                      <td>UR Women</td>
                      <td>5 years</td>
                    </tr>
                    <tr>
                      <td>SC, ST, OBC, MBC, EWS Females of Rajasthan</td>
                      <td>10 years</td>
                    </tr>
                    <tr>
                      <td>ESM </td>
                      <td>Up to 50 years of age</td>
                    </tr>
                    <tr>
                      <td>PWD</td>
                      <td>5 years</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="recommended_overview">
                <h3>Rajasthan CHO Salary 2024</h3>
                <p>
                  The basic salary of a Rajasthan CHO starts from Rs. 25,000 and
                  goes as high as Rs. 45,000. In addition to this, there are
                  different types of incentives and allowances such as House
                  Rent Allowance (HRA), Dearness Allowance (DA), Travel
                  Allowance (TA), Medical Allowance, and Performance-Linked
                  Incentives.
                </p>
                <div className="recommended_table">
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th colspan="2">NHM Rajasthan CHO Salary 2024</th>
                      {/* <th>Age</th> */}
                    </tr>
                    <tr>
                      <td>Component</td>
                      <td>Salary</td>
                    </tr>
                    <tr>
                      <td>Base Salary</td>
                      <td>Rs. 25,000 to Rs. 45,000</td>
                    </tr>
                    <tr>
                      <td>House Rent Allowance (HRA)</td>
                      <td>
                        15% of base salary for urban areas, 10% of base salary
                        for rural areas
                      </td>
                    </tr>
                    <tr>
                      <td>Dearness Allowance (DA)</td>
                      <td>Around 20% of base salary</td>
                    </tr>
                    <tr>
                      <td>Travel Allowance (TA)</td>
                      <td>
                        Reimbursement for travel expenses incurred on official
                        duty
                      </td>
                    </tr>
                    <tr>
                      <td>Medical Allowance</td>
                      <td>
                        Reimbursement for medical expenses incurred by employees
                        and their dependents
                      </td>
                    </tr>
                    <tr>
                      <td>Performance-Linked Incentives</td>
                      <td>Based on performance</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="recommended_overview">
                <h3>Rajasthan CHO Exam 2024 Application Fee</h3>
                <p>
                  The Rajasthan CHO Exam 2024 Application Fee for general
                  candidates is Rs 250, while for SC / ST / OBC/MOBC, it is Rs
                  150. Candidates falling into the BPL category won’t have to
                  pay any application fee.
                </p>
                <div className="recommended_table">
                  <table style={{ width: "100%" }}>
                    <tr>
                      <th colspan="2">
                        Rajasthan CHO Exam 2024 Application Fee
                      </th>
                      {/* <th>Age</th> */}
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td>Fee</td>
                    </tr>
                    <tr>
                      <td>General</td>
                      <td>Rs. 250</td>
                    </tr>
                    <tr>
                      <td>SC / ST / OBC/MOBC</td>
                      <td>Rs. 150</td>
                    </tr>
                    <tr>
                      <td>BPL </td>
                      <td>Nil</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div className="download_card">
                <p className="admit_head">
                  Rajasthan CHO Exam 2024 Admit Card Download
                </p>
                <p className="admit_para">
                  The Rajasthan CHO Admit Card can be downloaded from the
                  official site of the Rajasthan CHO Exam which is
                  rsmssb.rajasthan.gov.in/. The admit card will be released on
                  13 February 2024, and only after that, candidates will be able
                  to download their respective admit cards.
                </p>
              </div>
              <div className="download_card">
                <p className="admit_head">
                  Rajasthan CHO Exam 2024 Admit Card Release 2024
                </p>
                <p className="admit_disc">
                  The release of the Rajasthan Community Health Officer (CHO)
                  Admit Card on February 13, 2024, marks a significant stride
                  towards healthcare empowerment in the state. This pivotal
                  document symbolizes the state’s commitment to bolstering its
                  healthcare system, particularly in rural and underserved
                  areas.
                </p>
                <p className="admit_disc">
                  CHOs play a vital role in extending primary healthcare
                  services to remote communities, thereby enhancing health
                  outcomes and bridging healthcare disparities. The availability
                  of the admit card heralds the onset of the CHO recruitment
                  process, igniting hope and anticipation among numerous
                  aspirants who seek to serve their communities as frontline
                  healthcare providers.
                </p>
                <p className="admit_disc">
                  Prospective candidates can effortlessly download their admit
                  cards from the official website, where essential details like
                  candidate information, exam venue, date, and time, alongside
                  crucial examination instructions, are provided. This
                  transparent and accessible approach underscores the
                  government’s dedication to meritocracy and excellence in
                  healthcare delivery.
                </p>
                <p className="admit_disc">
                  The release of the admit card not only signifies a milestone
                  in the healthcare landscape but also represents an opportunity
                  for deserving individuals to showcase their commitment to
                  public health service. As candidates gear up to embark on this
                  transformative journey, the Rajasthan CHO Admit Card serves as
                  a beacon of hope, promising progress and empowerment in the
                  realm of healthcare across the state.
                </p>
              </div>
              <section className="blog_accordian_section">
                <div className="blog_accordian_title">
                  <h3>Rajasthan CHO Exam 2024 FAQs</h3>
                  <p>
                    Our trail of achievements and recognitions that define our
                    journey.
                  </p>
                </div>
                {accordionData.slice(0, 10).map((item, index) => {
                  const { faqDescription } = item;
                  const sentences = faqDescription.split(". ");
                  return (
                    <>
                      <div key={index} className="blog_accordion-item">
                        <div
                          className={`accordion-header ${
                            openAccordion === index ? "open" : ""
                          }`}
                          onClick={() => handleAccordionClick(index)}
                        >
                          {item.faqTabName}
                          <span className="accordion-icon">
                            {openAccordion === index ? "-" : "+"}
                          </span>
                        </div>
                        {openAccordion === index && (
                          <div className="accordion-content">
                            {sentences.map((sentence, sentenceIndex) => (
                              <div key={sentenceIndex}>
                                <GoDotFill /> {sentence}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </>
                  );
                })}
              </section>
            </div>

            <div className="recommended_right">
              <div className="recommended_box">
                <span>
                  <IoSearchSharp />
                </span>
                <input type="text" placeholder="What are you looking for" />
              </div>
              <div className="recommended_search">
                <p className="common_search">Common Searches</p>
                <ul>
                  <li>
                    <a href="">NEET PG</a>
                  </li>
                  <li>
                    <a href="">Culture</a>
                  </li>
                  <li>
                    <a href="">NEET PG Preparation</a>
                  </li>
                  <li>
                    <a href="">Destinations</a>
                  </li>
                  <li>
                    <a href="">Food</a>
                  </li>
                  <li>
                    <a href="">Travel</a>
                  </li>
                  <li>
                    <a href="">Flight</a>
                  </li>
                </ul>
              </div>
              <div className="left_side_banner">
                <img src={leftBanner01} alt="" />
                <img src={leftBanner02} alt="" />
                <img src={leftBanner03} alt="" />
              </div>
              <div className="inner_blog_right_sub_content">
                <h4>Similar Blogs</h4>
                <div className="similar_blog_parent">
                  <div className="similar_blogs_content">
                    <div className="similar_blogs_img_left">
                      <img src={similar1} alt="" />
                    </div>
                    <div className="similar_blogs_content_right">
                      <p>Nutritious Snacking for a Healthy Mind & Body!</p>
                      <div className="similar_blogs_btn">
                        <button>Know More</button>
                      </div>
                    </div>
                  </div>
                  <div className="similar_blogs_content">
                    <div className="similar_blogs_img_left">
                      <img src={similar1} alt="" />
                    </div>
                    <div className="similar_blogs_content_right">
                      <p>Stressed about your preparations for NORCET 6.0?</p>
                      <div className="similar_blogs_btn">
                        <button>Know More</button>
                      </div>
                    </div>
                  </div>
                  <div className="similar_blogs_content">
                    <div className="similar_blogs_img_left">
                      <img src={similar1} alt="" />
                    </div>
                    <div className="similar_blogs_content_right">
                      <p>Nutritious Snacking for a Healthy Mind & Body!</p>
                      <div className="similar_blogs_btn">
                        <button>Know More</button>
                      </div>
                    </div>
                  </div>
                  <div className="similar_blogs_content">
                    <div className="similar_blogs_img_left">
                      <img src={similar1} alt="" />
                    </div>
                    <div className="similar_blogs_content_right">
                      <p>Nutritious Snacking for a Healthy Mind & Body!</p>
                      <div className="similar_blogs_btn">
                        <button>Know More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="recommended_category">
                <p className="categories_part">Categories </p>
                <ul>
                  <li>
                    <a href="">Covid</a>
                  </li>
                  <li>
                    <a href="">Exams</a>
                  </li>
                  <li>
                    <a href="">Health</a>
                  </li>
                  <li>
                    <a href="">NORCET</a>
                  </li>
                </ul>
              </div>
              <div className="recommended_tags">
                <p className="tags_part">TAGS</p>
                <ul>
                  <li>
                    <a href="">Exams</a>
                  </li>
                  <li>
                    <a href="">Exam Stress</a>
                  </li>
                  <li>
                    <a href="">Exam Tips</a>
                  </li>
                  <li>
                    <a href="">Stress</a>
                  </li>
                  <li>
                    <a href="">Work</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InnerBlogs;
