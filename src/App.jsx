import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import FromOurFarm from "./pages/FromOurFarm";
import Shop from "./pages/Shop";
import Recipes from "./pages/Recipes";
import Blog from "./pages/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/from-our-farm" element={<FromOurFarm />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;