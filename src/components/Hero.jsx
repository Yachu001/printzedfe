import herobg from '../assets/images/home/herobg.png'

function Hero() {
  return (
    <div id='home' className="relative w-full min-h-screen h-auto  flex items-end justify-center pb-[15vh] xl:pb-0 xl:mb-28  ">

      {/* Image */}
      <img
        src={herobg}
        alt="hero"
        className="
          absolute top-0 left-0
          w-full h-full
          object-cover object-center
          xl:h-full xl:
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0   bg-gradient-to-t 
        from-black/85 
        via-black/40 
        to-black/10">
      </div>

      {/* Content */}
      <div className="relative text-center px-4 md:px-6 max-w-3xl">

        <h4 className="text-orange-500 font-bold tracking-widest text-lg md:text-3xl">
          PRINTING & BRANDING SOLUTION
        </h4>

        <h1 className="text-4xl lg:text-9xl font-bold text-orange-500 mt-4">
          IN UAE
        </h1>

        <p className="text-white mt-4 text-lg md:text-2xl xl:text-xl leading-relaxed">
          We craft impactful Printing works, advertising, branding &
          digital marketing strategies to grow your brand and achieve measurable success!
        </p>

      </div>

    </div>
  );
}

export default Hero;