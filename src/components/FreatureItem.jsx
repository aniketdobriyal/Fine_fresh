function FeatureItem(prop)
{
    return(
        <div className="flex  text-left gap-3 items-center p-4 rounded-xl  border-gray-150/70 bg-white/80 shadow-sm w-full transition duration-300 hover:shadow-md hover:bg-white">

            <div className="flex items-center justify-center rounded-full w-10 h-10 bg-[#F7F5F3] text-green-900 shrink-0">
              {prop.icon}
            </div>

            <div className="flex flex-col gap-1  w-full">
                <h1 className="font-bold text-sm sm:text-base text-green-900 font-['Times_New_Roman'] leading-snug">{prop.title}</h1>
                <p className="font-['the_times_of_roman'] text-sm font-semibold text-gray-800 leading-normal">{prop.description}</p>
            </div>
         
        </div>
    )
}

export default FeatureItem;