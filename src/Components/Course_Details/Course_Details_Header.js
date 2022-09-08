import React from 'react'
import Rating_Stars from '../Rating_Stars'
import Course_Detail_Img from './Course_Detail_Img'
function Course_Details_Header(props) {
    const course = props.course
    console.log(course);
  return (
    <header className='Course_Details_Header'>
        <div>
        <h2 className='course-header'>{course.title}</h2>
        <h4 className='course-headline'>{course.headline}</h4>
             <span className='course-details-span'>
            <Rating_Stars rating = {course.rating}/>
            <p className='reviews'>{course.num_reviews} ratings</p>
            <p className='students'>{course.num_subscribers} Students</p>
            </span>
            <span className='course-details-span'>
            <p className='students'>Created by {course.visible_instructors[0].title},{course.visible_instructors[1].title}</p>
            </span>
        </div>
    </header>
  )
}

export default Course_Details_Header