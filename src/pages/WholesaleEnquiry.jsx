import { useState } from "react";

export default function WholesaleEnquiry() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    products: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.businessName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", businessName: "", email: "", phone: "", products: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 text-[#16261D]">
      {/* Page Header */}
      <div className="text-center mb-10">
        <span className="text-xs font-bold text-green-800 uppercase tracking-widest bg-green-50 px-3 py-1 rounded">
          B2B Partnerships
        </span>
        <h1 className="text-3xl md:text-5xl font-semibold mt-3 mb-2 font-['Times_New_Roman'] text-[#092C1B]">
          Wholesale Enquiry
        </h1>
        <p className="text-gray-600 text-sm max-w-lg mx-auto">
          Interested in stocking Fine Fresh at your store, restaurant, or boutique resort? Complete the form below to receive our catalog and wholesale pricing sheet.
        </p>
      </div>

      <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-xl text-center animate-fade-in">
            <span className="text-4xl mb-3 block">🌾</span>
            <h3 className="font-bold text-lg font-['Times_New_Roman']">Enquiry Submitted!</h3>
            <p className="text-sm mt-1 max-w-md mx-auto">
              Thank you for your interest in Fine Fresh. Our partnerships manager will contact you with product catalogs and wholesale rate sheets within 24 hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 bg-[#092C1B] hover:bg-[#061e12] text-white text-xs font-semibold px-4 py-2.5 rounded transition"
            >
              Submit Another Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter contact person name"
                  className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#092C1B] bg-gray-50/50"
                />
              </div>

              {/* Business Name */}
              <div>
                <label htmlFor="businessName" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Organic Food Co."
                  className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#092C1B] bg-gray-50/50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@business.com"
                  className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#092C1B] bg-gray-50/50"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91-XXXXX-XXXXX"
                  className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#092C1B] bg-gray-50/50"
                />
              </div>
            </div>

            {/* Products of Interest */}
            <div>
              <label htmlFor="products" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Products You're Interested In
              </label>
              <select
                id="products"
                name="products"
                value={formData.products}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#092C1B] bg-gray-50/50"
              >
                <option value="">Select an option...</option>
                <option value="all">All Products (Pickle, EVOO Preserve, Mushroom Powder, Salt)</option>
                <option value="pickles">Himalayan Pickles Only</option>
                <option value="salts">Traditional Herb Salts Only</option>
                <option value="powders">Mushroom & Herb Powders Only</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Order details / Special requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mention expected quantities, store location, or other details..."
                className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#092C1B] bg-gray-50/50 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#092C1B] hover:bg-[#061e12] text-white py-3 rounded font-semibold text-sm transition cursor-pointer shadow-md text-center"
            >
              Submit Enquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
