import { useEffect, useState } from "react"
import TopReviewCard from "./TopReviewCard"
import ListReviewCard from "./ListReviewCard"
import API from "../services/api"

const ReviewSection = () => {

  const [reviews, setReviews] = useState([])

  useEffect(() => {
  API.get("/api/review/")
    .then(res => setReviews(res.data))
    .catch(err => console.log(err));
}, []);

  const topReviews = reviews.slice(0, 2)
  const listReviews = reviews.slice(2)

  return (
    <section className="py-16 bg-[#212121] px-6 xl:px-[11%]">

      {/* Heading */}
      <div className="mb-8">
        <p className="text-gray-400 text-sm">Client</p>
        <h2 className="text-3xl font-bold text-orange-500">Reviews</h2>
      </div>

      {/* Top 2 Reviews */}
      <div className="grid  md:grid-cols-2 gap-6 mb-10">
        {topReviews.map(item => (
          <TopReviewCard key={item.id} item={item} />
        ))}
      </div>

      {/* List Reviews */}
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
        {listReviews.map(item => (
          <ListReviewCard key={item.id} item={item} />
        ))}
      </div>

    </section>
  )
}

export default ReviewSection