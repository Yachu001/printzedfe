function FeaturedCard({ item }) {

  if (!item) return null;

  return (
    <div className="relative overflow-hidden group">

      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div> */}

      {/* Name */}
      <p className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition">
        {item.name}
      </p>

    </div>
  );
}

export default FeaturedCard;