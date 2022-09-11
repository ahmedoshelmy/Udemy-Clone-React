import React from "react";
import { useLocation } from "react-router-dom";
import Course_Details_Header from "./Course_Details/Course_Details_Header";
import './Course_Details/Course_Details.css'
import PopUpCourse from './PopUpCourse/PopUpCourse'
import WhatYoullLearn from "./Course_Details/WhatYoullLearn";
import CourseContent from "./Course_Details/CourseContent";
import NavigationBar from "./NavigationBar";
import Requirements from "./Course_Details/Requirements";
import Description from "./Course_Details/Description";

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
    </div>
  </div>;
}

export default CourseDetails;
