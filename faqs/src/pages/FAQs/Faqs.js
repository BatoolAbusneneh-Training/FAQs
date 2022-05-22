import React, { useState } from "react";
import "./Faqs.css";
import Accordion from "../../component/Accordion/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
const Faqs = () => {
  return (
    <div className="faqspage">
      <h1 className="frequently">Frequently Asked Questions</h1>
      <h1 id="frequently">FAQs</h1>
      <h6 className="feelFree">
        Feel free to send us your questions or comments below
      </h6>
     <Accordion/>
    </div>
  );
};
export default Faqs;
