import { Link } from "react-router-dom";

const cards = [
  { id: 1, tag: "PICKLE", title: "Mountain Garlic Pickle", image: "/garlic_pickle.png" },
  { id: 2, tag: "PRESERVE", title: "Sun-Dried Tomatoes in EVOO", image: "/sundried_tomatoes.png" },
  { id: 3, tag: "POWDER", title: "Sun-Dried Oyster Mushroom Powder", image: "/mushroom_powder.png" },
  { id: 4, tag: "SALT", title: "Pahadi Pisi Noon", image: "/pisi_noon.png" },
];

export default function Cards() {
  return (
    <div className="w-full">
      {/* Desktop view */}
      <div className="hidden md:block w-full overflow-x-auto hide-scrollbar">
        <div className="flex w-[1000px] gap-6 p-5">
          {cards.map((card) => (
            <div key={card.id} className="w-56 h-[320px] shrink-0 overflow-hidden rounded-xl border border-gray-300 bg-white shadow-md flex flex-col justify-between">
              <div className="w-full h-40 bg-[#F0EEE6] overflow-hidden flex items-center justify-center">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col items-center justify-between p-4">
                <h2 className="text-sm font-semibold text-center leading-snug">{card.title}</h2>
                <Link
                  to={`/product/${card.id}`}
                  className="mt-4 inline-block text-center rounded-md border border-green-900 px-5 py-2 text-green-900 font-semibold text-xs transition hover:bg-green-900 hover:text-white cursor-pointer"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view */}
      <div className="flex md:hidden flex-col gap-4 w-full px-2 mt-4">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-row border border-gray-200 bg-white rounded-xl shadow-sm overflow-hidden h-32 items-center w-full">
            <div className="w-[42%] h-full shrink-0 bg-[#F0EEE6] overflow-hidden flex items-center justify-center">
              <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            </div>
            <div className="w-[58%] flex flex-col justify-center items-start pl-5 pr-4 gap-2.5 text-left">
              <h2 className="text-base font-bold text-gray-800 font-['Times_New_Roman'] leading-tight">{card.title}</h2>
              <Link
                to={`/product/${card.id}`}
                className="inline-block border border-green-900 text-green-900 text-xs font-semibold px-4 py-1.5 rounded-md hover:bg-green-900 hover:text-white transition duration-200 cursor-pointer"
              >
                Shop Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}