import React from "react";
import "./Categories.css";
import { CategoriesData } from "../../data";

const Categories = () => {
  return (
    //<!--START CATEGORY-->

    <section className="categories">
      <div className="container categories_container">
        <div className="categories_left">
          <h1>Categories</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </p>
          <a href="#" className="btn">
            Learn More
          </a>
        </div>

        <div className="categories_right">
          {CategoriesData.map((category, index) => {
            return (
              <article className="category" key={index}>
                <span className="category_icon">
                  <i className={category.icon}></i>
                </span>
                <h5>{category.name}</h5>
                <p>{category.desc}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    //<!--END CATEGORY-->
  );
};

export default Categories;
