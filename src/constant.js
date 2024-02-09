export const routes = [
  {
    name: "About Us",
    link: "/about",
  },
  {
    name: "Offers",
    link: "/offers",
  },
  {
    name: "Courses",
    link: "/courses",

    subRoutes: [
      {
        name: "Web Development",
        link: "/courses/web-development",
      },
      {
        name: "Mobile Development",
        link: "/courses/mobile-development",
      },
      {
        name: "UI/UX Design",
        link: "/courses/ui-ux-design",
      },
    ],
  },
  {
    name: "Exam",
    link: "/exam",
  },
  {
    name: "Stories",
    link: "/stories",
  },
  {
    name: "Newsroom",
    link: "/newsroom",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
];
