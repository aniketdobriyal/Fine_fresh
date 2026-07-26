import { useState } from "react";

const faqs = [
  {
    question: "Are your products 100% natural?",
    answer: "Yes, absolutely! All Fine Fresh products are sourced directly from natural, pesticide-free agriculture in the Kumaon region of the Himalayas. We do not add any chemical flavor enhancers, synthetic colors, or chemical fertilizers."
  },
  {
    question: "Do you use any preservatives?",
    answer: "No chemical preservatives are used. We rely on traditional, time-tested methods of preservation: pickling in pure, cold-pressed mustard oil with natural salts and spices, sun-drying to remove moisture naturally, and hand-grinding salt with dry, high-essential-oil herbs."
  },
  {
    question: "How should I store the products?",
    answer: "For our pickles, store them in a cool, dry place and ensure you always use a clean, dry spoon. Keep the jar lid tightly closed when not in use. For our salts and mushroom powders, store in an airtight container away from moisture to prevent clumping, as we do not use artificial anti-caking agents."
  },
  {
    question: "Do you offer COD (Cash on Delivery)?",
    answer: "Yes, we offer Cash on Delivery (COD) for most PIN codes across India. You can select the COD option during checkout. There is a nominal additional charge of ₹40 for COD orders to cover courier handling fees."
  },
  {
    question: "Where do you deliver?",
    answer: "We offer pan-India delivery, shipping to over 19,000 PIN codes. Whether you are in a major metro or a smaller town, our shipping partners will deliver your gourmet Himalayan products straight to your doorstep."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 text-[#16261D]">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-semibold mb-2 font-['Times_New_Roman'] text-[#092C1B]">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 text-sm">
          Everything you need to know about our products, shipping, and Himalayan farming model.
        </p>
      </div>

      {/* Accordion List */}
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 hover:bg-gray-50 transition cursor-pointer"
              >
                <span className="font-semibold text-gray-800 text-sm md:text-base">
                  {faq.question}
                </span>
                <span className={`text-xl text-[#092C1B] transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-60 border-t border-gray-100" : "max-h-0"
                }`}
              >
                <div className="p-5 md:p-6 text-sm text-gray-600 leading-relaxed bg-[#FAF9F5]">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Support Box */}
      <div className="mt-12 text-center bg-[#F5F2ED] rounded-xl p-6 border border-gray-250/60">
        <h3 className="font-semibold text-gray-800 mb-1">Still have questions?</h3>
        <p className="text-xs text-gray-500 mb-4">We are here to help. Reach out to our customer care team anytime.</p>
        <button
          onClick={() => window.location.href = "/contact"}
          className="bg-[#092C1B] hover:bg-[#061e12] text-white px-5 py-2 rounded text-xs font-semibold transition cursor-pointer"
        >
          Contact Customer Care
        </button>
      </div>
    </div>
  );
}
