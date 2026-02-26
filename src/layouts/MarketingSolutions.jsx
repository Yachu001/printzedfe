import { useEffect, useState } from "react";
import MSolutionsCard from "../components/MSolutionsCard";
import { getMarketingSolutions } from "../services/baseService";


function MarketingSolutions() {

  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
  getMarketingSolutions()
    .then(res => setSolutions(res.data))
    .catch(err => console.log(err));
}, []);

  return (
    <section className=" text-white py-10 px-6">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-white">
          We craft custom solutions to help you achieve your marketing goals and objectives.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-4 xl:mx-[10%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((item, index) => (
          <MSolutionsCard key={index} item={item} />
        ))}
      </div>

    </section>
  );
}

export default MarketingSolutions;