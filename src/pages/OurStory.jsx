import PageHero from "../components/PageHero";

export default function OurStory() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-16">
      <PageHero
        title="Our Story"
        subtitle="High in the Kumaon Himalayas, life is shaped by clean air, pure water, and traditions nurtured for generations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 flex flex-col gap-5">
          <p className="text-gray-700 leading-relaxed">
            It is here, in the terraced fields and forested valleys of Uttarakhand, that fine fresh was
            born — to share the flavours of our mountains with the world, while supporting the
            communities that keep these traditions alive.
          </p>

          <div className="bg-[#FAF9F7] border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-green-900 mb-2">🌾 Rooted in Tradition</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Sun-drying to capture flavours, hand-pounding spices for freshness, and pickling with
              natural oils and salts for preservation.
            </p>
          </div>

          <div className="bg-[#FAF9F7] border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-green-900 mb-2">🌱 Grown by Nature, Crafted by Hand</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We work directly with small farmers and foragers who cultivate and harvest at altitude,
              prepared in small batches for quality and authenticity.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-[#FAF9F7] border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-green-900 mb-2">🤝 Supporting Local Communities</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Every purchase helps sustain farming families in remote Himalayan villages.
            </p>
          </div>

          <div className="bg-[#FAF9F7] border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-green-900 mb-3">✔ Our Promise</h3>
            <ul className="flex flex-col gap-2 text-sm text-gray-700">
              <li>✔ Pure, natural ingredients</li>
              <li>✔ Traditional methods, no shortcuts</li>
              <li>✔ Nothing artificial</li>
              <li>✔ Direct farmer-to-kitchen bridge</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}