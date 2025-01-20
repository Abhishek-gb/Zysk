import React, { useState } from "react";
import group from "./Images/group.png";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel at any time without any additional fees.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, additional information can be added to invoices upon request.",
    },
    {
      question: "How does billing work?",
      answer: "Billing is done monthly, and you will be charged automatically.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "You can change your account email in the settings section of your profile.",
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <p className="text-center text-muted mb-4">
        Everything you need to know about the product and billing.
      </p>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading-${index}`}>
              <button
                className={`accordion-button ${
                  activeIndex === index ? "" : "collapsed"
                }`}
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`collapse-${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse-${index}`}
              className={`accordion-collapse collapse ${
                activeIndex === index ? "show" : ""
              }`}
              aria-labelledby={`heading-${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4 bg-light">
        <img src={group} alt="group" />
        <p className="text-muted">
          Still have questions? Can’t find the answer you’re looking for?
        </p>
        <button className="btn btn-danger">Get in touch</button>
      </div>
    </div>
  );
};

export default FAQ;
