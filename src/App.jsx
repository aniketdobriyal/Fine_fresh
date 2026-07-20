import "./App.css"
import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

import FeatureSection from "./components/FeatureSection";


function App()
{
  return(
    <div>
        <TopBar/>
        <NavBar/>
        <Hero/>
      <FeatureSection/>
     
    
    </div>
  )
}
export default App;