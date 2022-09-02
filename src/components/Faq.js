import React, { useState } from "react";

const Faq = ({ title, desc }) => {
  // show hide faq answer

  const [isActive, setIsActive] = useState(false);

  //   console.log(desc);

  return (
    // <!--START FAQS-->

    <article className="faq" onClick={() => setIsActive(!isActive)}>
      <div className="faq_icon">
        <i className={isActive ? "uil uil-minus" : "uil uil-plus"}></i>
      </div>
      <div className="question_answer">
        <h4>{title}</h4>

        {isActive && <p className="faq_open">{desc}</p>}
      </div>
    </article>

    // <!--END FAQS-->
  );
};

export default Faq;
