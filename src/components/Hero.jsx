import "./Hero.css"

function Hero()
{
    return(
        <div className="w-full min-h-[520px] md:min-h-[580px] bg-[url('/cold-snow-dawn-618833.png')] myshadow text-[#091E16] bg-bottom md:bg-center bg-cover bg-no-repeat flex items-center md:items-start py-8 md:py-16">
        
        <div className="w-full max-w-md md:max-w-lg flex flex-col gap-4 md:gap-5 px-4 md:px-0 md:ml-12 lg:ml-20 items-center md:items-start text-center md:text-left">

          <div>
            <h1 className="text-3xl md:text-4.5xl font-bold font-['Times_New_Roman'] leading-tight text-[#09291A]">
                Pure Himalayan Goodness,<br className="hidden sm:inline" /> Delivered With Care.
            </h1>
          </div>

          <div>
            <p className="font-semibold text-sm sm:text-base text-gray-800 leading-relaxed max-w-md">
                Fine Fresh brings you premium quality, natural and traditional food products from the pristine Himalayas of Uttarakhand.
            </p>
          </div>

          <div className="flex gap-3 sm:gap-4 w-full justify-center md:justify-start">
            <button className="bg-[#0A2D1B] hover:bg-[#061c11] text-white font-semibold px-4 py-2.5 rounded-md text-xs sm:text-sm transition shadow-md cursor-pointer flex-1 sm:flex-initial">Shop Our Products</button>
            <button className="text-[#0A2D1B] hover:bg-gray-50 font-semibold bg-white border-green-800 border-2 px-4 py-2.5 rounded-md text-xs sm:text-sm transition shadow-sm cursor-pointer flex-1 sm:flex-initial">Know Our Story</button>
          </div>

          <div className="bg-white border border-[#E6E2DC] py-2.5 px-4 w-full rounded-md text-[10px] sm:text-xs md:text-sm text-green-900 flex justify-center items-center font-bold shadow-sm mt-2">
             <p className="tracking-wide">100% Natural | Hygienically Packed | Locally Sourced</p>
          </div>

         </div>

        </div>
    )
}

export default Hero;