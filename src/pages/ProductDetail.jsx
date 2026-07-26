import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const productsData = {
  1: {
    id: 1,
    tag: "PICKLE",
    name: "Mountain Garlic Pickle",
    price: 449,
    originalPrice: 549,
    image: "/garlic_pickle.png",
    desc: "Sharp, earthy, high-altitude garlic — immunity-boosting.",
    longDesc: "Our Mountain Garlic Pickle is prepared using rare, high-altitude single clove garlic from the villages of Ranikhet, Uttarakhand. These garlic bulbs are smaller, more aromatic, and packed with health benefits compared to regular garlic. Cured under the warm mountain sun and seasoned with hand-pounded spices, it brings a rich, tangy, and robust flavour to every meal.",
    benefits: ["Boosts Immunity", "Rich in Antioxidants", "Aids Digestion", "Traditional Recipe"]
  },
  2: {
    id: 2,
    tag: "PRESERVE",
    name: "Sun-Dried Tomatoes in EVOO",
    price: 499,
    originalPrice: 599,
    image: "/sundried_tomatoes.png",
    desc: "Authentic Italian recipe, ready to eat.",
    longDesc: "Indulge in the intense, concentrated sweetness of hand-selected mountain tomatoes. Slowly sun-dried on raised screens in pristine mountain air, then packed in high-quality extra virgin olive oil infused with wild Himalayan oregano and garlic. A gourmet addition to pastas, salads, sandwiches, or enjoyed straight with crusty bread.",
    benefits: ["100% Natural", "Heart Healthy EVOO", "Rich in Lycopene", "Ready to Eat"]
  },
  3: {
    id: 3,
    tag: "POWDER",
    name: "Sun-Dried Oyster Mushroom Powder",
    price: 299,
    originalPrice: 399,
    image: "/mushroom_powder.png",
    desc: "Beta-glucan rich, immune-supporting.",
    longDesc: "Boost the nutrition and taste of your daily cooking with our premium oyster mushroom powder. Cultivated by local women self-help groups in the Kumaon hills, these mushrooms are sun-dried to preserve their rich beta-glucans and immune-supporting properties. Adds a rich, natural umami kick to soups, gravies, pasta sauces, and marinades.",
    benefits: ["Beta-glucan Rich", "Immune Supporting", "Pure Umami Flavour", "No Additives"]
  },
  4: {
    id: 4,
    tag: "SALT",
    name: "Pahadi Pisi Noon",
    price: 249,
    originalPrice: 320,
    image: "/pisi_noon.png",
    desc: "Hand-ground sil-batta salt with herbs.",
    longDesc: "Experience the authentic taste of Uttarakhand with Pisi Noon ('ground salt'). Prepared traditionally by hand on a stone mortar (sil-batta) by local village women. The grinding process releases the aromatic essential oils of fresh coriander, mountain garlic shoots, green chilies, and local herbs into pink rock salt. It's a versatile table salt that transforms simple cucumber slices, fruits, curd, or salads.",
    benefits: ["Traditional Sil-Batta Ground", "Hand-harvested Herbs", "Low Sodium Alternative", "Aromatic & Flavourful"]
  }
};

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const product = productsData[id] || productsData[1];

  useEffect(() => {
    setQuantity(1);
    window.scrollTo(0, 0);
  }, [id]);

  const handleQuantityChange = (val) => {
    if (val < 1) return;
    setQuantity(val);
  };

  const recommendations = Object.values(productsData).filter(
    (p) => p.id !== product.id
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 text-[#16261D]">
      {/* Breadcrumbs */}
      <div className="text-xs text-gray-500 mb-6 flex gap-2">
        <Link to="/" className="hover:text-green-900 transition">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-green-900 transition">Shop</Link>
        <span>/</span>
        <span className="text-gray-800 font-semibold">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Image Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="w-full bg-[#FAF9F5] rounded-xl overflow-hidden aspect-square flex items-center justify-center border border-gray-200 shadow-sm relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-2.5">
            <div className="border-2 border-[#092C1B] rounded-lg overflow-hidden bg-white aspect-square cursor-pointer">
              <img src={product.image} alt="Thumbnail 1" className="w-full h-full object-cover" />
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 aspect-square opacity-60 hover:opacity-100 transition cursor-pointer">
              <img src="/terraced_farms.png" alt="Thumbnail 2" className="w-full h-full object-cover" />
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 aspect-square flex items-center justify-center opacity-40 hover:opacity-100 transition cursor-pointer text-xl">
              🌾
            </div>
            <div className="border border-gray-200 rounded-lg overflow-hidden bg-gray-50 aspect-square flex items-center justify-center opacity-40 hover:opacity-100 transition cursor-pointer text-xl">
              🏔
            </div>
          </div>
        </div>

        {/* Right: Product details */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <span className="text-xs font-bold text-green-800 uppercase tracking-widest bg-green-50 self-start px-2 py-0.5 rounded-md mb-3">
            {product.tag}
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-2 font-['Times_New_Roman'] text-[#092C1B]">
            {product.name}
          </h1>
          
          {/* Price */}
          <div className="flex items-baseline gap-3 my-4">
            <span className="text-2xl font-bold text-[#092C1B]">₹{product.price}</span>
            <span className="text-gray-400 line-through text-sm">₹{product.originalPrice}</span>
            <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded">
              Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            {product.desc}
          </p>

          {/* Benefits Grid */}
          <div className="border-t border-b border-gray-200 py-4 my-4">
            <h3 className="font-bold text-xs text-gray-400 uppercase tracking-wider mb-3">Key Benefits</h3>
            <div className="grid grid-cols-2 gap-2">
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-gray-800">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="text-green-800 shrink-0" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                  </svg>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 my-4">
            <span className="text-sm font-semibold text-gray-700">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded bg-white">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="px-3 py-1 hover:bg-gray-50 text-gray-600 font-bold transition cursor-pointer"
              >
                -
              </button>
              <span className="px-4 py-1 text-sm font-semibold border-l border-r border-gray-300 select-none min-w-[3rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="px-3 py-1 hover:bg-gray-50 text-gray-600 font-bold transition cursor-pointer"
              >
                +
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 my-4 w-full">
            <button
              onClick={() => alert(`Added ${quantity} ${product.name} to cart!`)}
              className="flex-1 bg-white hover:bg-gray-50 text-[#092C1B] border-2 border-[#092C1B] py-3 rounded-md font-semibold text-sm transition cursor-pointer shadow-sm text-center"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                alert(`Proceeding to checkout with ${quantity} ${product.name}!`);
                navigate("/contact");
              }}
              className="flex-1 bg-[#092C1B] hover:bg-[#061e12] text-white py-3 rounded-md font-semibold text-sm transition cursor-pointer shadow-md text-center"
            >
              Buy Now
            </button>
          </div>

          {/* Free Shipping Tag */}
          <div className="flex items-center gap-2 bg-[#FAF9F5] border border-gray-200 rounded-lg p-3 mt-4">
            <span className="text-xl">🚚</span>
            <div className="text-[11px] text-gray-600">
              <p className="font-semibold text-gray-800">Pan-India Delivery Available</p>
              <p>Hygienically packed in glass jars for lasting freshness.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Information Tabs */}
      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="flex gap-6 border-b border-gray-250/60 mb-6">
          <button
            onClick={() => setActiveTab("description")}
            className={`pb-2.5 font-semibold text-sm transition cursor-pointer border-b-2 ${
              activeTab === "description" ? "border-[#092C1B] text-[#092C1B]" : "border-transparent text-gray-400"
            }`}
          >
            Description
          </button>
          <button
            onClick={() => setActiveTab("sourcing")}
            className={`pb-2.5 font-semibold text-sm transition cursor-pointer border-b-2 ${
              activeTab === "sourcing" ? "border-[#092C1B] text-[#092C1B]" : "border-transparent text-gray-400"
            }`}
          >
            Sourcing & Heritage
          </button>
        </div>

        <div className="text-sm text-gray-700 leading-relaxed max-w-4xl">
          {activeTab === "description" ? (
            <div className="flex flex-col gap-3">
              <p>{product.longDesc}</p>
              <p>Every single batch of our products is personally inspected. We do not use any artificial colors, stabilizers, or synthetic chemical preservatives, ensuring you receive only what nature produced.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <p>Our ingredients are sourced from small farmers practicing natural, pesticide-free agriculture in the villages of Kumaon. Due to the high altitude, the produce is slow-grown, which results in concentrated nutrients and natural flavors.</p>
              <p>We work directly with local families, ensuring they receive a fair, direct price for their hard work. By choosing fine fresh, you're not just supporting your health; you are also supporting rural livelihoods and sustainable mountain farming.</p>
            </div>
          )}
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-8 font-['Times_New_Roman'] text-[#092C1B]">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {recommendations.map((item) => (
            <Link
              key={item.id}
              to={`/product/${item.id}`}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white flex flex-col group hover:shadow-md transition duration-300"
            >
              <div className="h-44 bg-[#F5F2ED] overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col gap-1 flex-1 justify-between">
                <div>
                  <span className="text-[9px] font-bold text-green-800 uppercase tracking-widest">{item.tag}</span>
                  <h3 className="font-semibold text-gray-800 group-hover:text-green-900 transition font-['Times_New_Roman'] mt-1">{item.name}</h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mt-1">{item.desc}</p>
                </div>
                <div className="flex justify-between items-center mt-3 pt-2 border-t border-gray-50">
                  <span className="font-bold text-[#092C1B] text-sm">₹{item.price}</span>
                  <span className="text-xs font-semibold text-[#092C1B] group-hover:underline">Shop Now →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
