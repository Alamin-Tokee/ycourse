import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  //show/hide nav menu

  useEffect(() => {
    const menu = document.querySelector(".nav_menu");
    const menuBtn = document.querySelector(".open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");

    console.log(menuBtn);
    console.log(closeBtn);

    menuBtn.addEventListener("click", () => {
      menu.style.display = "flex";
      closeBtn.style.display = "inline-block";
      menuBtn.style.display = "none";
    });

    // close nav menu

    const closeNav = () => {
      menu.style.display = "none";
      closeBtn.style.display = "none";
      menuBtn.style.display = "inline-block";
    };

    closeBtn.addEventListener("click", closeNav);
  }, []);

  return (
    <div>
      {/* STAR NAVBAR */}
      <nav>
        <div className="container nav_container">
          <Link to="/">
            <h2>Ycourse</h2>
          </Link>
          <ul className="nav_menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <button className="open-menu-btn">
            <i className="uil uil-bars"></i>
          </button>
          <button id="close-menu-btn">
            <i className="uil uil-multiply"></i>
          </button>
        </div>
      </nav>
      {/* <!--END NAVBAR--> */}
    </div>
  );
};

export default Nav;
