const navbar = [
  {
    id: 1,
    link: "about",
    title: "about us",
  },
  {
    id: 2,
    link: "offers",
    title: "offers",
  },
  {
    id: 3,
    link: "all-courses",
    title: "courses",

    subRoutes: [
      {
        name: "All Courses",
        link: "all-courses",
      },
      {
        name: "Plan Zero",
        link: "plan-zero",
      },
      {
        name: "Plan A",
        link: "plan-a",
      },
      {
        name: "Plan B",
        link: "plan-b",
      },
      {
        name: "PlanC+",
        link: "plan-c-plus",
      },
      {
        name: "Plan MSc",
        link: "plan-msc",
      },
      {
        name: "Plan UG",
        link: "plan-ug",
      },
      {
        name: "Plan TH",
        link: "plan-th",
      },
      {
        name: "Plan RRR",
        link: "plan-rrr",
      },
      {
        name: "Plan NNL VSL",
        link: "plan-nnl-vsl",
      },
    ],
  },
  {
    id: 4,
    link: "/all-exams",
    title: "exams",

    subRoutes: [
      {
        name: "All Exams",
        link: "/all-exams",
      },
      {
        name: "AIIMS NORCET",
        link: "/aiims-norcet",
      },
      {
        name: "PGIMER",
        link: "/pgimer",
      },
      {
        name: "ESIC",
        link: "/esic",
      },
      {
        name: "RRB",
        link: "/rrb",
      },
      {
        name: "JIPMER",
        link: "/jipmer",
      },
      {
        name: "CHO",
        link: "/cho",
      },
      {
        name: "NIMHANS",
        link: "/nimhans",
      },
      {
        name: "KERALA PSC/DHS",
        link: "/kerala-psc-dhs",
      },
    ],
  },
  {
    id: 5,
    title: "stories",
    link: "stories",
  },
  {
    id: 6,
    link: "newsroom",
    title: "newsroom",
  },
  {
    id: 7,
    link: "blogs",
    title: "blogs",
  },
  
];
export default navbar;
