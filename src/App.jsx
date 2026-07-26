import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import FromOurFarm from "./pages/FromOurFarm";
import Shop from "./pages/Shop";
import Recipes from "./pages/Recipes";
import Blog from "./pages/Blog";
import ProductDetail from "./pages/ProductDetail";
import RetailPartners from "./pages/RetailPartners";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import WholesaleEnquiry from "./pages/WholesaleEnquiry";
import TermsConditions from "./pages/TermsConditions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/from-our-farm" element={<FromOurFarm />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/retail-partners" element={<RetailPartners />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/wholesale" element={<WholesaleEnquiry />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;