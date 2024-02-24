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
        name: "Free Pack",
        link: "plan-zero",
      },

      {
        name: "MLB PRO",
        link: "plan-mlb-pro",
      },
      {
        name: "Mastermind Pack",
        link: "plan-c-plus",
      },
      {
        name: "Undergraduate Pack",
        link: "plan-ug",
      },
      {
        name: "MLB Lite Crash Course",
        link: "plan-mlb-lite",
      },

      {
        name: "Crash Courses",
        link: "plan-a",
      },
      {
        name: "MSc Entrance / SNO",
        link: "plan-msc",
      },
      {
        name: "NNL VSL Pack",
        link: "plan-np",
      },

      {
        name: "Target High Digital Lite",
        link: "plan-th",
      },
      {
        name: "Question Back Pack",
        link: "plan-qb",
      },
      {
        name: "Faculty Development",
        link: "plan-fdp",
      },
      {
        name: "NCLEX",
        link: "plan-n",
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
    title: "news room",
  },
  {
    id: 7,
    link: "blogs",
    title: "blogs",
  },
];
export default navbar;
