import React from "react";

const Ads = () => {
  return (
    // <div>
    //   <img src="https://i.pinimg.com/originals/1b/1e/37/1b1e37721cf248b07ae7ed07966df60b.gif" />
    // </div>
    <div className="service-inner-container">
      <div className="img-sec">
        {/* <img src="https://i.pinimg.com/originals/1b/1e/37/1b1e37721cf248b07ae7ed07966df60b.gif" /> */}
        <img
          src={require("../../../../assets/skills/gifs/ads.gif")}
          alt="ads"
        />
      </div>
      <div className="common-header">Ads</div>
      <p className="intro-para">
        In the fast-paced realm of online advertising, we specialize in crafting
        compelling campaigns that captivate audiences and drive tangible
        results. From eye-catching display ads to targeted pay-per-click (PPC)
        campaigns, we leverage advanced targeting techniques and creative
        strategies to maximize your ROI. Our data-driven approach ensures that
        every ad dollar is spent efficiently, targeting the right audience with
        the right message at the right time. Whether you're looking to increase
        brand awareness, drive website traffic, or boost conversions, we tailor
        our ad strategies to align with your specific goals and deliver
        measurable success. With a focus on continual optimization and
        performance tracking, we are committed to maximizing the impact of your
        advertising budget and helping your business thrive in the competitive
        digital landscape. <br />
        <br />
        <br />
        Let us be your trusted partner in navigating the complex world of online
        advertising and achieving your marketing objectives.
      </p>
      <div className="tech-stack">
        <div className="common-sub-header">Technology Stack</div>
      </div>
    </div>
  );
};

export default Ads;
