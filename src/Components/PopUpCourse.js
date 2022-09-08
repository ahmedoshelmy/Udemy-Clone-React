import React from 'react'
import Add_to_Cart from './PopUpCourse/Add to Cart'
import Buy_now from './PopUpCourse/Buy_now'
import './PopUpCourse/PopUpCourse.css'
function PopUpCourse(props) {
  return (
    <div className="popup-course">
        <Add_to_Cart/>
        <Buy_now />
    </div>
  )
}

export default PopUpCourse