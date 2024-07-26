import React from "react";

const SEO = () => {
  return (
    <div className="service-inner-container">
      <div className="img-sec">
        {/* <img src="https://static.wixstatic.com/media/00c238_33143a66fa3541ae9e717564b94163ac~mv2.gif" /> */}
        <img
          src={require("../../../../assets/skills/gifs/seo.gif")}
          alt="seo"
        />
      </div>
      <div className="common-header">SEO</div>
      <p className="intro-para">
        In the ever-evolving landscape of search engine optimization (SEO), we
        specialize in unlocking the full potential of your digital presence.
        Through a strategic combination of keyword research, content
        optimization, and technical enhancements, we ensure your website ranks
        prominently in search engine results pages (SERPs) and attracts
        qualified organic traffic. Our holistic approach to SEO goes beyond just
        improving rankings; we focus on enhancing user experience, increasing
        site accessibility, and maximizing conversion opportunities. With a keen
        understanding of search engine algorithms and industry best practices,
        we continuously refine our strategies to adapt to the latest trends and
        algorithm updates. <br />
        <br />
        <br />
        Let us partner with you to elevate your online visibility, drive
        targeted traffic to your website, and achieve sustainable growth in the
        competitive digital landscape.
      </p>
      <div className="tech-stack">
        <div className="common-sub-header">Technology Stack</div>
      </div>
    </div>
  );
};

export default SEO;
