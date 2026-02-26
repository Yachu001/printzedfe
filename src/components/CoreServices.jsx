import { useEffect, useState } from "react";
import { getCoreServices } from "../services/baseService";
import CoreServiceCard from "../components/CoreServicesCard";

function CoreServices() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await getCoreServices();

      const formatted = res.data.map(item => ({
        ...item,
        image: item.image.startsWith("http")
          ? item.image
          : `http://127.0.0.1:8000${item.image}`
      }));

      setServices(formatted);

    } catch (error) {
      console.error("Core Services fetch error", error);
    }
  };

  if (!services.length) return null;

  return (
    <section id="services" className="bg-[#212121] text-white py-16 px-6 xl:px-[11%]">

      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-14">
        OUR CORE SERVICES
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-14 gap-x-6 place-items-center">

        {services.map((item, i) => (
          <CoreServiceCard key={i} item={item} />
        ))}

      </div>

    </section>
  );
}

export default CoreServices;