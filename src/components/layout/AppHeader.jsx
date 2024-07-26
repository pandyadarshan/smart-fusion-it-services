import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const AppHeader = () => {
  const location = useLocation();
  return (
    <div class={"header"}>
      <div
        class={
          location.pathname !== "/" ? `header-inner gray-bg` : `header-inner`
        }
      >
        <div class="banner-bg">
          <NavLink to={"/"}>
            <img
              class="logo"
              loading="lazy"
              alt="smartfusion logo"
              src={require("../../assets/sf1.png")}
            />
          </NavLink>
        </div>
        <div class="nevbar-right-section">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "active navbar-item" : "navbar-item"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/services/web-development"}
            className={
              location.pathname.includes("services")
                ? "active navbar-item"
                : "navbar-item"
            }
          >
            Services
          </NavLink>

          <NavLink
            to={"/skills"}
            className={({ isActive }) =>
              isActive ? "active navbar-item" : "navbar-item"
            }
          >
            Skills
          </NavLink>

          <NavLink
            to={"/our-team"}
            className={({ isActive }) =>
              isActive ? "active navbar-item" : "navbar-item"
            }
          >
            Our Team
          </NavLink>
          <div class="navbar-item">
            <a>Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
