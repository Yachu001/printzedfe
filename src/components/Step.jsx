function Step({ image, title }) {
  return (
    <div className="flex flex-col items-center text-center gap-4">

      <img
        src={image}
        alt={title}
        className="w-14 h-14 object-contain"
      />

      <p className="text-white text-sm md:text-base">
        {title}
      </p>

    </div>
  );
}

export default Step;