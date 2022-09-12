import React from 'react'
import all, { reviews } from "./DummyReviews"
import Review from './Review'
function Reviews() {
  return (
    <div>
    <h2>Reviews</h2>
        {reviews.map((e)=>{
            return <Review review ={e}/>
        })}
        </div>
  )
}

export default Reviews