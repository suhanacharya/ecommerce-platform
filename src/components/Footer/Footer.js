import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="row row-cols-5 py-5 my-auto border-top  ">
        <div className="col"></div>
        <div class="col justify-content-center">
          <h5>About Us</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">Help</li>
          </ul>
        </div>

        <div class="col justify-content-center">
          <h5>Connect with Us</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">Facebook</li>
            <li class="nav-item mb-2">Instagram</li>
            <li class="nav-item mb-2">Twitter</li>
          </ul>
        </div>

        <div class="col justify-content-center">
          <h5>Policy</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">Terms Of Use</li>
            <li class="nav-item mb-2">Security</li>
          </ul>
        </div>
        <div className="col"></div>
      </footer>
    </div>
  );
};

export default Footer;
