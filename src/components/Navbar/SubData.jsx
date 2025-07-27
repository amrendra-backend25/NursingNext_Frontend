import { useState } from "react";
import { Link } from "react-router-dom";

const SubData = ({ item, setSidebar }) => {
  // const [subnav, setSubnav] = useState(false);

  // const showSubnav = () => setSubnav(!subnav);

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  const onSideClick = () => {
    if (item.SubData) {
      showSubnav();
    }
    if (!!item.path || !!item.SubData.path) {
      setSidebar(false);
    }
  };

  return (
    // <>
    //   <Link
    //     className="siderbarlink"
    //     to={item.path}
    //     onClick={item.SubData && showSubnav}
    //   >
    //     <div className="sidebaricon">
    //       {item.icon}
    //       <div className="sidebarlabel">{item.title}</div>
    //     </div>
    //     <div>
    //       {item.SubData && subnav
    //         ? item.iconOpened
    //         : item.SubData
    //         ? item.iconClosed
    //         : null}
    //     </div>
    //   </Link>
    //   {subnav &&
    //     item.SubData.map((item, index) => {
    //       return (
    //         <Link className="dropdownlink" to={item.path} key={index}>
    //           {item.icon}
    //           <div className="sidebarlabel">{item.title}</div>
    //         </Link>
    //       );
    //     })}
    // </>

    <>
      <Link className="siderbarlink" to={item.path} onClick={onSideClick}>
        <div className="sidebaricon">
          {item.icon}
          <div className="sidebarlabel">{item.title}</div>
        </div>
        <div>
          {item.SubData && subnav
            ? item.iconOpened
            : item.SubData
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.SubData.map((item, index) => {
          return (
            <>
              {!!item.path ? (
                <Link
                  className="dropdownlink"
                  to={item.path}
                  key={index}
                  onClick={() => setSidebar(false)}
                >
                  {item.icon}
                  <div className="sidebarlabel">{item.title}</div>
                </Link>
              ) : (
                <span>
                  {item.icon}
                  <div className="sidebarlabel">{item.title}</div>
                </span>
              )}
            </>
          );
        })}
    </>
  );
};

export default SubData;
