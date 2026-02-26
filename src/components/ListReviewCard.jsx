const ListReviewCard = ({ item }) => {
  return (
    <div className="relative h-64 rounded-xs overflow-hidden group">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{
          backgroundImage: `url(${item.secondary_image})`
        }}
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content */}
      <div className="relative h-full flex items-end p-4 text-white">
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-xs">{item.position}</p>
        </div>
      </div>

    </div>
  )
}

export default ListReviewCard;