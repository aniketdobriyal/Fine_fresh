import FeatureItem from "./FreatureItem";
import LeafIcon from "../Icons/Leaf";
import WaterIcon from "../Icons/Water";
import QualityIcon from "../Icons/Quality";
import TruckIcon from "../Icons/Truck";

function FeatureBar()
{
    return(
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full">

           <FeatureItem 
             icon = {<LeafIcon/>}
             title = "Natural Ingredients"
             description = "Sourced from the Himalayan regions"
           />

            <FeatureItem
               icon = {<QualityIcon/>}
               title = "Premium Quality"
               description = "Carefully processed and packed"
             />

             <FeatureItem
                icon = {<WaterIcon/>}
               title = "Traditional Recipes"
               description = "Authentic flavour of Uttarakhand"
              />

              <FeatureItem
                icon = {<TruckIcon/>}
                title = "Fast & Safe Delivery"
                description = "Safe and timely delivery to your doorstep"
              />
              
        </div>
    )
}

export default FeatureBar;