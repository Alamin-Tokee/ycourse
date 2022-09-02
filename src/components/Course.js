import React from "react";

const Courses = (course) => {
  return (
    <article className="course" key={course.index}>
      <div className="course_image">
        <img src={course.course.image} />
      </div>
      <div className="course_info">
        <h4>{course.course.title}</h4>
        <p>{course.course.desc}</p>
        <a href="courses.html" className="btn btn-primary">
          Learn More
        </a>
      </div>
    </article>
  );
};

export default Courses;
