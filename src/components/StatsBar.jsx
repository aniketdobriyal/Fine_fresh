export default function StatsBar() {
  return (
    <div className="bg-[#F5F2ED] flex flex-col md:flex-row justify-around items-stretch md:items-center py-2 md:py-6 text-green-900 rounded-xl divide-y divide-[#E2DDD5] md:divide-y-0 w-full shadow-sm">

      {/* Products */}
      <div className="flex items-center gap-4 p-4 md:p-0 justify-start md:justify-center">
        <h1 className="text-4xl font-bold font-['Times_New_Roman']">5+</h1>

        <div>
          <p className="font-semibold md:block hidden">Premium</p>
          <p className="md:block hidden">Products</p>
          <p className="font-semibold md:hidden text-sm">Premium Products</p>
        </div>
      </div>

      {/* Natural */}
      <div className="flex items-center gap-4 p-4 md:p-0 justify-start md:justify-center">
        <div className="text-green-800 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M1.4 1.7c.217.289.65.84 1.725 1.274 1.093.44 2.885.774 5.834.528 2.02-.168 3.431.51 4.326 1.556C14.161 6.082 14.5 7.41 14.5 8.5q0 .344-.027.734C13.387 8.252 11.877 7.76 10.39 7.5c-2.016-.288-4.188-.445-5.59-2.045-.142-.162-.402-.102-.379.112.108.985 1.104 1.82 1.844 2.308 2.37 1.566 5.772-.118 7.6 3.071.505.8 1.374 2.7 1.75 4.292.07.298-.066.611-.354.715a.7.7 0 0 1-.161.042 1 1 0 0 1-1.08-.794c-.13-.97-.396-1.913-.868-2.77C12.173 13.386 10.565 14 8 14c-1.854 0-3.32-.544-4.45-1.435-1.124-.887-1.889-2.095-2.39-3.383-1-2.562-1-5.536-.65-7.28L.73.806z" />
          </svg>
        </div>

        <div>
          <p className="font-semibold text-sm">Natural & Pure</p>
        </div>
      </div>

      {/* Uttarakhand */}
      <div className="flex items-center gap-4 p-4 md:p-0 justify-start md:justify-center">
        <img src="Mountain-Icon copy.png" alt="Mountain" className="w-10 h-10 object-contain shrink-0" />

        <div className="text-left">
          <p className="font-semibold text-sm">Uttarakhand</p>
          <p className="text-xs text-gray-500 font-medium">Proudly Made in Himalayas</p>
        </div>
      </div>

      {/* Customers */}
      <div className="flex items-center gap-4 p-4 md:p-0 justify-start md:justify-center">
        <div className="text-green-800 shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          </svg>
        </div>

        <div>
          <p className="font-semibold md:block hidden">Happy</p>
          <p className="md:block hidden">Customers</p>
          <p className="font-semibold md:hidden text-sm">Happy Customers</p>
        </div>
      </div>

    </div>
  );
}