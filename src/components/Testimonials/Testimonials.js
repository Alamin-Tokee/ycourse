import React from "react";
import "./Testimonials.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const Testimonials = () => {
  return (
    //<!--TESTIMINAL START-->
    <section className="container testimonials_container">
      <h2>Student Testimonial</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {/* <h2>Student Testimonial</h2> */}
        <div className="swiper-wrapper">
          <SwiperSlide className="testimonial">
            <div className="avatar">
              <img src={require("../../images/avatar1.jpg")} />
            </div>
            <div className="testimonial_info">
              <h5>Farid Ahmed</h5>
              <small>Student</small>
            </div>
            <div className="testimonial_body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="testimonial">
            <div className="avatar">
              <img src={require("../../images/avatar2.jpg")} />
            </div>
            <div className="testimonial_info">
              <h5>Jon Doe</h5>
              <small>Student</small>
            </div>
            <div className="testimonial_body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="testimonial">
            <div className="avatar">
              <img src={require("../../images/avatar3.jpg")} />
            </div>
            <div className="testimonial_info">
              <h5>Al-amin Tokee</h5>
              <small>Student</small>
            </div>
            <div className="testimonial_body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="testimonial">
            <div className="avatar">
              <img src={require("../../images/avatar4.jpg")} />
            </div>
            <div className="testimonial_info">
              <h5>Md. Shaeemem</h5>
              <small>Student</small>
            </div>
            <div className="testimonial_body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="testimonial">
            <div className="avatar">
              <img src={require("../../images/avatar5.jpg")} />
            </div>
            <div className="testimonial_info">
              <h5>Zahid Hasan</h5>
              <small>Student</small>
            </div>
            <div className="testimonial_body">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </SwiperSlide>
        </div>
        {/* <br> <br> */}
        <br /> <br />
        {/* <div className="swiper-pagination"></div> */}
        {/* <Pagination> </Pagination> */}
      </Swiper>
    </section>

    // <!--END TESTIMONIAL-->
    //</br>
  );
};

export default Testimonials;
