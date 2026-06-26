import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is WireframeAI?",
      answer:
        "WireframeAI is an AI-powered tool that converts wireframes into React components.",
    },
    {
      question: "How does WireframeAI work?",
      answer:
        "Upload your wireframe and our AI analyzes the layout to generate React code.",
    },
    {
      question: "Do I need coding experience?",
      answer:
        "No. Both developers and beginners can use WireframeAI.",
    },
    {
      question: "Can I edit the generated code?",
      answer:
        "Yes. All generated code is fully customizable.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. We follow security best practices to protect user data.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20 ">
      <h2 className="text-4xl font-bold text-center text-black">
        Frequently Asked Questions
      </h2>

      <p className="text-center text-gray-400 mt-4">
        Everything you need to know about WireframeAI.
      </p>

      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-100 rounded-xl p-5 bg-white cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-gray-200 hover:-translate-y-1"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left cursor-pointer group"
            >
            <span className="text-gray-900 font-medium transition-colors duration-300 group-hover:text-blue-500">
  {faq.question}
</span>

              <span className="text-blue-400 text-3xl transition-transform duration-300 group-hover:scale-125">
  {activeIndex === index ? "−" : "+"}
</span>
            </button>

            {activeIndex === index && (
              <p className="mt-4 text-gray-500">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;