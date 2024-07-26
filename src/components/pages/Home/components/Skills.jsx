import React from "react";

const Skills = () => {
  return (
    <div class="container experience-container">
      <div class="common-header" id="experience">
        Experience (Skills)
      </div>
      <div class="mb-2">Let's go pretty straightforward...</div>
      <div class="experience-list">
        <div class="list-item  ">
          Frontend
          <div class="img-list">
            <img
              src={require("../../../../assets/skills/frontend/group.png")}
            />
          </div>
        </div>
        <div class="list-item  ">
          Backend
          <div class="img-list">
            <img src={require("../../../../assets/skills/backend/group.png")} />
          </div>
        </div>
        <div class="list-item  ">
          Web Hosting
          <div class="img-list">
            <img
              src={require("../../../../assets/skills/webHosting/group.png")}
            />
          </div>
        </div>
        <div class="list-item  ">
          Designing (UI/Ux)
          <div class="img-list">
            <img
              src={require("../../../../assets/skills/desigining/group.png")}
            />
          </div>
        </div>
        <div class="list-item  ">
          Others
          <div class="img-list">
            <img src={require("../../../../assets/skills/others/group.png")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
