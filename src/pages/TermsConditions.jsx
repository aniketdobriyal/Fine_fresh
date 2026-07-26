export default function TermsConditions() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 text-[#16261D]">
      {/* Page Title */}
      <div className="border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-3xl md:text-5xl font-semibold font-['Times_New_Roman'] text-[#092C1B]">
          Terms & Conditions
        </h1>
        <p className="text-xs text-gray-400 mt-2">Last Updated: July 2026</p>
      </div>

      <div className="flex flex-col gap-8 text-sm text-gray-700 leading-relaxed">
        {/* Section 1 */}
        <section>
          <h2 className="font-semibold text-lg text-gray-900 mb-3 font-['Times_New_Roman']">1. General</h2>
          <p>
            By accessing this website, you agree to be bound by these terms and conditions. These terms govern your use of the Fine Fresh website, product purchases, and interactions. If you do not agree with any part of these terms, you must not use our website.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="font-semibold text-lg text-gray-900 mb-3 font-['Times_New_Roman']">2. Products</h2>
          <p>
            All our products are 100% natural, handcrafted, and processed in small batches. Because we do not use artificial stabilizing agents, chemical preservatives, or synthetic coloring, variations in color, texture, and taste are natural and to be expected. Product images displayed are illustrative; actual batch colors may vary slightly depending on seasonal harvest conditions.
          </p>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="font-semibold text-lg text-gray-900 mb-3 font-['Times_New_Roman']">3. Orders & Payments</h2>
          <p>
            All orders placed on our website are subject to product availability. We reserve the right to cancel or refuse any order at our discretion. For credit card, debit card, UPI, or net banking orders, full payment must be successfully captured before order dispatch. For Cash on Delivery (COD) orders, full payment must be handed over to the courier partner upon package delivery.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="font-semibold text-lg text-gray-900 mb-3 font-['Times_New_Roman']">4. Shipping & Delivery</h2>
          <p>
            We deliver to over 19,000 PIN codes across India. Order dispatch typically happens within 24-48 hours. Shipping timelines are estimated and may be subject to unforeseen courier delays, extreme weather, or regional issues. Fine Fresh is not liable for delay damages caused by courier services.
          </p>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="font-semibold text-lg text-gray-900 mb-3 font-['Times_New_Roman']">5. Returns & Cancellations</h2>
          <p>
            Due to the perishable nature of food items, pickles, salts, and powder preserves, we do not accept returns. If your package arrives damaged, tampered with, or if you receive the incorrect items, please contact our support team at <span className="font-semibold">ffcare@gmail.com</span> with photos of the package within 24 hours of delivery, and we will dispatch a replacement or issue store credit.
          </p>
        </section>
      </div>
    </div>
  );
}
