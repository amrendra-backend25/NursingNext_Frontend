const base = "/jsx";
const baseURL = "http://43.205.148.119:7000/api/v1/";
//const baseURL = "http://localhost:7000/api/v1/";
const baseRoute = "/";
const imageURL = "https://images.com";

export const Paths = {
  Home: base,
  LearningPath: baseRoute + "Learning",
  EndpointsURL: {
    PostTopForm: baseURL + "form",
    HomeNNLCourses: baseURL + "all/courses",
    HomeWhyChoose: baseURL + "all/why/choose",
    HomeMasterMind: baseURL + "all/mastermind",
    VideoSnippts: baseURL + "all/video/snippts",
    HomeNextians: baseURL + "all/nextians",
    HomeCommonTab: baseURL + "all/common/tab",
    HomeShareFeedback: baseURL + "feedback",
    HomeFAQ: baseURL + "all/faq",
    OffersForm: baseURL + "query/form",
    NNLExams: baseURL + "all/exams",
    NNLExamsBanner: baseURL + "all/exams/banner",
    MastermindBanner: baseURL + "all/mastermind/banner",
    HomeBanner: baseURL + "all/home/banner",
    NextiansBanner: baseURL + "all/nextians/banner",
    AboutUsBanner: baseURL + "all/about-us/banner",
    CourseBanner: baseURL + "all/courses/banner",
    StoriesBanner: baseURL + "all/stories/banner",
    WhyChooseUs: baseURL + "all/why/choose",
    SuccessStories: baseURL + "all/success/stories",
    SinglePlanVideos: baseURL + "all/new/courses/",
    SinglePlanDetails: baseURL + "all/course/plan",
    SinglePlanSilentFeatures: baseURL + "all/course/plan",
    SinglePlanReferCourses: baseURL + "all/refer/course",
    PlanZeroBanner: baseURL + "all/plan-zero/banner",
    PlanABanner: baseURL + "all/plan-a/banner",
    PlanBBanner: baseURL + "all/plan-b/banner",
    PlanCPlusBanner: baseURL + "all/plan-c/banner",
    PlanMscBanner: baseURL + "all/plan-msc/banner",
    PlanUGBanner: baseURL + "all/plan-ug/banner",
    PlanTHBanner: baseURL + "all/plan-th/banner",
    PlanNNLBanner: baseURL + "all/plan-nnl-vsl/banner",
    OffersBanner: baseURL + "all/offers/banner",
    OfferOfMonths: baseURL + "all/months/offers/",
    NewsRoom: baseURL + "all/newsroom/",
    NewsRoomBanner: baseURL + "all/newsroom/banner/",
  },
  imagePathURL: {
    URL: imageURL,
  },
};
