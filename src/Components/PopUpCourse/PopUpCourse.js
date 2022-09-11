import React from 'react'
import Add_to_Cart from './Add to Cart'
import Buy_now from './Buy_now'
import './PopUpCourse.css'
import Course_Detail_Img from '../Course_Details/Course_Detail_Img'
import Price from '../Price'
function PopUpCourse(props) {
  const course = props.course
  return (
    <div className="popup-course card">
        <Course_Detail_Img img={course.image_304x171?course.image_304x171:""}/>
        <Price price ={course.price.list_price.amount}/>
        <Add_to_Cart/>
        <Buy_now />
        <h3>This course includes</h3>
    </div>
  )
}

export default PopUpCourse