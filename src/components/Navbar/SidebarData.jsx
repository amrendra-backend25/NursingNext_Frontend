import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "About Us",
    path: "/about",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Offers",
    path: "/offers",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Courses",
    path: "/all-courses",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    SubData: [
      {
        title: "All Courses",
        path: "/all-courses",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Free Pack",
        path: "/plan/zero",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Mastermind Pack",
        path: "/plan-c-plus",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Undergraduate Pack",
        path: "/plan-ug",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "MLB Lite Crash Course",
        path: "/plan-mlb-lite",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Crash Courses",
        path: "/plan-a",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "NNL VSL Pack",
        path: "/plan-np",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "MSc Entrance / SNO",
        path: "/plan-msc",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Target High Digital Lite",
        path: "/plan-th",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Question Back Pack",
        path: "plan-qb",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Exams",
    path: "/all-exams",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    SubData: [
      {
        title: "All Exams",
        path: "/all-exams",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "AIIMS NORCET",
        path: "/aiims-norcet",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "PGIMER",
        path: "/pgimer",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "ESIC",
        path: "/esic",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "RRB",
        path: "/rrb",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "JIPMER",
        path: "/jipmer",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "CHO",
        path: "/cho",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "NIMHANS",
        path: "/nimhans",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "KERALA PSC/DHS",
        path: "/kerala-psc-dhs",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Stories",
    path: "/stories",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Newsroom",
    path: "/newsroom",
    icon: <IoIcons.IoMdPeople />,
  },
  //   {
  //     title: "Messages",
  //     path: "/messages",
  //     icon: <FaIcons.FaEnvelopeOpenText />,

  //     iconClosed: <RiIcons.RiArrowDownSFill />,
  //     iconOpened: <RiIcons.RiArrowUpSFill />,

  //     SubData: [
  //       {
  //         title: "Message 1",
  //         path: "/messages/message1",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //       {
  //         title: "Message 2",
  //         path: "/messages/message2",
  //         icon: <IoIcons.IoIosPaper />,
  //       },
  //     ],
  //   },
  {
    title: "Blogs",
    path: "/blogs",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
