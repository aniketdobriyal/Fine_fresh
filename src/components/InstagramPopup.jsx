import { useEffect, useState } from "react";
export default function InstagramPopup() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999] px-4">
      <div className="bg-[#FAF9F2] rounded-xl max-w-sm w-full p-8 text-center relative shadow-xl">
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg cursor-pointer"
          aria-label="Close popup"
        >
          ✕
        </button>

        <div className="w-14 h-14 mx-auto rounded-full bg-gray-200 flex items-center justify-center mb-4 text-2xl">
          📷
        </div>

        <h2 className="font-['Times_New_Roman'] text-xl text-green-900 mb-2">Follow @ifinefresh</h2>
        <p className="text-sm text-gray-600 mb-5">
          Recipes, farm life and behind-the-scenes from the Kumaon hills.
        </p>

        <button className="bg-[#092C1B] hover:bg-[#061e12] text-white px-5 py-2 rounded-md text-sm font-semibold transition cursor-pointer">
          Follow on Instagram
        </button>
      </div>
    </div>
  );
}