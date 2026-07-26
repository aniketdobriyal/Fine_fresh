import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#09291A] text-white w-full mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">

        <div className="col-span-2 md:col-span-1">
          <h2 className="font-bold text-sm tracking-wide mb-3">FINE FRESH</h2>
          <p className="text-xs text-gray-300 leading-relaxed">
            Village Amyari, Tehsil Ranikhet<br />
            Almora, Uttarakhand – 263645
          </p>
          <p className="text-xs text-gray-300 mt-2">
            ffcare@gmail.com · +91-9458162601 · @ifinefresh
          </p>
        </div>


        <div>
          <h3 className="font-semibold text-sm mb-3">SHOP</h3>
          <ul className="flex flex-col gap-2 text-xs text-gray-300">
            <li><Link to="/product/1" className="hover:text-white transition cursor-pointer">Garlic Pickle</Link></li>
            <li><Link to="/product/2" className="hover:text-white transition cursor-pointer">Sun-Dried Tomatoes</Link></li>
            <li><Link to="/product/3" className="hover:text-white transition cursor-pointer">Mushroom Powder</Link></li>
            <li><Link to="/product/4" className="hover:text-white transition cursor-pointer">Pisi Noon</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-3">COMPANY</h3>
          <ul className="flex flex-col gap-2 text-xs text-gray-300">
            <li><Link to="/our-story" className="hover:text-white transition cursor-pointer">Our Story</Link></li>
            <li><Link to="/from-our-farm" className="hover:text-white transition cursor-pointer">From Our Farm</Link></li>
            <li><Link to="/recipes" className="hover:text-white transition cursor-pointer">Recipes</Link></li>
            <li><Link to="/retail-partners" className="hover:text-white transition cursor-pointer">Retail Partners</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-3">SUPPORT</h3>
          <ul className="flex flex-col gap-2 text-xs text-gray-300">
            <li><Link to="/faq" className="hover:text-white transition cursor-pointer">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white transition cursor-pointer">Contact</Link></li>
            <li><Link to="/terms-conditions" className="hover:text-white transition cursor-pointer">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] sm:text-xs text-gray-400">
          <p>© fine fresh · Kumaon Himalayas</p>
          <p>FSSAI reg. on request</p>
        </div>
      </div>
    </footer>
  );
}