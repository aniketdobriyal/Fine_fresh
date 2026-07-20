import Checked from "../Icons/Checked";

export default function WhyChooseUs()
{
    return(
        <div className="bg-[#FAF9F7] flex flex-col justify-between p-5 mt-5 rounded-xl text-green-850 border border-gray-200 w-full lg:w-85 min-h-[250px] shadow-sm">
         
          <div className="flex items-center gap-2">
              <img src = "Mountain-Icon copy.png" alt="Mountain Icon" className="w-10 h-10 object-contain shrink-0" />
              <div>
                <h1 className="font-bold text-lg font-['Times_New_Roman'] text-green-900">Why Choose Us ?</h1>
              </div>
          </div>

          <div className="flex flex-col gap-3 my-2 text-left">
              <div className="flex items-center gap-3">   
                <Checked/>
                <p className="text-gray-700 text-sm font-medium">100% Natural & Chemical Free.</p>
              </div>

              <div className="flex items-center gap-3">
                <Checked/>
                <p className="text-gray-700 text-sm font-medium">Hygienic Processing & Packaging</p>
              </div>

              <div className="flex items-center gap-3">
                <Checked/>
                <p className="text-gray-700 text-sm font-medium">Supporting Local Farmers</p>
              </div>

              <div className="flex items-center gap-3">
                <Checked/>
                <p className="text-gray-700 text-sm font-medium">Sustainable & Eco Friendly Practices</p>
              </div>
          </div>

        </div>
    )
}
