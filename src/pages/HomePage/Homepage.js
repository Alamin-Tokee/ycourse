import React from "react";
import Categories from "../../components/Categories/Categories";
import Courses from "../../components/Courses/Courses";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Faqs from "../../components/Faqs/Faqs";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Categories />
      <Courses />
      <Faqs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
