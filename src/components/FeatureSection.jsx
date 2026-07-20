import AboutCard from "./AboutCard"; 
import FeatureBar from "./FeatureBar";
import WhyChooseUs from "./WhyChooseUs";
import ProductSection from "./ProductSection";
import StatsBar from "./StatsBar";

export default function FeatureSection() {
  return ( 
    <div className="flex flex-col lg:flex-row mt-6 justify-center w-full mb-10 gap-6 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex-1 flex flex-col gap-6 w-full">
        <FeatureBar/>
        <ProductSection/>
        <StatsBar/>
      </div>
      <div className="flex flex-col gap-6 w-full lg:w-85 shrink-0">
        <AboutCard/>
        <WhyChooseUs/> 
      </div> 
    </div> 
  );
}