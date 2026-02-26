function AboutSection() {
  return (
    <section id="ourworks" className="w-full bg-[#212121] text-white py-16 px-6 lg:px-[11%] ">

      <div className=" mx-auto flex flex-col lg:flex-row lg:items-center gap-10">

        {/* LEFT SIDE */}
        <div className="w-full lg:w-[35%]">

          <p className="text-[#FF5C00] text-[1.7rem] lg:text-[1.3rem] font-semibold mb-3">
            ABOUT US
          </p>

          <h2 className="text-[4.3rem] lg:text-[3rem] font-semibold leading-tight">
            CREATIVE <br />
            AGENCY
          </h2>

        </div>

        {/* RIGHT SIDE */}
        <div className=" w-full lg:w-[55%] flex flex-col justify-center">

          <p className="text-gray-300 text-[1.8rem] lg:text-[1.1rem]  leading-relaxed mt-9 mb-6 ">
            Nunc lorem, turpis convallis. Praesent elit vitae Morbi risus id Lorem
            Vestibulum placerat ipsum facilisis facilisis massa nibh dignissim,
            faucibus laoreet In at non eget Donec elit maximus consectetur nulla,
            sodales. vehicula, amet, dui.
          </p>

          <a
            href="#"
            className="text-[#FF5C00]  text-[1.5rem] lg:text-[1.1rem] hover:underline w-fit"
          >
            Read More
          </a>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;