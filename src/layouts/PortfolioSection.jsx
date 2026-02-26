import { useEffect, useState } from "react";
import { getPortfolio } from "../services/baseService";
import PortfolioCard from "../components/PortfolioCard";


function PortfolioSection() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const res = await getPortfolio();

      // Fix image path
     const formatted = res.data.map(item => ({
  ...item,
  image: item.image.startsWith("http")
    ? item.image
    : `http://127.0.0.1:8000${item.image}`
}));

      setItems(formatted);

    } catch (error) {
      console.error("Portfolio fetch error", error);
    }
  };

  if (!items.length) return null;

  return (
    <section className="bg-[#1B1C1A] text-white py-10 px-6 xl:px-[11%]">

      {/* TOP TEXT */}
      <div className="max-w-3xl mb-12">
        <p className="text-gray-300 mb-4">
          From strategy to stunning visuals, discover the services that empower our clients'
          success. Explore our portfolio of successful Projects.
        </p>

        <button className="bg-[#2A2A2A] px-5 py-2 text-sm rounded-full flex items-center gap-2">
          PORTFOLIOS
          <span className="text-yellow-400">→</span>
        </button>
      </div>

      <div className="w-full aspect-[1/1.1]  lg:aspect-[1/.9] flex gap-[1%]">

        {/* COLUMN 1 */}
        <div className="w-[33%] flex flex-col gap-[1%]">
          <div className="h-[43%]">
            <PortfolioCard item={items[0]} />
          </div>
          <div className="h-[57%]">
            <PortfolioCard item={items[1]} />
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="w-[33%] flex flex-col gap-[1%]">
          <div className="h-[53%]">
            <PortfolioCard item={items[3]} />
          </div>
          <div className="h-[47%]">
            <PortfolioCard item={items[2]} />
          </div>
        </div>

        {/* COLUMN 3 */}
        <div className="w-[33%] flex flex-col gap-[1%]">
          <div className="h-[62%]">
            <PortfolioCard item={items[4]} />
          </div>
          <div className="h-[37%]">
            <PortfolioCard item={items[5]} />
          </div>
        </div>

      </div>

    </section>
  );
}

export default PortfolioSection;