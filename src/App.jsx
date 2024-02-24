import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
const PlanMLBPro = lazy(() => import("./pages/PlanMLBPRO/PlanMLBPro"));
const InnerBlogs = lazy(() => import("./pages/InnerBlogs/InnerBlogs"));
const AllFaq = lazy(() => import("./pages/AllFaq/AllFaq"));
const PlanMLBLite = lazy(() => import("./pages/PlanMLBLite/PlanMLBLite"));
const MastermindSeeAll = lazy(() =>
  import("./pages/MastermindSeeAll/MastermindSeeAll")
);
const NextiansAll = lazy(() => import("./pages/NextiansAll/NextiansAll"));
const OurStories = lazy(() => import("./pages/OurStories/OurStories"));
const DynamicAccordion = lazy(() =>
  import("./pages/Accordian/DynamicAccordion")
);
const Blogs = lazy(() => import("./pages/Blogs/Blogs"));
const NewsRoom = lazy(() => import("./pages/NewsRoom/NewsRoom"));
const AiimsNorcet = lazy(() => import("./pages/NNLAllExams/AiimsNorcet"));
const Pgimer = lazy(() => import("./pages/NNLAllExams/Pgimer"));
const Esic = lazy(() => import("./pages/NNLAllExams/Esic"));
const RRB = lazy(() => import("./pages/NNLAllExams/RRB"));
const JIPMER = lazy(() => import("./pages/NNLAllExams/JIPMER"));
const CHO = lazy(() => import("./pages/NNLAllExams/CHO"));
const KERALA = lazy(() => import("./pages/NNLAllExams/KERALA"));
const NIMHANS = lazy(() => import("./pages/NNLAllExams/NIMHANS"));
const PageNotFound = lazy(() =>
  import("./components/PageNotFound/PageNotFound")
);
const AllExams = lazy(() => import("./pages/AllExmas/AllExams"));
const MainCourse = lazy(() => import("./pages/MainCourse/MainCourse"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const ScrollTop = lazy(() => import("./pages/ScrollTop/ScrollTop"));
const Products = lazy(() => import("./pages/Products"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About/About"));
const Hero = lazy(() => import("./pages/Header/Hero"));
const Footer = lazy(() => import("./pages/Footer/Footer"));
const Manubar = lazy(() => import("./components/Navbar/Manubar"));
const PlanZero = lazy(() => import("./pages/PlanZero/PlanZero"));
const PlanA = lazy(() => import("./pages/PlanA/PlanA"));
const PlanB = lazy(() => import("./pages/PlanB/PlanB"));
const PlanCPlus = lazy(() => import("./pages/PlanC+/PlanCPlus"));
const PlanMSC = lazy(() => import("./pages/PlanMSC/PlanMSC"));
const PlanUG = lazy(() => import("./pages/PlanUG/PlanUG"));
const PlanTH = lazy(() => import("./pages/PlanTH/PlanTH"));
const PlanQB = lazy(() => import("./pages/PlanQB/PlanQB"));
const PlanNNLVSL = lazy(() => import("./pages/PlanNNLVSL/PlanNNLVSL"));
//const MainExam = lazy(() => import("./pages/MainExam/MainExam"));
const Offers = lazy(() => import("./pages/Offers/Offers"));

const App = () => {
  const [showLazyTime, setShowLazyTime] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLazyTime(true);
    }, []);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      <Suspense
        fallback={
          <div style={{ margin: "350px", textAlign: "center" }}>
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div>
        }
      >
        {showLazyTime && <Manubar />}
        {showLazyTime && <ScrollToTop />}
        <Routes>
          <Route path="*" element={showLazyTime && <PageNotFound />} />
          <Route path="/" element={showLazyTime && <Hero />} />
          <Route path="/about" element={showLazyTime && <About />} />
          <Route path="/contact" element={showLazyTime && <Contact />} />
          <Route path="/service" element={showLazyTime && <Services />} />
          <Route path="/products" element={showLazyTime && <Products />} />
          <Route path="/plan-zero" element={showLazyTime && <PlanZero />} />
          <Route path="/plan-a" element={showLazyTime && <PlanA />} />
          <Route path="/plan-b" element={showLazyTime && <PlanB />} />
          <Route path="/plan-c-plus" element={showLazyTime && <PlanCPlus />} />
          <Route path="/plan-msc" element={showLazyTime && <PlanMSC />} />
          <Route path="/plan-ug" element={showLazyTime && <PlanUG />} />
          <Route path="/plan-th" element={showLazyTime && <PlanTH />} />
          <Route path="/plan-qb" element={showLazyTime && <PlanQB />} />
          <Route path="/plan-np" element={showLazyTime && <PlanNNLVSL />} />
          <Route
            path="/plan-mlb-lite"
            element={showLazyTime && <PlanMLBLite />}
          />
          <Route
            path="/plan-mlb-pro"
            element={showLazyTime && <PlanMLBPro />}
          />
          {/* <Route path="/testing" element={showLazyTime && <MainExam />} /> */}

          <Route path="/offers" element={showLazyTime && <Offers />} />
          <Route path="/newsroom" element={showLazyTime && <NewsRoom />} />
          <Route path="/blogs" element={showLazyTime && <Blogs />} />
          <Route
            path="/blogs/innerblogs"
            element={showLazyTime && <InnerBlogs />}
          />
          <Route
            path="/aiims-norcet"
            element={showLazyTime && <AiimsNorcet />}
          />
          <Route path="/pgimer" element={showLazyTime && <Pgimer />} />
          <Route path="/esic" element={showLazyTime && <Esic />} />
          <Route path="/rrb" element={showLazyTime && <RRB />} />
          <Route path="/jipmer" element={showLazyTime && <JIPMER />} />
          <Route path="/cho" element={showLazyTime && <CHO />} />
          <Route path="/kerala-psc-dhs" element={showLazyTime && <KERALA />} />
          <Route path="/nimhans" element={showLazyTime && <NIMHANS />} />
          <Route path="/all-exams" element={showLazyTime && <AllExams />} />

          <Route path="/all-courses" element={showLazyTime && <MainCourse />} />
          <Route path="/faq" element={showLazyTime && <DynamicAccordion />} />
          <Route path="/all-faq" element={showLazyTime && <AllFaq />} />
          <Route path="/stories" element={showLazyTime && <OurStories />} />
          <Route
            path="/see-all"
            element={showLazyTime && <MastermindSeeAll />}
          />
          <Route
            path="/see-all-nextians"
            element={showLazyTime && <NextiansAll />}
          />
        </Routes>
      </Suspense>
      {showLazyTime && <ScrollTop />}
      <Footer />
    </Router>
  );
};

export default App;
