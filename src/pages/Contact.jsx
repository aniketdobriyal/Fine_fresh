import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 text-[#16261D]">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-semibold mb-2 font-['Times_New_Roman'] text-[#092C1B]">
          Get in Touch
        </h1>
        <p className="text-gray-600 max-w-md mx-auto text-sm">
          We'd love to hear from you. Reach out for any questions, feedback, or custom requests.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">
        {/* Left: Contact Info */}
        <div className="lg:col-span-5 bg-[#092C1B] text-white p-8 rounded-xl flex flex-col justify-between shadow-md min-h-[400px]">
          <div>
            <h2 className="font-semibold text-2xl mb-6 font-['Times_New_Roman'] text-green-50">Contact Information</h2>
            
            <div className="flex flex-col gap-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="text-xl shrink-0 mt-0.5">📞</span>
                <div>
                  <h4 className="font-bold text-sm text-green-200">Phone & WhatsApp</h4>
                  <p className="text-base font-semibold mt-0.5">+91-9458162601</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="text-xl shrink-0 mt-0.5">✉</span>
                <div>
                  <h4 className="font-bold text-sm text-green-200">Email Address</h4>
                  <p className="text-base font-semibold mt-0.5">ffcare@gmail.com</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <span className="text-xl shrink-0 mt-0.5">📍</span>
                <div>
                  <h4 className="font-bold text-sm text-green-200">Farm Location</h4>
                  <p className="text-sm leading-relaxed mt-0.5">
                    Village Amyari, Tehsil Ranikhet,<br />
                    Almora, Uttarakhand – 263645
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 mt-8">
            <h4 className="font-bold text-xs text-green-200 uppercase tracking-wider mb-2">Socials</h4>
            <p className="text-xs text-gray-300">Follow us @ifinefresh for daily recipes, farm updates, and mountain life stories.</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7 bg-white border border-gray-200 p-8 rounded-xl shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-2xl text-[#092C1B] font-semibold mb-6 font-['Times_New_Roman']">Send Us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center my-8 animate-fade-in">
                <span className="text-3xl mb-2 block">✓</span>
                <h3 className="font-bold text-lg">Thank You!</h3>
                <p className="text-sm mt-1">Your message has been sent successfully. We will get back to you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 bg-[#092C1B] hover:bg-[#061e12] text-white text-xs font-semibold px-4 py-2 rounded transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#092C1B] bg-gray-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                    className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#092C1B] bg-gray-50/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for..."
                    required
                    className="w-full border border-gray-300 rounded p-3 text-sm focus:outline-none focus:border-[#092C1B] bg-gray-50/50 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#092C1B] hover:bg-[#061e12] text-white py-3 rounded font-semibold text-sm transition cursor-pointer shadow-md text-center"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
