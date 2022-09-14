import React from 'react'

const Price = (props) => {
    const price = props.price
  return (
    <h4 className="course-price">E&#163;{price}</h4>
  )
}

export default Price