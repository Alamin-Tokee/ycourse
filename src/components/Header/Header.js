import React from "react";
import "./Header.css";
import HeaderImage from "../../images/header.svg";

const Header = () => {
  return (
    // <!--START HEADER SECTION-->

    <header>
      <div class="container header_container">
        <div class="header_left">
          <h1>Grow your skills to advance carrer path</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
          <a href="courses.html" class="btn btn-primary">
            Get Started
          </a>
        </div>

        <div class="header_left">
          <div class="header_right_image">
            <img src={HeaderImage} />
          </div>
        </div>
      </div>
    </header>

    //<!--END HEADER--> *
  );
};

export default Header;
