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
            <li><a className="hover:text-white transition cursor-pointer">Garlic Pickle</a></li>
            <li><a className="hover:text-white transition cursor-pointer">Sun-Dried Tomatoes</a></li>
            <li><a className="hover:text-white transition cursor-pointer">Mushroom Powder</a></li>
            <li><a className="hover:text-white transition cursor-pointer">Pisi Noon</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-3">COMPANY</h3>
          <ul className="flex flex-col gap-2 text-xs text-gray-300">
            <li><a className="hover:text-white transition cursor-pointer">Our Story</a></li>
            <li><a className="hover:text-white transition cursor-pointer">From Our Farm</a></li>
            <li><a className="hover:text-white transition cursor-pointer">Recipes</a></li>
            <li><a className="hover:text-white transition cursor-pointer">Retail Partners</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-sm mb-3">SUPPORT</h3>
          <ul className="flex flex-col gap-2 text-xs text-gray-300">
            <li><a className="hover:text-white transition cursor-pointer">FAQ</a></li>
            <li><a className="hover:text-white transition cursor-pointer">Contact</a></li>
            <li><a className="hover:text-white transition cursor-pointer">Terms & Conditions</a></li>
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