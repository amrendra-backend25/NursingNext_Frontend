import clsx from "clsx";
import "./Manubar.css";
import navbar from "../../components/Navbar/navbar";
import { RiMenu3Fill, RiMenuFill } from "react-icons/ri";
import { BsEnvelope } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { TbGridDots } from "react-icons/tb";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const Manubar = () => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleSubMenuHover = (index) => {
    setActiveSubMenu(index);
  };

  const handleSubMenuLeave = () => {
    setActiveSubMenu(null);
  };

  // Check if the current page is the home page
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const [menuOpened, setMenuOpened] = useState(false);
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

  return (
    <nav className={clsx(nav ? "activenav" : "nav", !isHomePage && "navbar")}>
      <div className="header">
        <div className="container tn_container">
          <div className="tn_right">
            <a href="">
              <BsEnvelope />
              <span>queries@nursingnextlive.com</span>
            </a>
            <a href="">
              <IoCallOutline />
              <span>Toll-Free: +91 9919914449</span>
            </a>
            <a href="">
              <TbGridDots />
              <span>Businesses</span>
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
                              <ul
                                className="nested_sub_menu"
                                
                              >
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
            </div>
          </div>

          {/* For Mobile */}

          <div className="nm_nav">
            <div className="nm_container">
              <div className="nav_logo">
                <Link to="/">
                  <img
                    src={
                      nav
                        ? "/images/NNL Logo-01.png"
                        : "/images/NNL LOGO_White-01.png"
                    }
                    alt=""
                  />
                </Link>
              </div>
              <div className="manu_nav">
                <ul
                  className="nav_menu"
                  style={{ transform: menuOpened && "translate(0%)" }}
                >
                  {navbar.map((item) => (
                    <li key={item.id}>
                      <a href={item.link}>{item.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="menu_btn">
                {!menuOpened ? (
                  <RiMenuFill onClick={() => setMenuOpened(true)} />
                ) : (
                  <RiMenu3Fill onClick={() => setMenuOpened(false)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Manubar;
