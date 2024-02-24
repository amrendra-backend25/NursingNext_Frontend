import { useState } from "react";
import { Link } from "react-router-dom";
const SubData = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
  return (
    <>
      <Link
        className="siderbarlink"
        to={item.path}
        onClick={item.SubData && showSubnav}
      >
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
            <Link className="dropdownlink" to={item.path} key={index}>
              {item.icon}
              <div className="sidebarlabel">{item.title}</div>
            </Link>
          );
        })}
    </>
  );
};

export default SubData;
