import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();

  return (
    <div className="services-tab-container container">
      <div className="left-sec">
        <NavLink to={"/services/web-development"} className="tab-item">
          <div className="item-overlay"> Web Development</div>
        </NavLink>
        <NavLink to={"/services/social-media-marketing"} className="tab-item">
          Social Media Marketing
        </NavLink>
        <NavLink to={"/services/seo"} className="tab-item">
          SEO
        </NavLink>
        <NavLink to={"/services/ads"} className="tab-item">
          Ads
        </NavLink>
        <NavLink to={"/services/designing"} className="tab-item">
          Designing (UI/UX)
        </NavLink>
        <NavLink to={"/services/windows-application"} className="tab-item">
          Windows Application
        </NavLink>
        <NavLink to={"/services/web-hosting"} className="tab-item">
          Web Hosting
        </NavLink>
      </div>
      <div className="right-sec">
        <Outlet />
      </div>
    </div>
  );
};

export default Services;
