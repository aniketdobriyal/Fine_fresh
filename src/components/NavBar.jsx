import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const navLinks = [
    { label: "Home", path: "/" },
    { label: "Our Story", path: "/our-story" },
    { label: "From Our Farm", path: "/from-our-farm" },
    { label: "Shop", path: "/shop" },
    { label: "Recipes", path: "/recipes" },
    { label: "Blog", path: "/blog" },
    { label: "Retail Partners", path: "/retail-partners" },
    { label: "Contact", path: "/contact" },
];
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="w-full bg-white relative z-50 text-[#16261D] border-b border-gray-100">
            <div className="max-w-7xl mx-auto h-20 flex justify-between items-center px-4 md:px-8">
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-[#16261D] focus:outline-none p-1 rounded-md hover:bg-gray-100 transition cursor-pointer"
                        aria-label="Toggle menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4.17a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4.17a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                </div>

                <Link to="/" className="flex items-center gap-1 md:gap-2">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                        <img src="Mountain-Icon copy.png" alt="Fine Fresh Logo" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl md:text-3xl lg:text-4xl font-medium font-['Times_New_Roman'] leading-tight tracking-wider">FINE FRESH</h1>
                        <p className="text-[8px] md:text-[10px] lg:text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">Gourmet Himalayan Produce</p>
                    </div>
                </Link>

                <div className="hidden lg:flex items-center">
                    <ul className="flex items-center font-medium text-sm tracking-wide gap-2">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path} className="hover:text-green-800 transition cursor-pointer">{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-3 sm:gap-5">
                    <button className="text-gray-700 hover:text-green-800 p-1.5 rounded-full hover:bg-gray-50 transition cursor-pointer" aria-label="Search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                    </button>
                    <button className="hidden sm:inline-flex text-gray-700 hover:text-green-800 p-1.5 rounded-full hover:bg-gray-50 transition cursor-pointer" aria-label="Account">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                        </svg>
                    </button>
                    <button className="text-gray-700 hover:text-green-800 p-1.5 rounded-full hover:bg-gray-50 transition cursor-pointer relative" aria-label="Cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </button>
                    <div className="hidden md:block">
                        <button className="bg-[#092C1B] hover:bg-[#061e12] text-white py-2 px-5 rounded-md font-semibold tracking-wide text-sm transition cursor-pointer">Shop Now</button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-b border-gray-100 py-4 px-6 z-40">
                    <ul className="flex flex-col gap-4 font-medium text-[#16261D]">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path} className="block py-2 border-b border-gray-50 hover:text-green-800 transition cursor-pointer" onClick={() => setIsOpen(false)}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li className="mt-2 md:hidden">
                            <button className="w-full bg-[#092C1B] text-white py-2 rounded-md font-semibold text-center transition cursor-pointer">Shop Now</button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default NavBar;