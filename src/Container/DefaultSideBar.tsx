/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Images/Icons/sidebarIcons/crmLogo.svg";

function DefaultSidebar() {
  const [menuCollapse, setMenuCollapse] = useState(true);
  const navigate = useNavigate();
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const routedActivation = {
    dashboard: ["/home"],
    component: ["/componentPage"],
    suspect: ["/suspects", "/suspect/open", "/suspect/nonViable", "/suspect/openActivities"],
    accounts: [
      "/account",
      "/accounts/active",
      "/accounts/active",
      "/accounts/inactive",
      "/accounts/details",
    ],
    contacts: ["/contact"],
    activities: [
      "/activity/all",
      "/activity/blitz",
      "/activity/clientVisit",
      "/activity/email",
      "/activity/followUp",
      "/activity/meeting",
      "/activity/networking",
      "/activity/phoneCall",
      "/activity/siteVisit",
      "/activity/teleMarketing",
      "/activity/others",
    ],
    opportunities: [
      "/opportunity/rfp",
      "/opportunity/lnr",
      "/opportunity/group",
      "/opportunity/meetingAndCatering",
    ],
    miscallaneous: ["/miscellaneous/uploadDocument", "/miscellaneous/calendar"],
    reports: ["/Reports"],
    setup: ["/SetupAndConfigurations/user", "/SetupAndConfigurations/userRole"],
  };

  const setActiveFun = () => {
    const routeKeys = Object.keys(routedActivation);
    const childClass = document.getElementsByClassName("sub-menu-active");
    const menuActiveClass = document.getElementsByClassName("menuActive");
    if (menuActiveClass.length) {
      menuActiveClass[0].classList.remove("menuActive");
    }
    if (childClass.length) {
      childClass[0].classList.remove("sub-menu-active");
    }
    routeKeys.forEach((routeitem) => {
      if (routedActivation[routeitem].includes(location.pathname)) {
        const parentDiv = document.getElementById(`${routeitem}`);
        if (parentDiv?.classList.contains("main-menu-title")) {
          const proInnerItem = parentDiv.getElementsByClassName("pro-inner-item");
          proInnerItem[0].classList.add("sub-menu-active");
        } else {
          if (parentDiv != null) {
            parentDiv.classList.add("sub-menu-active");
          }
        }
        return false;
      }
    });
  };
  useEffect(() => {
    setActiveFun();
  });

  return (
    <>
      {/* <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div
            className="closemenu"
            role="button"
            tabIndex={0}
            onClick={menuIconClick}
            onKeyDown={menuIconClick}
          >
            <CollapseIcon />
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            <NavLink
              id="dashboard"
              to="/home"
              onClick={(e) => {
                navigate("/home");
                setActiveFun();
              }}
            >
              <MenuItem icon={<DashboardIcon />}>Dashboard</MenuItem>
            </NavLink>
            <SubMenu
              id="miscallaneous"
              className="main-menu-title"
              icon={<MiscallaneousIcon />}
              title="Miscellaneous"
            >
              <NavLink
                onClick={(e) => {
                  navigate("/miscellaneous/uploadDocument");
                  setActiveFun();
                }}
                to="/miscellaneous/uploadDocument"
              >
                <MenuItem>Document</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/miscellaneous/calendar");
                  setActiveFun();
                }}
                to="/miscellaneous/calendar"
              >
                <MenuItem>Calendar</MenuItem>
              </NavLink>
            </SubMenu>
            <SubMenu
              id="setup"
              className="main-menu-title"
              icon={<SetupConfigurationIcon />}
              title="Setup & Configuration"
            >
              <SubMenu title="User Management">
                <NavLink
                  onClick={(e) => {
                    navigate("/SetupAndConfigurations/user");
                    setActiveFun();
                  }}
                  to="/SetupAndConfigurations/user"
                >
                  <MenuItem>User</MenuItem>
                </NavLink>
                <NavLink
                  onClick={(e) => {
                    navigate("/SetupAndConfigurations/userRole");
                    setActiveFun();
                  }}
                  to="/SetupAndConfigurations/userRole"
                >
                  <MenuItem>User Role</MenuItem>
                </NavLink>
              </SubMenu>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <div className="footer-support">
            <SupportIcon />
          </div>
        </SidebarFooter>
      </ProSidebar> */}
      <aside className="main-sidebar">
        <div className="left-sidebar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="second-panel-sidebar">
            <ul className="list-group list-group-light">
              <li className="list-group-item border-0">
                <Link to="/home">
                  <i className="fa-light fa-gauge-simple-high"></i>
                  <span className="block-span">Dashboard</span>
                </Link>
              </li>
              <li className="list-group-item border-0 active">
                <Link to="/clint-list">
                  <i className="fa-light fa-user-group"> </i>
                  <span className="block-span">Client List</span>
                </Link>
              </li>
              <li className="list-group-item border-0 ">
                <Link to="#">
                  <i className="fa-light fa-copy"></i>
                  <span className="block-span">Portfolio</span>
                </Link>
              </li>
              <li className="list-group-item border-0">
                <Link to="#">
                  <i className="fa-light fa-building"></i>
                  <span className="block-span">Properties</span>
                </Link>
              </li>
              <li className="list-group-item border-0">
                <Link to="#">
                  <i className="fa-light fa-circle-dollar"></i>
                  <span className="block-span">Subscription</span>
                </Link>
              </li>
              <li className="list-group-item border-0">
                <Link to="#">
                  <i className="fa-light fa-file-import"></i>
                  <span className="block-span">Import</span>
                </Link>
                <ul className="Import-list">
                  <li>
                    <Link to="#">Accounts</Link>
                  </li>
                  <li>
                    <Link to="#">Contacts</Link>
                  </li>
                  <li>
                    <Link to="#">Activities</Link>
                  </li>
                  <li>
                    <Link to="#">Suspects</Link>
                  </li>
                </ul>
              </li>
              <li className="list-group-item border-0">
                <Link to="#">
                  <i className="fa-light fa-user-gear"></i>
                  <span className="block-span">User Setup</span>
                </Link>
                <ul className="user-class-add">
                  <li>
                    <Link to="#">User</Link>
                  </li>
                  <li>
                    <Link to="#">User Role</Link>
                  </li>
                </ul>
              </li>
              <li className="list-group-item border-0">
                <Link to="#">
                  <i className="fa-light fa-gear"></i>
                  <span className="block-span">Additional Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}

export default DefaultSidebar;
