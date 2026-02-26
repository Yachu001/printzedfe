import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
  setOpen(false);
};

  const openWhatsApp = () => {
  const phoneNumber = "+916282188851"; // without + or spaces
  const message = "Hello !";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};

  return (
    <div className=" fixed top-4 md:top-6 w-full flex justify-center z-50 px-4">
      <div className="w-full py-[2%] xl:py-[.7%] max-w-6xl bg-[#333232] backdrop-blur-md rounded-xl lg:mx-[10%] xl:mx-[18%] px-6  flex items-center justify-between border border-white/10">

        {/* Logo */}
        <h1 className="text-white text-2xl md:text-3xl font-bold">logo</h1>

        {/* Desktop Menu */}
        <ul className="hidden text-lg xl:text-sm md:flex gap-8 text-gray-300 items-center">
          <li onClick={() => scrollToSection("home")} className="hover:text-white cursor-pointer">Home</li>
          <li onClick={() => scrollToSection("ourworks")} className="hover:text-white cursor-pointer">CodeWorks</li>
          <li onClick={() => scrollToSection("services")} className="hover:text-white cursor-pointer">Services</li>
          <li onClick={() => scrollToSection("team")} className="hover:text-white cursor-pointer">Our Team</li>
        </ul>

        {/* Contact Button */}
        <div className="hidden text-lg xl:text-sm md:flex justify-between  gap-2.5 items-center bg-white/10 text-white px-4 py-1 rounded-full hover:bg-white/20 transition">
          <div onClick={() => scrollToSection("contact")} className="btn">Contact Us</div>
          <div onClick={openWhatsApp} className="btn text-green-500 hover:bg-green-400 hover:text-white"><FaWhatsapp /></div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-15  w-[90%] bg-[#333232] rounded-xl p-6 text-white md:hidden">
          <ul className="flex flex-col gap-4">
            <li>Home</li>
            <li>CodeWorks</li>
            <li>Services</li>
            <li>Our Team</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;