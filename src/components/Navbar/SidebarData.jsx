import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as SlIcons from "react-icons/sl";
import * as LuIcons from "react-icons/lu";
import * as PiIcons from "react-icons/pi";

export const SidebarData = [
  {
    title: "About Us",
    path: "/about",
    icon: <FaIcons.FaInfoCircle />,
  },
  {
    title: "Offers",
    path: "/offers",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "Courses",
    // path: "/all-courses",
    icon: <SlIcons.SlBookOpen />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    SubData: [
      {
        title: "All Courses",
        path: "/all-courses",
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "Plan Zero Free Pack",
        path: "/plan-zero",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "MLB PRO Earth Batch",
        path: "/plan-mlb-pro",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Plan C+ Gold Edition",
        path: "/plan-c-plus",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Plan UG",
        path: "/plan-ug",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "MLB Lite Crash Course",
        path: "/plan-mlb-lite",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Plan A Crash Course",
        path: "/plan-a",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "MSc Entrance / SNO",
        path: "/plan-msc",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "NNL VSL Pack",
        path: "/plan-np",
        icon: <IoIcons.IoIosPaper />,
      },

      {
        title: "Target High Digital Lite",
        path: "/plan-th",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Question Bank Pack",
        path: "/plan-qb",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Faculty Development",
        path: "/plan-fdp",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "NCLEX",
        path: "/plan-n",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Exams",
    // path: "/all-exams",
    icon: <LuIcons.LuNewspaper />,
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
        title: "Nursing Officer Exams",
        path: "/officer-exams",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "MSC",
        path: "/msc",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "NCLEX",
        path: "/nclex",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "CHO",
        path: "/cho",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Success Stories",
    path: "/stories",
    icon: <FaIcons.FaCrown />,
  },
  {
    title: "Newsroom",
    path: "/newsroom",
    icon: <FaIcons.FaNewspaper />,
  },

  {
    title: "Blogs",
    path: "/blogs",
    icon: <PiIcons.PiPencilSimpleLineBold />,
  },
];
