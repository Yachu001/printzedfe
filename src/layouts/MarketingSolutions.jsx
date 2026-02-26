import { useEffect, useState } from "react";
import MSolutionsCard from "../components/MSolutionsCard";


function MarketingSolutions() {

  const [solutions, setSolutions] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/marketing-solutions/")
      .then(res => res.json())
      .then(data => setSolutions(data));
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