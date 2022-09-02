import React from "react";
import "./Achievements.css";
import { AchievementsData } from "../../data";
import AboutImage from "../../images/about.svg";

const Achievements = () => {
  return (
    // <!--START ACIVEMEBT-->

    <section className="about_achievements">
      <div className="container about_achievements-container">
        <div className="about_achievements-left">
          <img src={AboutImage} />
        </div>
        <div className="about_achievements-right">
          <h1>Acheievements</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <div className="achievements_cards">
            {AchievementsData.map((ach, index) => {
              return (
                <article className="achievements_card" key={index}>
                  <span className="achievements_icon">
                    <i className="uil uil-video"></i>
                  </span>
                  <h3>{ach.number}</h3>
                  <p>{ach.name}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    //<!--END ACHIEVEMENTS-->
  );
};

export default Achievements;
