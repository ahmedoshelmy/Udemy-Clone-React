import React from "react";
import { useLocation } from "react-router-dom";
import Course_Details_Header from "./Course_Details/Course_Details_Header";
import './Course_Details/Course_Details.css'
import PopUpCourse from './PopUpCourse/PopUpCourse'
import WhatYoullLearn from "./Course_Details/WhatYoullLearn";

function CourseDetails(props) { 
 const location = useLocation()
 const {course} = location.state
 console.log(course);
  return <div>
    <Course_Details_Header course={course}/>
    <WhatYoullLearn data ={course.objectives_summary}/>
    <PopUpCourse course ={course}/>
  </div>;
}

export default CourseDetails;
