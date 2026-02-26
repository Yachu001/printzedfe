const TopReviewCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xs p-6 flex gap-4 shadow-md aspect-[1/.46]">

      <div className=" w-[30%] lg:w-[25%] flex items-center">
        <img
        src={item.primary_image}
        alt={item.name}
        className="w-full aspect-square rounded-full object-cover"
      />
      </div>

      <div className="w-[70%] lg:w-[75%]">
        <h3 className="font-semibold text-[1.9rem]">
          {item.service_provided}
        </h3>

        <div className="text-yellow-400 text-[1.4rem]">
          {"★".repeat(item.rating)}
          {"☆".repeat(5 - item.rating)}
        </div>

        <p className="text-[1.1rem] md:text-[.9rem] lg:text-[1rem] text-gray-600 line-clamp-3 mt-2">
          {item.feedback}
        </p>
      </div>

    </div>
  )
}

export default TopReviewCard