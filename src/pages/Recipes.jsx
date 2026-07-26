const recipes = [
  { id: 1, uses: "SUN-DRIED TOMATOES", title: "Mediterranean Pahadi Pasta", steps: ["Cook pasta, toss with tomatoes, garlic & olive oil", "Top with cheese and a pinch of pisi noon"] },
  { id: 2, uses: "MUSHROOM POWDER", title: "Umami Mushroom Soup", steps: ["Sauté onions, add mushroom powder", "Simmer in stock, blend smooth"] },
  { id: 3, uses: "GARLIC PICKLE", title: "Tangy Pickle Marinade", steps: ["Mix 2 tsp pickle with yogurt", "Marinate & grill paneer or vegetables"] },
  { id: 4, uses: "PISI NOON", title: "Fruit Chaat Twist", steps: ["Cut fresh fruit, sprinkle pisi noon", "Add a squeeze of lime"] },
];

export default function Recipes() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 pt-8 pb-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold font-['Times_New_Roman'] text-green-900">Recipes with fine fresh</h1>
        <p className="text-gray-600 mt-1">Bringing the flavours of the Himalayas into your kitchen.</p>
      </div>

      <div className="flex flex-col gap-6">
        {recipes.map((r) => (
          <div key={r.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="h-32 bg-[#F0EEE6]" />
            <div className="p-5">
              <span className="text-[10px] font-semibold text-green-800 uppercase tracking-wide bg-[#F5F2ED] px-2 py-1 rounded">
                Uses: {r.uses}
              </span>
              <h3 className="font-bold text-lg text-gray-800 mt-2 mb-2">{r.title}</h3>
              <ul className="text-sm text-gray-700 flex flex-col gap-1">
                {r.steps.map((step) => <li key={step}>✔ {step}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}