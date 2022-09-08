import React from "react";
import { useLocation } from "react-router-dom";

function CourseDetails(props) { 
 const location = useLocation()
 const {course} = location.state
 console.log(course);
  return <div>CourseDetails</div>;
}

export default CourseDetails;
