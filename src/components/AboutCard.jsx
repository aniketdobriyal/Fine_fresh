export default function AboutCard()
{
    return(
        <div className="bg-[#FAF9F7] flex flex-col justify-between p-5 rounded-xl text-green-850 border border-gray-200 w-full lg:w-85 min-h-[230px] shadow-sm">
         
          <div className="flex items-center gap-2">
              <img src = "Mountain-Icon copy.png" alt="Mountain Icon" className="w-10 h-10 object-contain shrink-0" />
              <div>
                <h1 className="font-bold text-lg font-['Times_New_Roman'] text-green-900">About Fine Fresh</h1>
              </div>
          </div>

          <div className="my-2">
            <p className="text-gray-700 text-sm leading-relaxed w-full">
                We are a food processing startup on a mission to promote healthy, authentic and traditional Himalayan 
                products while maintaining the highest standards of quality and hygiene.
            </p>
          </div>

          <div>
            <button className="bg-white hover:bg-gray-50 text-green-900 font-semibold text-xs sm:text-sm border border-gray-300 rounded-md px-5 py-2.5 shadow-sm transition duration-200 cursor-pointer">
              Learn More About Us
            </button>
          </div>
        </div>
    )
}
