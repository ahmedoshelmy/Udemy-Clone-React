import React from 'react'

const Course_Detail_Img = (props) => {
    const img_src = props.img
  return (
    <div><img className='pop-course-img' src={img_src}/></div>
  )
}

export default Course_Detail_Img