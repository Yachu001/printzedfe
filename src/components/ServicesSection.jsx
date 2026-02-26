import { useEffect, useState } from "react";
import { getServices } from "../services/baseService"
import ServiceItem from "../components/ServiceItem";

function ServicesSection() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await getServices();

      const formatted = res.data.map(item => ({
        ...item,
        image: item.image.startsWith("http")
          ? item.image
          : `http://127.0.0.1:8000${item.image}`
      }));

      setItems(formatted);

    } catch (error) {
      console.error("Services fetch error", error);
    }
  };

  if (!items.length) return null;

  return (
    <section className="bg-[#212121] text-white py-16 px-6 lg:px-[3%] xl:px-[15%]">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row gap-10 mb-10">

        {/* LEFT TITLE */}
        <div className="lg:w-1/3">
          <h2 className="text-3xl font-semibold text-center lg:text-start leading-tight">
            SERVICES  WE PROVIDE
          </h2>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:w-2/3 border-l-4 border-orange-500 pl-6 text-white">
          enim. libero, amet, Ut quis enim, libero, non tincidunt In vitae id tincidunt
          ex. Praesent Nunc dui diam non. adipiscing ultrices Vestibulum laoreet
          massa id varius varius Lorem eu placerat. nec consectetur in elit fringilla
          cursus non commodo eu elementum consectetur fringilla dolor tempor sit
          tincidunt lobortis,
        </div>

      </div>

      {/* SERVICES LIST */}
      <div className="border-b border-gray-600">

        {items.map((item, index) => (
          <ServiceItem key={index} item={item} />
        ))}

      </div>

    </section>
  );
}

export default ServicesSection;