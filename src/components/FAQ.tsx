import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can you guarantee that the data is legally safe for training?",
    answer: "We design collection and licensing specifically for training use cases. The exact guarantees depend on your jurisdiction and requirements, and are always documented in the contract. If we can't meet your legal criteria, we'll say so upfront.",
  },
  {
    question: "Do you provide exclusive datasets?",
    answer: "In some cases, yes. Exclusivity affects how we design the shoot and the licensing model, and will be reflected in the pricing. We can discuss this during the first call.",
  },
  {
    question: "Can you work with sensitive domains (e.g., healthcare)?",
    answer: "Potentially — but only under strict constraints. We do not handle protected personal data without proper anonymization, approvals and legal review on your side. In some cases we may decline such projects.",
  },
  {
    question: "How big are your datasets?",
    answer: "It depends on the task. For many real-world problems, a smaller but well-targeted dataset outperforms huge generic collections. We define the optimal volume together with your team.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding relative">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">
              Frequently asked{" "}
              <span className="text-gradient">questions</span>
            </h2>
          </div>

          {/* FAQ items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card-gradient rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold pr-4 font-display">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
