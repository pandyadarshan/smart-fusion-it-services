import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import PrimaryButton from "../Common/PrimaryButton";
import Model from "./../Common/Model";
import ContactForm from "../Common/ContactForm";

const AppHeader = () => {
  const location = useLocation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);
  return (
    <>
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
            <div className="align-items-center d-flex">
              <PrimaryButton
                onClick={openContactModal}
                label={"Business inquiry"}
                className="contact-button"
              ></PrimaryButton>
            </div>
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
              to={"/about-us"}
              className={({ isActive }) =>
                isActive ? "active navbar-item" : "navbar-item"
              }
            >
              About Us
            </NavLink>

            <NavLink
              to={"/our-team"}
              className={({ isActive }) =>
                isActive ? "active navbar-item" : "navbar-item"
              }
            >
              Our Team
            </NavLink>
          </div>
        </div>
      </div>
      <Model
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        title={"Business inquiry"}
      >
        <ContactForm />
      </Model>
    </>
  );
};

export default AppHeader;
