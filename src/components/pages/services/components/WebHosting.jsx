import React from "react";

const WebHosting = () => {
  return (
    <div className="service-inner-container">
      <div className="img-sec">
        {/* <img src="https://www.shootdartsolutions.com/img/service/web-development.gif" /> */}

        <img
          src={require("../../../../assets/skills/gifs/webhosting.gif")}
          alt="web hosting"
        />
      </div>
      <div className="common-header">Windows Application</div>
      <p className="intro-para">
        In the realm of web hosting, we specialize in providing reliable and
        scalable hosting solutions tailored to meet the diverse needs of
        businesses and individuals alike. Our state-of-the-art infrastructure
        and cutting-edge technologies ensure lightning-fast performance,
        rock-solid reliability, and ironclad security for your websites and
        applications. Whether you're launching a personal blog, an e-commerce
        store, or a corporate website, our flexible hosting plans and expert
        support team ensure that you have everything you need to succeed online.
        From shared hosting to dedicated servers, we offer a range of hosting
        options to accommodate any workload and budget. With a commitment to
        uptime, security, and customer satisfaction, we take the hassle out of
        web hosting so you can focus on what matters most—building and growing
        your online presence.
        <br />
        <br />
        <br />
        Choose us as your hosting partner and experience the difference that
        reliable, high-performance hosting can make for your website or
        application.
      </p>
      <div className="tech-stack">
        <div className="common-sub-header">Technology Stack</div>
      </div>
    </div>
  );
};

export default WebHosting;
