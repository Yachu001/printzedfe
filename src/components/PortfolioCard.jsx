function PortfolioCard({ item }) {
  return (
    <div id="ourworks" className="relative w-full h-full overflow-hidden group">


      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover group-hover:scale-105 overflow-hidden transition duration-500"
      />

      <div className="absolute bottom-3 left-3 w-[65%]">
        <h3 className="text-[.7rem] md:text-[1.9rem] xl:text-[1.75rem] font-semibold">{item.title}</h3>
        <p className="text-[.3rem] md:text-[.8rem] xl:text-[.95rem] text-yellow-400">{item.tagline}</p>
        <div className="text-[.3rem] md:text-[.8rem] xl:text-[.95rem] flex gap-2">Learn More
          <span className="text-[#E9C306] font-extrabold  ">→</span>
        </div>
      </div>

    </div>
  );
}

export default PortfolioCard;