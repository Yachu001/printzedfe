function MSolutionsCard({ item }) {
  return (
    <div className="relative  flex justify-start items-end px-[4%] py-[11%] aspect-[226/299] w-full overflow-hidden group">

      {/* Image */}
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
      />

        {/* Bottom Left Content */}
        <div
  className=" z-30 w-full h-[20%] text-white grid"
  style={{
    gridTemplateRows: "17fr 6fr 17fr 5fr 5fr 5fr 5fr"
  }}
>

  {/* H3 */}
  <div className="">
    <h3 className=" font-semibold text-[1.5rem] md:text-[1.4rem] xl:text-[1.1rem] overflow-hidden ">
      {item.title}
    </h3>
  </div>

  <div></div>

  

  {/* Tagline */}
  <p className="  text-[.9rem] md:text-[.9rem] xl:text-[.7rem] text-[#E9C306]   ">
    {item.tagline}
  </p>


  {/* Link */}
  <a
    href={item.link}
    className="inline-flex items-center gap-1  text-[.9rem] md:text-[.75rem] xl:text-[.7rem]  leading-none"
  >
    Learn More
    <span className="text-[#E9C306] font- text-[1rem]">→</span>
  </a>

</div>

    </div>
  );
}

export default MSolutionsCard;