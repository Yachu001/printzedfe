import { useEffect, useState } from "react";
import { getFeaturedWorks } from "../services/baseService";
import FeaturedCard from "../components/FeaturedCard";
import creative from "../assets/images/featured/creative.png"

function FeaturedWorkSection() {

  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    try {
      const res = await getFeaturedWorks();

      const formatted = res.data.map(item => ({
        ...item,
        image: item.image.startsWith("http")
          ? item.image
          : `http://127.0.0.1:8000${item.image}`
      }));

      setWorks(formatted);

    } catch (error) {
      console.error("Featured fetch error", error);
    }
  };

  if (!works.length) return null;

  return (
    <section className="bg-[#1B1C1A] text-white py-21 overflow-hidden">

      {/* TOP STATS */}
      <div className="flex w-full justify-between  text-center mb-10 px-6 xl:px-[15%]">

        <div>
          <h3 className="text-orange-500 text-xl lg:text-4xl font-bold">5000+</h3>
          <p className="text-xs text-gray-400">PROJECTS</p>
        </div>

        <div>
          <h3 className="text-orange-500 text-xl lg:text-4xl font-bold">500+</h3>
          <p className="text-xs text-gray-400">CLIENTS</p>
        </div>

        <div>
          <h3 className="text-orange-500 text-xl lg:text-4xl font-bold">2+</h3>
          <p className="text-xs text-gray-400">COUNTRIES</p>
        </div>

        <div>
          <h3 className="text-orange-500 text-xl lg:text-4xl font-bold">10K</h3>
          <p className="text-xs text-gray-400">CREATIVES</p>
        </div>

      </div>

      {/* BIG TEXT */}
      <div className="w-full flex justify-center items-center px-6">
        <img src={creative} alt="" />
      </div>

      {/* IMAGE STRIP */}
      <div className="flex gap-4 lg:gap-8 overflow-x-auto  overflow-y-hidden scrollbar-hide px-6 mt-[-1%]">
  {works.map((item, index) => (
    <div
      key={index}
      className=" 
        flex-shrink-0
        w-[44%]
        lg:w-[27%]     
        
      "
    >
      <FeaturedCard item={item} />
    </div>
  ))}
</div>

    </section>
  );
}

export default FeaturedWorkSection;