import React, { useState } from "react";
import faqs from "./faqs.module.css";
import Accordion from "../../component/Accordion/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
const Faqs = () => {
  return (
    <div className={faqs.faqspage}>
      <h1 className={faqs.frequently}>Frequently Asked Questions</h1>
      <h1 id={faqs.frequently}>FAQs</h1>
      <h6 className={faqs.feelFree}>
        Feel free to send us your questions or comments below
      </h6>
      <Accordion />
    </div>
  );
};
export default Faqs;
