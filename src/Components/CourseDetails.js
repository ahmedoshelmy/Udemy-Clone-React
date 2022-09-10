import React from "react";
import { useLocation } from "react-router-dom";
import Course_Details_Header from "./Course_Details/Course_Details_Header";
import './Course_Details/Course_Details.css'
import PopUpCourse from './PopUpCourse/PopUpCourse'
import WhatYoullLearn from "./Course_Details/WhatYoullLearn";
import CourseContent from "./Course_Details/CourseContent";
import NavigationBar from "./NavigationBar";

function CourseDetails(props) { 
 const location = useLocation()
 const {course,course_detail} = location.state
  return <div  className='course-details'>
    <NavigationBar />
    <Course_Details_Header course={course}/>
    <WhatYoullLearn  data ={course.objectives_summary}/>
    <CourseContent data={course_detail.curriculum_context.data.sections}/>
    <PopUpCourse course ={course}/>
  </div>;
}

export default CourseDetails;
