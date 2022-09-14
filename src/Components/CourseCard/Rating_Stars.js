import React from 'react'

function Rating_Stars(props) {
  const rating  = props.rating
  return (
    <div className="stars">
    <i className="course-rate">{Math.round(rating * 10) / 10}</i>
    <i className="fa fa-star checked"></i>
    <i className="fa fa-star checked"></i>
    <i className="fa fa-star checked"></i>
    <i className="fa fa-star checked"></i>
    <i className="fa-solid fa-star-half-stroke"></i>
  </div>
  )
}

export default Rating_Stars