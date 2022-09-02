import React, { forwardRef } from "react";
import "./Faqs.css";
import Faq from "../Faq";
import { FaqsData } from "../../data";

const Faqs = () => {
  // show hide faq answer

  return (
    // <!--START FAQS-->

    <section className="faqs">
      <h2>Frequently Asked Question</h2>
      <div class="container faqs_container">
        {FaqsData.map((faq) => {
          return <Faq title={faq.title} desc={faq.desc} />;
        })}
      </div>
    </section>

    // <!--END FAQS-->
  );
};

export default Faqs;
