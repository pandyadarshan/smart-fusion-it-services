import React, { useEffect } from "react";

const AppFooter = () => {
  useEffect(() => {
    let l1 = [9, 9, 9, 9, 9, 9, 9];
    let l2 = [9, 9, 9, 9];
    let largestArr = l1.length > l2.length ? l1 : l2;
    let sumArr = [];
    let nes = 0;
    for (let i = 0; i < largestArr.length; i++) {
      let sum = l1[i] + (l2[i] || 0) + nes;
      let mod = sum % 10;
      let div = sum / 10;

      sumArr.push(mod);

      if (div >= 1) {
        nes = 1;
      } else {
        nes = 0;
      }
    }
    if (nes) {
      sumArr.push(nes);
    }
    let linkedList=sumArr.map(item=>{
      return {val:item,next:''}
    })
    return sumArr;
  }, []);

  return (
    <div className="footer">
      <div className="container footer-inner">
        <div className="address-sec">
          <img
            class="logo"
            loading="lazy"
            alt="smartfusion logo"
            src={require("../../assets/sf1.png")}
          />{" "}
          <div className="address-item">India</div>
          <div className="address-item">Rajkot, Gujarat</div>
          <div className="address-item icon">
            <i class="fa-brands fa-whatsapp"></i> +91 9714802966
          </div>
          <div className="address-item icon">
            <i class="fa-regular fa-envelope"></i>smartfusioncomputers@gmail.com
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
            <div className="list-item">.Net Developer</div>
            <div className="list-item">Angular Developer</div>
            <div className="list-item">React.Js Developer</div>
            <div className="list-item">Next.Js Developer</div>
            <div className="list-item">Node.Js Developer</div>
            <div className="list-item">Electron.Js Developer</div>
            <div className="list-item">Frontend Developer</div>
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
  );
};

export default AppFooter;
