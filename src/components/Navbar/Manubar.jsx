import clsx from "clsx";
import "./Manubar.css";
import navbar from "../../components/Navbar/navbar";
import { FaAngleDown } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubData from "./SubData";
const Manubar = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const handleSubMenuHover = (index) => {
    setActiveSubMenu(index);
  };

  const handleSubMenuLeave = () => {
    setActiveSubMenu(null);
  };
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // const [menuOpened, setMenuOpened] = useState(false);
  const [nav, setNav] = useState(false);
  const scrollNav = () => {
    if (isHomePage) {
      if (window.scrollY >= 40) {
        setNav(true);
      } else {
        setNav(false);
      }
    } else {
      setNav(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);
    return () => {
      window.removeEventListener("scroll", scrollNav);
    };
  }, [isHomePage]);

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className={clsx(nav ? "activenav" : "nav", !isHomePage && "navbar")}>
        <div className="header">
          <div className="container tn_container">
            <div className="tn_right">
              <a href="">
                <BsEnvelope />
                <span>feedback@nursingnextlive.in</span>
              </a>
              <a href="">
                <IoCallOutline />
                <span>Toll-Free: +91 9919914449</span>
              </a>
            </div>
          </div>
        </div>

        {/* For Desktop */}
        <section className="manubar_section">
          <div className="container">
            <div className="nav_container">
              <div className="nav_logo">
                <Link to="/">
                  <img
                    src={
                      nav || !isHomePage
                        ? "/images/NNL Logo-01.png"
                        : "/images/NNL LOGO_White-01.png"
                    }
                    alt=""
                  />
                </Link>
              </div>

              <div className="manu_nav">
                <ul className="nav_menu">
                  {navbar.map((item, index) => (
                    <li
                      key={item.id}
                      onMouseEnter={() => handleSubMenuHover(index)}
                      onMouseLeave={handleSubMenuLeave}
                    >
                      <Link to={item.link}>
                        {item.title} {item.subRoutes && <FaAngleDown />}
                      </Link>
                      {item.subRoutes && activeSubMenu === index && (
                        <ul className="sub_menu">
                          {item.subRoutes.map((subRoute) => (
                            <li key={subRoute.name}>
                              <Link to={subRoute.link}>
                                {subRoute.name}{" "}
                                {subRoute.subRoutes && <FaAngleDown />}
                              </Link>
                              {/* Additional sub-menu for nested sub-routes */}
                              {subRoute.subRoutes && (
                                <ul className="nested_sub_menu">
                                  {subRoute.subRoutes.map((nestedSubRoute) => (
                                    <li key={nestedSubRoute.name}>
                                      <Link to={nestedSubRoute.link}>
                                        {nestedSubRoute.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>

                <div className="login_btn">
                  {/* <IoIosNotificationsOutline className="nav_notification" /> */}
                  {/* <p>
                    <button>PA</button>
                    <FaAngleDown className="fa_down" />
                  </p> */}
                </div>
              </div>
            </div>

            {/* For Mobile */}
            <div className="nm_nav">
              <div className="nav_main">
                <div className="img_mobile">
                  <Link to="/">
                    <img
                      src={
                        nav
                          ? "/images/NNL Logo-01.png"
                          : "/images/NNL Logo-01.png"
                      }
                      alt=""
                    />
                  </Link>
                </div>
                <div className="nav_icon" to="#">
                  <FaIcons.FaBars onClick={showSidebar} />
                </div>
              </div>
              <div className={sidebar ? "nav-menu active" : "nav-menu"}>
                <div className="sidebarwrap">
                  <div className="nav_icon close_icon" to="#">
                    <AiIcons.AiOutlineClose onClick={showSidebar} />
                  </div>
                  {SidebarData.map((item, index) => {
                    return <SubData item={item} key={index} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
};

export default Manubar;
