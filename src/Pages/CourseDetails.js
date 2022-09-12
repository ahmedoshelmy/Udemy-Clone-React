import React from "react";
import { useLocation } from "react-router-dom";
import Course_Details_Header from "../Components/Course_Details/Course_Details_Header";
import '../Components/Course_Details/Course_Details.css'
import PopUpCourse from '../Components/PopUpCourse/PopUpCourse'
import WhatYoullLearn from "../Components/Course_Details/WhatYoullLearn";
import CourseContent from "../Components/Course_Details/CourseContent";
import NavigationBar from "../Components/NavigationBar";
import Requirements from "../Components/Course_Details/Requirements";
import Description from "../Components/Course_Details/Description";
import { useSearchParams } from "react-router-dom";
import TestComponent from "../Components/Course_Details/TestComponent"
import Instructor from "../Components/Course_Details/Instructor";
import Review from "../Components/Course_Details/Review";
import Reviews from "../Components/Course_Details/Reviews";
function CourseDetails(props) { 
 const location = useLocation()
 const {course,course_detail} = location.state
 console.log(course_detail);
 
  return <div  className='course-details'>
    <PopUpCourse course ={course}/>
    <Course_Details_Header course={course}/>
    <div className="course-details-body">
    <WhatYoullLearn  data ={course.objectives_summary}/>
    <CourseContent data={course_detail.curriculum_context.data.sections}/>
    <Requirements data={course_detail.details.Requirements}/>
    <Description data ={course_detail.details.description} />
    <Instructor />
    <Reviews />
    </div>
  </div>;
}

export default CourseDetails;
