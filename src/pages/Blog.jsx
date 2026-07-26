const posts = [
  { id: 1, title: "Why We Sun-Dry Instead of Freeze" },
  { id: 2, title: "A Season in the Terraced Fields" },
  { id: 3, title: "The Art of Hand-Pounding Pisi Noon" },
];
export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold font-['Times_New_Roman'] text-green-900">Farm Journal</h1>
        <p className="text-gray-600 mt-1">Stories from our farms, our people, and the Himalayas — new section, draft titles.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="h-40 bg-[#F0EEE6] flex items-center justify-center text-2xl">📰</div>
            <div className="p-4">
              <h3 className="font-medium text-gray-800">{post.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}