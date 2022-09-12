import React from "react";
import { useLocation } from "react-router-dom";
import Course_Details_Header from "./Course_Details_Header";
import './Course_Details.css'
import PopUpCourse from '../PopUpCourse/PopUpCourse'
import WhatYoullLearn from "./WhatYoullLearn";
import CourseContent from "./CourseContent";
import NavigationBar from "../NavigationBar";
import Requirements from "./Requirements";
import Description from "./Description";
import { useSearchParams } from "react-router-dom";
import TestComponent from "./TestComponent"
import Instructor from "./Instructor";
function CourseDetails(props) { 
 const location = useLocation()
 const {course,course_detail} = location.state
 console.log(course_detail);
 
  return <div  className='course-details'>
    <NavigationBar />
    <PopUpCourse course ={course}/>
    <Course_Details_Header course={course}/>
    <div className="course-details-body">
    <WhatYoullLearn  data ={course.objectives_summary}/>
    <CourseContent data={course_detail.curriculum_context.data.sections}/>
    <Requirements data={course_detail.details.Requirements}/>
    <Description data ={course_detail.details.description} />
    <Instructor />
    </div>
  </div>;
}

export default CourseDetails;
