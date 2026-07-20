import Cards from "./Cards"
export default function ProductSection()
 { 
  return(
     <div className=" text-center w-full flex flex-col items-center mt-5 ">
       <div>
         <h1 className="text-green-900 text-4xl font-semibold font-['times_of_roman']">
          Our Products
          </h1>
          <p className="text-gray-600">
            Bringing you the finest Himaliyan products made with love and purity.</p>
             </div>
              <div> <Cards/> </div>
               </div> ) }