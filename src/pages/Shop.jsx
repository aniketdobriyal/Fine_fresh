const products = [
  { id: 1, tag: "PICKLE", name: "Mountain Garlic Pickle", desc: "Sharp, earthy, high-altitude garlic — immunity-boosting." },
  { id: 2, tag: "PRESERVE", name: "Sun-Dried Tomatoes in EVOO", desc: "Authentic Italian recipe, ready to eat." },
  { id: 3, tag: "POWDER", name: "Sun-Dried Oyster Mushroom Powder", desc: "Beta-glucan rich, immune-supporting." },
  { id: 4, tag: "SALT", name: "Pahadi Pisi Noon", desc: "Hand-ground sil-batta salt with herbs." },
];
export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold font-['Times_New_Roman'] text-green-900">
          Shop All Products
        </h1>
        <p className="text-gray-600 mt-1">
          All four real, currently-sold products — catalog can expand as new lines launch.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white flex flex-col">
            <div className="h-40 bg-[#F0EEE6]" />
            <div className="p-4 flex flex-col gap-2 flex-1">
              <span className="text-[10px] font-semibold text-green-800 uppercase tracking-wide">{p.tag}</span>
              <h3 className="font-semibold text-gray-800">{p.name}</h3>
              <p className="text-sm text-gray-600 flex-1">{p.desc}</p>
              <button className="mt-2 border border-green-900 text-green-900 font-semibold text-sm rounded-md py-2 hover:bg-green-900 hover:text-white transition cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-[#F5F2ED] rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-semibold text-green-900">Wholesale or bulk order?</p>
          <p className="text-sm text-gray-600">Wholesale enquiries are welcome.</p>
        </div>
        <button className="bg-[#092C1B] hover:bg-[#061e12] text-white px-5 py-2.5 rounded-md text-sm font-semibold transition cursor-pointer whitespace-nowrap">
          Wholesale Enquiry
        </button>
      </div>
    </div>
  );
}