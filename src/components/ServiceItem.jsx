function ServiceItem({ item }) {

  if (!item) return null;

  return (
    <div className="border-t border-gray-600 py-6">

      {/* LG Layout */}
      <div className="hidden lg:flex items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="flex gap-6 flex-1">

          <span className="text-white">
            ({String(item.index).padStart(3, "0")})
          </span>

          <div>
            <h3 className="text-orange-500 font-semibold text-lg mb-2">
              {item.title}
            </h3>

            <p className="text-white text-sm max-w-xl">
              {item.description}
            </p>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <img
          src={item.image}
          alt={item.title}
          className="w-[220px] h-[120px] object-cover rounded-lg"
        />

      </div>

      {/* MOBILE / MD Layout */}
      <div className="lg:hidden flex flex-col gap-4">

        {/* IMAGE TOP */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[180px] object-cover rounded-lg"
        />

        {/* CONTENT BOTTOM */}
        <div>

          {/* <span className="text-gray-400 text-sm">
            ({String(item.index).padStart(3, "0")})
          </span> */}

          <h3 className="text-orange-500 font-semibold text-lg mt-1">
            {item.title}
          </h3>

          <p className="text-gray-300 text-sm mt-2">
            {item.description}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ServiceItem;