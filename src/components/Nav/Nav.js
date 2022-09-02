import React from "react";
import "./Nav.css";

const Nav = () => {
  // show/hide nav menu

  // const menu = document.querySelector(".nav_menu");
  // const menuBtn = document.querySelector(".open-menu-btn");
  // const closeBtn = document.querySelector("#close-menu-btn");

  // menuBtn.addEventListener("click", () => {
  //   menu.style.display = "flex";
  //   closeBtn.style.display = "inline-block";
  //   menuBtn.style.display = "none";
  // });

  // // close nav menu

  // const closeNav = () => {
  //   menu.style.display = "none";
  //   closeBtn.style.display = "none";
  //   menuBtn.style.display = "inline-block";
  // };

  // closeBtn.addEventListener("click", closeNav);
  return (
    <div>
      {/* STAR NAVBAR */}
      <nav>
        <div className="container nav_container">
          <a href="index.html">
            <h2>Ycourse</h2>
          </a>
          <ul className="nav_menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="courses.html">Courses</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
          <button className="open-menu-btn">
            <i className="uil uil-bars"></i>
          </button>
          <button id="close-menu-btn">
            <i class="uil uil-multiply"></i>
          </button>
        </div>
      </nav>
      {/* <!--END NAVBAR--> */}
    </div>
  );
};

export default Nav;
