import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
// import Layout from "./pages/Layout/Layout";
import nnl_loaders from "/images/nnl_loaders.gif";
import "./yogaImage.css";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import SocialIcons from "./pages/SocialIcons/SocialIcons";
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";
import SuccessStories from "./pages/SuccessStories/SuccessStories";
import RandomVideo from "./pages/RandomVideo/RandomVideo";
const Career = lazy(() => import("./pages/Career/Career"));
const NewsRoomFlip = lazy(() => import("./pages/NewsRoomFlip/NewsRoomFlip"));
const HeroBanner = lazy(() => import("./WebinarPages/Banner/HeroBanner"));
const ThankYou = lazy(() => import("./WebinarPages/ThankYou/ThankYou"));
const Policy = lazy(() => import("./pages/Policy/Policy"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));

const NextiansAll = lazy(() => import("./pages/NextiansAll/NextiansAll"));

const PageNotFound = lazy(() =>
  import("./components/PageNotFound/PageNotFound")
);

const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const ScrollTop = lazy(() => import("./pages/ScrollTop/ScrollTop"));

const About = lazy(() => import("./pages/About/About"));
const Hero = lazy(() => import("./pages/Header/Hero"));
const Footer = lazy(() => import("./pages/Footer/Footer"));
const Manubar = lazy(() => import("./components/Navbar/Manubar"));

const Thanks = lazy(() => import("./pages/ThankYou/Thanks"));

const Offers = lazy(() => import("./pages/Offers/Offers"));
const TRACKING_ID = "G-GNX0JKPBW4";
ReactGA.initialize(TRACKING_ID);

const TrackPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

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
          <div
            style={{ alignItems: "center", display: "flex", height: "100vh" }}
          >
            <img
              src={nnl_loaders}
              alt="Loading..."
              style={{
                height: "180px",
                width: "80px",
              }}
            />
          </div>
        }
      >
        <Helmet>
          <meta
            name="description"
            content="Nursing Next Live, AIIMS NORCET Entrance Exam Preparation The most trusted App for AIIMS NORCET, Community Health, Staff Nurse Officer Online Test Series"
          />
        </Helmet>

        <TrackPageViews />
        {showLazyTime && <Manubar />}
        {showLazyTime && <ScrollToTop />}

        <Routes>
          <Route
            path="/nnl-webinar-series"
            element={showLazyTime && <HeroBanner />}
          />
          <Route
            path="/thank-you/:registrationStatus"
            element={showLazyTime && <ThankYou />}
          />
          <Route path="/thank-you" element={showLazyTime && <Thanks />} />
          <Route
            path="/payment-success"
            element={showLazyTime && <PaymentSuccess />}
          />

          <Route path="*" element={showLazyTime && <PageNotFound />} />
          <Route path="/" element={showLazyTime && <Hero />} />

          <Route path="/about" element={showLazyTime && <About />} />

          <Route path="/career-page" element={showLazyTime && <Career />} />

          <Route path="/video-play" element={showLazyTime && <RandomVideo />} />

          <Route path="/offers" element={showLazyTime && <Offers />} />
          <Route path="/newsroom" element={showLazyTime && <NewsRoomFlip />} />

          <Route element={showLazyTime && <SocialIcons />} />
          <Route path="/stories" element={showLazyTime && <SuccessStories />} />
          <Route path="/contactus" element={showLazyTime && <ContactUs />} />
          <Route path="/policy" element={showLazyTime && <Policy />} />

          <Route
            path="/see-all-nextians"
            element={showLazyTime && <NextiansAll />}
          />
        </Routes>
      </Suspense>
      {showLazyTime && <SocialIcons />}
      {showLazyTime && <ScrollTop />}
      <Footer />
    </Router>
  );
};

export default App;
