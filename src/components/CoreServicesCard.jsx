function CoreServiceCard({ item }) {
  return (
    <div className="flex flex-col group cursor-pointer items-center text-center max-w-[200px]">

      {/* Circle */}
      <div className="w-16 h-16 rounded-full bg-[#1f1f1f] group-hover:bg-[#F15E22] transition duration-500 flex items-center justify-center mb-4">
        <img
          src={item.image}
          alt={item.title}
          className="w-7 h-7 object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-sm md:text-base group-hover:text-[#F15E22] transition duration-300 font-medium mb-2">
        {item.title}
      </h3>

      {/* Content */}
      <p className="text-xs text-white group-hover:text-[#F15E22] transition duration-300 leading-relaxed">
        {item.content}
      </p>

    </div>
  );
}

export default CoreServiceCard;