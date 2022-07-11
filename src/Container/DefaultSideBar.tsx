/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as AccountIcon } from "../assets/Images/Icons/sidebarIcons/accounts.svg";
import { ReactComponent as ActivitiesIcon } from "../assets/Images/Icons/sidebarIcons/activities.svg";
import { ReactComponent as CollapseIcon } from "../assets/Images/Icons/sidebarIcons/arrowRight.svg";
import { ReactComponent as ContactsIcon } from "../assets/Images/Icons/sidebarIcons/contacts.svg";
import { ReactComponent as DashboardIcon } from "../assets/Images/Icons/sidebarIcons/dashboard.svg";
import { ReactComponent as MiscallaneousIcon } from "../assets/Images/Icons/sidebarIcons/miscallaneous.svg";
import { ReactComponent as OpportunityIcon } from "../assets/Images/Icons/sidebarIcons/opportunity.svg";
import { ReactComponent as ReportsIcon } from "../assets/Images/Icons/sidebarIcons/reports.svg";
import { ReactComponent as SetupConfigurationIcon } from "../assets/Images/Icons/sidebarIcons/setup-configuration.svg";
import { ReactComponent as SupportIcon } from "../assets/Images/Icons/sidebarIcons/supportIcon.svg";
import { ReactComponent as SuspectsIcon } from "../assets/Images/Icons/sidebarIcons/suspects.svg";

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
    setup: [
      "/SetupAndConfigurations/createNewClient",
      "/SetupAndConfigurations/generalsetting",
      "/SetupAndConfigurations/companyprofile",
      "/SetupAndConfigurations/portfolios",
      "/SetupAndConfigurations/hotels",
      "/SetupAndConfigurations/user",
      "/SetupAndConfigurations/userRole",
      "/SetupAndConfigurations/accountRules",
      "/SetupAndConfigurations/marketSegmentType",
      "/SetupAndConfigurations/additionalSettings",
    ],
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
      <ProSidebar collapsed={menuCollapse}>
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
              id="suspect"
              className="main-menu-title"
              icon={<SuspectsIcon />}
              title="Suspects"
            >
              <NavLink
                onClick={(e) => {
                  navigate("/suspects");
                  setActiveFun();
                }}
                to="/suspects"
              >
                <MenuItem>Suspect</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/suspect/open");
                  setActiveFun();
                }}
                to="/suspect/open"
              >
                <MenuItem>Open</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/suspect/nonViable");
                  setActiveFun();
                }}
                to="/suspect/nonViable"
              >
                <MenuItem>Not Viable</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/suspect/openActivities");
                  setActiveFun();
                }}
                to="/suspect/openActivities"
              >
                <MenuItem>Open Activities</MenuItem>
              </NavLink>
            </SubMenu>
            <SubMenu
              id="accounts"
              className="main-menu-title"
              icon={<AccountIcon />}
              title="Accounts"
            >
              <NavLink
                onClick={(e) => {
                  navigate("/account");
                  setActiveFun();
                }}
                to="/account"
              >
                <MenuItem>Accounts</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/accounts/active");
                  setActiveFun();
                }}
                to="/accounts/active"
              >
                <MenuItem>Active</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/accounts/inactive");
                  setActiveFun();
                }}
                to="/accounts/inactive"
              >
                <MenuItem>Inactive</MenuItem>
              </NavLink>
            </SubMenu>
            <NavLink
              id="contacts"
              to="/contact"
              onClick={(e) => {
                navigate("/contact");
                setActiveFun();
              }}
            >
              <MenuItem icon={<ContactsIcon />}>Contacts</MenuItem>
            </NavLink>
            <SubMenu
              id="activities"
              className="main-menu-title"
              icon={<ActivitiesIcon />}
              title="Activities"
            >
              <NavLink
                onClick={(e) => {
                  navigate("/activity/all");
                  setActiveFun();
                }}
                to="/activity/all"
              >
                <MenuItem>All</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/activity/blitz");
                  setActiveFun();
                }}
                to="/activity/blitz"
              >
                <MenuItem>Blitz</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/activity/clientVisit");
                  setActiveFun();
                }}
                to="/activity/clientVisit"
              >
                <MenuItem>Client Visit</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/activity/email");
                  setActiveFun();
                }}
                to="/activity/email"
              >
                <MenuItem>Email</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/activity/followUp");
                  setActiveFun();
                }}
                to="/activity/followUp"
              >
                <MenuItem>Follow Up</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/activity/meeting");
                  setActiveFun();
                }}
                to="/activity/meeting"
              >
                <MenuItem>Meeting</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/activity/networking");
                  setActiveFun();
                }}
                to="/activity/networking"
              >
                <MenuItem>Networking</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/activity/phoneCall");
                  setActiveFun();
                }}
                to="/activity/phoneCall"
              >
                <MenuItem>Phone Call</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/activity/siteVisit");
                  setActiveFun();
                }}
                to="/activity/siteVisit"
              >
                <MenuItem>Site Visit</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/activity/teleMarketing");
                  setActiveFun();
                }}
                to="/activity/teleMarketing"
              >
                <MenuItem>Telemarketing</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/activity/others");
                  setActiveFun();
                }}
                to="/activity/others"
              >
                <MenuItem>Other</MenuItem>
              </NavLink>
            </SubMenu>

            <SubMenu
              id="opportunities"
              className="main-menu-title"
              icon={<OpportunityIcon />}
              title="Opportunity"
            >
              <NavLink
                onClick={(e) => {
                  navigate("/opportunity/rfp");
                  setActiveFun();
                }}
                to="/opportunity/rfp"
              >
                <MenuItem>RFP</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/opportunity/lnr");
                  setActiveFun();
                }}
                to="/opportunity/lnr"
              >
                <MenuItem>LNR</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/opportunity/group");
                  setActiveFun();
                }}
                to="/opportunity/group"
              >
                <MenuItem>Group</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/opportunity/meetingAndCatering");
                  setActiveFun();
                }}
                to="/opportunity/meetingAndCatering"
              >
                <MenuItem>Meeting & Catering</MenuItem>
              </NavLink>
            </SubMenu>

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

            <NavLink
              to="/Reports"
              onClick={(e) => {
                navigate("/Reports");
                setActiveFun();
              }}
              id="reports"
            >
              <MenuItem icon={<ReportsIcon />}>Reports</MenuItem>
            </NavLink>
            <SubMenu
              id="setup"
              className="main-menu-title"
              icon={<SetupConfigurationIcon />}
              title="Setup & Configuration"
            >
              <NavLink
                onClick={(e) => {
                  navigate("/SetupAndConfigurations/createNewClient");
                  setActiveFun();
                }}
                to="/SetupAndConfigurations/createNewClient"
              >
                <MenuItem>Create New Client</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/SetupAndConfigurations/generalsetting");
                  setActiveFun();
                }}
                to="/SetupAndConfigurations/generalsetting"
              >
                <MenuItem>General Settings</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/SetupAndConfigurations/companyprofile");
                  setActiveFun();
                }}
                to="/SetupAndConfigurations/companyprofile"
              >
                <MenuItem>Company Profile</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/SetupAndConfigurations/portfolios");
                  setActiveFun();
                }}
                to="/SetupAndConfigurations/portfolios"
              >
                <MenuItem>Portfolios</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/SetupAndConfigurations/hotels");
                  setActiveFun();
                }}
                to="/SetupAndConfigurations/hotels"
              >
                <MenuItem>Hotels</MenuItem>
              </NavLink>
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
              <NavLink
                onClick={(e) => {
                  navigate("/SetupAndConfigurations/accountRules");
                  setActiveFun();
                }}
                to="/SetupAndConfigurations/accountRules"
              >
                <MenuItem>Account Rules</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/SetupAndConfigurations/marketSegmentType");
                }}
                to="/SetupAndConfigurations/marketSegmentType"
              >
                <MenuItem>Market Segment Type</MenuItem>
              </NavLink>
              <NavLink
                onClick={(e) => {
                  navigate("/SetupAndConfigurations/additionalSettings");
                }}
                to="/SetupAndConfigurations/additionalSettings"
              >
                <MenuItem>Additional Settings</MenuItem>
              </NavLink>
            </SubMenu>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <div className="footer-support">
            <SupportIcon />
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
}

export default DefaultSidebar;
