const cards = [
  { id: 1, tag: "PICKLE", title: "Mountain Garlic Pickle" },
  { id: 2, tag: "PRESERVE", title: "Sun-Dried Tomatoes in EVOO" },
  { id: 3, tag: "POWDER", title: "Sun-Dried Oyster Mushroom Powder" },
  { id: 4, tag: "SALT", title: "Pahadi Pisi Noon" },
];

export default function Cards() {
  return (
    <div className="w-full">
      <div className="hidden md:block w-full overflow-x-auto hide-scrollbar">
        <div className="flex w-250 gap-6 p-5">
          {cards.map((card) => (
            <div key={card.id} className="w-56 h-59 shrink-0 overflow-hidden rounded-xl border border-gray-300 bg-white shadow-md flex flex-col">
              <div className="w-full h-40 bg-[#F0EEE6] flex items-center justify-center text-[10px] text-gray-400 uppercase tracking-wide">
                {card.tag}
              </div>
              <div className="flex flex-1 flex-col items-center justify-between p-4">
                <h2 className="text-base font-semibold text-center">{card.title}</h2>
                <button className="mt-4 rounded-md border border-green-900 px-5 py-2 text-green-900 font-semibold transition hover:bg-green-900 hover:text-white cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex md:hidden flex-col gap-4 w-full px-2 mt-4">
        {cards.map((card) => (
          <div key={card.id} className="flex flex-row border border-gray-200 bg-white rounded-xl shadow-sm overflow-hidden h-32 items-center w-full">
            <div className="w-[42%] h-full shrink-0 bg-[#F0EEE6] flex items-center justify-center text-[9px] text-gray-400 uppercase tracking-wide">
              {card.tag}
            </div>
            <div className="w-[58%] flex flex-col justify-center items-start pl-5 pr-4 gap-2.5 text-left">
              <h2 className="text-base font-bold text-gray-800 font-['Times_New_Roman'] leading-tight">{card.title}</h2>
              <button className="border border-green-900 text-green-900 text-xs font-semibold px-4 py-1.5 rounded-md hover:bg-green-900 hover:text-white transition duration-200 cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}