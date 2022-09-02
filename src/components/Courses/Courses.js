import React from "react";
import "./Courses.css";
import { CoursesData } from "../../data";
import Course from "../Course";

const Courses = () => {
  return (
    // <!-- START COURSE SECTION-->

    <section className="courses">
      <h2>Our Popular couses</h2>
      <div className="container courses_container">
        {CoursesData.map((course) => {
          // console.log(index);
          return <Course course={course} />;
        })}
      </div>
    </section>

    // <!--END COURSE SECTION-->
  );
};

export default Courses;
