import React, { useEffect, useState } from "react";
import Modal from "../Common/Model";
import HireForm from "../Common/HireForm";
import useCustomNavigation from "../../hooks/useCustomNavigation";

const AppFooter = () => {
  const { addQueryParam, removeQueryParam, params } = useCustomNavigation();
  return (
    <>
      <div className="footer">
        <div className="container footer-inner">
          <div className="address-sec">
            <img
              class="logo"
              loading="lazy"
              alt="smartfusion logo"
              src={require("../../assets/sf1.png")}
            />{" "}
            <div className="address-item">Smart Fusion India</div>
            <div className="address-item icon">
              <i class="fa-brands fa-whatsapp"></i> +91 9714802966
            </div>
            <div className="address-item icon">
              <i class="fa-regular fa-envelope"></i>
              smartfusioncomputers@gmail.com
            </div>
          </div>
          <div className="footer-list">
            <div className="header mb-2">Services</div>
            <div className="list-item">Web Development</div>
            <div className="list-item">Social Media Marketing</div>
            <div className="list-item">SEO</div>
            <div className="list-item">ADs</div>
            <div className="list-item">Designing(UI/UX)</div>
            <div className="list-item">Windows Application</div>
            <div className="list-item">Web Hosting</div>
          </div>
          <div>
            <div className="footer-list">
              <div className="header mb-2">Hire Developer</div>
              <div
                className="list-item"
                onClick={() => addQueryParam("developer", ".Net Developer")}
              >
                .Net Developer
              </div>
              <div
                className="list-item"
                onClick={() => addQueryParam("developer", "Angular Developer")}
              >
                Angular Developer
              </div>
              <div
                className="list-item"
                onClick={() => addQueryParam("developer", "React.Js Developer")}
              >
                React.Js Developer
              </div>
              <div
                className="list-item"
                onClick={() => addQueryParam("developer", "Next.Js Developer")}
              >
                Next.Js Developer
              </div>
              <div
                className="list-item"
                onClick={() => addQueryParam("developer", "Node.Js Developer")}
              >
                Node.Js Developer
              </div>
              <div
                className="list-item"
                onClick={() =>
                  addQueryParam("developer", "Electron.Js Developer")
                }
              >
                Electron.Js Developer
              </div>
              <div
                className="list-item"
                onClick={() => addQueryParam("developer", "Frontend Developer")}
              >
                Frontend Developer
              </div>
              <div
                className="list-item"
                onClick={() => addQueryParam("developer", "Backend Developer")}
              >
                Backend Developer
              </div>
            </div>
          </div>
          <div>
            <div className="footer-list">
              <div className="header mb-2">Our Expertise</div>
              <div className="list-item">Admin Panel</div>
              <div className="list-item">CMS</div>
              <div className="list-item">Single Page Application</div>
              <div className="list-item">Static Website</div>
              <div className="list-item">SEO</div>
              <div className="list-item">
                Windows Application (Online/Offline)
              </div>
              <div className="list-item">
                Social Media Posts, logo design, brochure design and all the
                designing works
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title={`Hire ${params?.developer} Developer`}
        isOpen={params.developer}
        onClose={() => {
          removeQueryParam("developer");
        }}
      >
        <HireForm />
      </Modal>
    </>
  );
};

export default AppFooter;
