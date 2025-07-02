import { useState } from "react";

const faqs = [
  {
    question: "What types of therapy do you offer?",
    answer:
      "I offer cognitive behavioral therapy (CBT), trauma-informed care, and mindfulness-based approaches. Each session is tailored to your specific needs.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes, I offer secure and confidential online sessions via video calls for clients across California.",
  },
  {
    question: "How long are therapy sessions?",
    answer:
      "Each therapy session lasts 50 minutes. Longer sessions can be scheduled upon request.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "I do not directly accept insurance, but I can provide superbills for reimbursement if your insurance plan allows out-of-network services.",
  },
  {
    question: "Is what I share in therapy confidential?",
    answer:
      "Absolutely. Your privacy is a top priority. All sessions are confidential and adhere to HIPAA guidelines.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full bg-white text-gray-800 px-6 sm:px-12 py-16 border-t border-gray-200"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-600 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-4 cursor-pointer transition-all hover:shadow-sm"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold flex justify-between items-center">
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </h3>
              {openIndex === index && (
                <p className="text-sm text-gray-700 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
