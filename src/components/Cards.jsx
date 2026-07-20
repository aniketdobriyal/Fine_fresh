export default function Cards() {
  const cards = [
    {
      id: 1,
      image:
        "https://www.uttarakhandfoods.com/wp-content/uploads/2024/02/uttarakhand-shilajit-1.jpg",
      title: "Himalayan Honey",
    },
    {
      id: 2,
      image:
        "https://th.bing.com/th/id/R.5edea5c966147ae956b2b872c30a30b2?rik=I2FpgKdxzJhgcg&riu=http%3a%2f%2fpushmycart.com%2fcdn%2fshop%2fproducts%2f9609734e76e943db9629d5122ef65631_1200x1200.png%3fv%3d1684562568&ehk=WmIjVG1Zp%2bxpkeOdIeL1cEO%2fPcZNcKj7X7SE2ffp0%2fc%3d&risl=&pid=ImgRaw&r=0",
      title: "Shudh Shilajit",
    },
    {
      id: 3,
      image:
        "https://www.uttarakhandfoods.com/wp-content/uploads/2024/02/uttarakhand-shilajit-1.jpg",
      title: "Himalayan Honey",
    },
    {
      id: 4,
      image:
        "https://th.bing.com/th/id/R.5edea5c966147ae956b2b872c30a30b2?rik=I2FpgKdxzJhgcg&riu=http%3a%2f%2fpushmycart.com%2fcdn%2fshop%2fproducts%2f9609734e76e943db9629d5122ef65631_1200x1200.png%3fv%3d1684562568&ehk=WmIjVG1Zp%2bxpkeOdIeL1cEO%2fPcZNcKj7X7SE2ffp0%2fc%3d&risl=&pid=ImgRaw&r=0",
      title: "Shudh Shilajit",
    },
    {
      id: 5,
      image:
        "https://www.uttarakhandfoods.com/wp-content/uploads/2024/02/uttarakhand-shilajit-1.jpg",
      title: "Himalayan Honey",
    },
    {
      id: 6,
      image:
        "https://th.bing.com/th/id/R.5edea5c966147ae956b2b872c30a30b2?rik=I2FpgKdxzJhgcg&riu=http%3a%2f%2fpushmycart.com%2fcdn%2fshop%2fproducts%2f9609734e76e943db9629d5122ef65631_1200x1200.png%3fv%3d1684562568&ehk=WmIjVG1Zp%2bxpkeOdIeL1cEO%2fPcZNcKj7X7SE2ffp0%2fc%3d&risl=&pid=ImgRaw&r=0",
      title: "Shudh Shilajit",
    },
    {
      id: 7,
      image:
        "https://www.uttarakhandfoods.com/wp-content/uploads/2024/02/uttarakhand-shilajit-1.jpg",
      title: "Himalayan Honey",
    }
  ];

  return (
    <div className="w-full">
      {/* Desktop Version: Horizontal Scroll */}
      <div className="hidden md:block w-full overflow-x-auto hide-scrollbar">
        <div className="flex w-250 gap-6 p-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-56 h-59 shrink-0 overflow-hidden rounded-xl border border-gray-300 bg-white shadow-md flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-40 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col items-center justify-between p-4">
                <h2 className="text-lg font-semibold text-center">
                  {card.title}
                </h2>

                <button className="mt-4 rounded-md border border-green-900 px-5 py-2 text-green-900 font-semibold transition hover:bg-green-900 hover:text-white cursor-pointer">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Version: Vertical Stack of Horizontal Cards */}
      <div className="flex md:hidden flex-col gap-4 w-full px-2 mt-4">
        {cards.slice(0, 4).map((card) => (
          <div
            key={card.id}
            className="flex flex-row border border-gray-200 bg-white rounded-xl shadow-sm overflow-hidden h-32 items-center w-full"
          >
            {/* Left Image */}
            <div className="w-[42%] h-full shrink-0 overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right details */}
            <div className="w-[58%] flex flex-col justify-center items-start pl-5 pr-4 gap-2.5 text-left">
              <h2 className="text-base font-bold text-gray-800 font-['Times_New_Roman'] leading-tight">
                {card.title}
              </h2>
              <button className="border border-green-900 text-green-900 text-xs font-semibold px-4 py-1.5 rounded-md hover:bg-green-900 hover:text-white transition duration-200 cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
        ))}

        {/* View All Products button */}
        <div className="flex justify-center mt-3 w-full">
          <button className="border border-[#092C1B] text-[#092C1B] hover:bg-[#092C1B] hover:text-white font-semibold px-12 py-2 rounded-md transition duration-200 cursor-pointer text-sm bg-white shadow-sm font-[ui-sans-serif] tracking-wide">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}