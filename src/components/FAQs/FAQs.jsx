import React, { useState } from "react";
import "./FAQs.scss";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer 24-hour delivery, courier services, transportation solutions, and worldwide shipping options.",
    },
    {
      question: "How can I track my shipment?",
      answer:
        "Once your shipment is dispatched, you’ll receive a tracking ID. Use it on our website to track your package in real-time.",
    },
    {
      question: "Do you deliver internationally?",
      answer:
        "Yes, we offer worldwide shipping to ensure your packages reach any destination.",
    },
    {
      question: "What is the delivery time for local shipments?",
      answer:
        "For local deliveries, we ensure same-day or next-day delivery depending on the package and location.",
    },
    {
      question: "How secure are your services?",
      answer:
        "We prioritize the safety of your packages with advanced handling and secure packaging for all shipments.",
    },
  ];

  return (
    <div className="faqs">
      <h2 className="faqs__title">Frequently Asked Questions</h2>
      <div className="faqs__list">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faqs__item ${
              activeIndex === index ? "faqs__item--active" : ""
            }`}
          >
            <div
              className="faqs__question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faqs__icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`faqs__answer ${
                activeIndex === index ? "faqs__answer--open" : ""
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
