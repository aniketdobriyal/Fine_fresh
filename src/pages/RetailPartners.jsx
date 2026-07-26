import { useState } from "react";

const partners = [
  {
    id: "delhi",
    name: "Organic Store",
    city: "New Delhi",
    address: "Shop 12, Khan Market, New Delhi - 110003",
    phone: "+91-9811234567",
    x: 45,
    y: 35,
  },
  {
    id: "dehradun",
    name: "Himalayan Basket",
    city: "Dehradun",
    address: "Rajpur Road, Near Jakhan, Dehradun, Uttarakhand - 248001",
    phone: "+91-9412055667",
    x: 44,
    y: 28,
  },
  {
    id: "nainital",
    name: "Pahadi Haat",
    city: "Nainital",
    address: "Mall Road, Near Tallital Bus Stand, Nainital, Uttarakhand - 263002",
    phone: "+91-9411122233",
    x: 48,
    y: 30,
  },
  {
    id: "bangalore",
    name: "Green Earth",
    city: "Bangalore",
    address: "80 Feet Rd, Koramangala 4th Block, Bengaluru, Karnataka - 560034",
    phone: "+91-8041234567",
    x: 38,
    y: 82,
  }
];

export default function RetailPartners() {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 text-[#16261D]">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-semibold font-['Times_New_Roman'] text-[#092C1B]">
          Retail Partners
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          Our products are proudly stocked at selected organic and wellness stores across India. Drop by to pick up your jar.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Left column: Interactive Map */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[400px] aspect-[4/5] bg-white rounded-xl border border-gray-200 p-6 shadow-sm flex flex-col items-center justify-between">
            <h3 className="font-semibold text-sm text-[#092C1B] self-start tracking-wide uppercase border-b border-gray-200 pb-2 w-full font-['Times_New_Roman']">
              Store Locator
            </h3>
            
            <div className="relative w-full h-[320px] flex items-center justify-center my-4 select-none">
              <svg viewBox="0 0 100 100" className="w-full h-full text-gray-200 fill-current">
                {/* Stylized Abstract India Outline Map Shape */}
                <path d="M 40 12 L 48 10 L 52 14 L 46 22 L 52 26 L 56 30 L 62 38 L 54 44 L 56 50 L 52 56 L 48 54 L 42 62 L 44 68 L 38 78 L 36 90 L 39 96 L 34 94 L 32 84 L 33 74 L 28 68 L 22 62 L 20 54 L 16 48 L 10 46 L 8 42 L 18 36 L 26 38 L 32 30 L 36 28 L 35 20 Z" className="text-stone-100 fill-current stroke-stone-300 stroke-[0.8]" />
                
                {/* Dotted lines */}
                {partners.map((partner) => (
                  hoveredPartner === partner.id && (
                    <line
                      key={`line-${partner.id}`}
                      x1={partner.x}
                      y1={partner.y}
                      x2={partner.x < 50 ? 5 : 95}
                      y2={partner.y}
                      stroke="#E5A855"
                      strokeWidth="0.4"
                      strokeDasharray="2,2"
                    />
                  )
                ))}

                {/* Pins */}
                {partners.map((partner) => (
                  <g
                    key={`pin-${partner.id}`}
                    transform={`translate(${partner.x}, ${partner.y})`}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredPartner(partner.id)}
                    onMouseLeave={() => setHoveredPartner(null)}
                  >
                    <circle
                      r={hoveredPartner === partner.id ? 8 : 0}
                      fill="none"
                      stroke="#E5A855"
                      strokeWidth="1.5"
                      className="animate-ping opacity-75"
                    />
                    <circle
                      r={hoveredPartner === partner.id ? 5 : 3.5}
                      fill={hoveredPartner === partner.id ? "#E5A855" : "#092C1B"}
                      className="transition-colors duration-200"
                    />
                    <circle
                      r="1.5"
                      fill="#ffffff"
                    />
                  </g>
                ))}
              </svg>
              
              {hoveredPartner && (
                <div className="absolute top-2 right-2 bg-[#092C1B] text-white px-3 py-1.5 rounded shadow-md text-xs font-semibold">
                  📍 {partners.find(p => p.id === hoveredPartner).name}
                </div>
              )}
            </div>

            <div className="text-[10px] text-gray-400 w-full text-center border-t border-gray-100 pt-2">
              Hover over pins on map or list on the right to view locations
            </div>
          </div>
        </div>

        {/* Right column: Partner listings */}
        <div className="lg:col-span-6 flex flex-col gap-4 w-full">
          <h2 className="text-xl font-bold font-['Times_New_Roman'] text-[#092C1B] mb-2">Stockists</h2>
          <div className="flex flex-col gap-4 w-full">
            {partners.map((partner) => (
              <div
                key={partner.id}
                onMouseEnter={() => setHoveredPartner(partner.id)}
                onMouseLeave={() => setHoveredPartner(null)}
                className={`border rounded-xl p-5 transition duration-300 ${
                  hoveredPartner === partner.id
                    ? "border-[#E5A855] bg-white shadow-md transform -translate-x-1"
                    : "border-gray-200 bg-[#FAF9F5]/40 hover:bg-white hover:border-gray-300"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[10px] font-bold text-green-800 tracking-wider bg-green-50 px-2 py-0.5 rounded uppercase">
                      {partner.city}
                    </span>
                    <h3 className="font-semibold text-gray-800 text-lg mt-1 font-['Times_New_Roman']">{partner.name}</h3>
                  </div>
                  <span className="text-xl">🏪</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{partner.address}</p>
                <div className="flex justify-between items-center text-xs text-gray-500 pt-2 border-t border-gray-100">
                  <span className="font-semibold">📞 Call: {partner.phone}</span>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(partner.name + ", " + partner.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#092C1B] hover:underline font-semibold"
                  >
                    Directions ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Become a Retailer CTA */}
      <div className="mt-16 bg-[#092C1B] text-white rounded-xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-md">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 font-['Times_New_Roman']">Partner with Fine Fresh</h2>
        <p className="text-gray-200 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
          Are you interested in stocking our organic pickles, traditional salts, or wild mushroom powders in your store? We welcome wholesale distribution partnerships.
        </p>
        <button
          onClick={() => window.location.href = "/wholesale"}
          className="bg-white hover:bg-gray-100 text-[#092C1B] font-semibold px-6 py-3 rounded text-sm transition cursor-pointer shadow-sm"
        >
          Submit Wholesale Enquiry
        </button>
      </div>
    </div>
  );
}
