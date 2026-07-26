import PageHero from "../components/PageHero";

export default function FromOurFarm() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-16">
      <PageHero
        title="From Our Farm"
        subtitle="Currently empty on the live site — placeholder direction below."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-[#FAF9F7] border border-gray-200 rounded-xl p-6 flex items-center">
          <p className="text-gray-700 text-sm leading-relaxed">
            Since Our Story covers the philosophy, this page could go concrete: which villages, which
            farmers, which season each product is harvested in, and the sil-batta grinding / sun-drying
            process shown step by step.
          </p>
        </div>

        <div className="bg-[#F0EEE6] rounded-xl h-64 flex flex-col items-center justify-center text-gray-500">
          <span className="text-3xl mb-2">📷</span>
          <p className="text-xs text-center px-6">photo/video: terraced fields, harvest, sil-batta grinding</p>
        </div>
      </div>
    </div>
  );
}