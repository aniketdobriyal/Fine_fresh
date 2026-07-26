export default function PageHero({ title, subtitle }) {
  return (
    <div className="w-full h-56 md:h-64 rounded-xl bg-gradient-to-r from-[#8CA37E] to-[#E9E3D2] flex flex-col justify-center px-6 md:px-12 text-white">
      <h1 className="text-3xl md:text-4xl font-['Times_New_Roman']">{title}</h1>

      {subtitle && (
        <p className="mt-2 text-sm md:text-base max-w-xl text-white/90 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}