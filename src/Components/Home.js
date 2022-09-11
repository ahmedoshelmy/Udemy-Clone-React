import React, { useEffect } from "react";
import CoursesSection from "./Courses-Section";
import CourseCard from "./CourseCard";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Courses_Section from "./Courses-Section";
import Courses_Groups from "./GroupedCourses";
import Add_to_Cart from "./PopUpCourse/Add to Cart";
import PopUpCourse from "./PopUpCourse/PopUpCourse";
import { useSearchParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useState } from "react";
function filter_courses(filter_value,courses){
  filter_value = filter_value.toUpperCase()
  courses = courses.filter(
    (course) => course.title.toUpperCase().indexOf(filter_value) > -1
  );
  console.log(filter_value,courses);
  return courses
}
function Home(props) {
  const data = props.data 
  // console.log(data);
  const courses_reviews = props.courses_reviews
  const courses_details = props.courses_details
  const [courses,setCourses] = useState(props.data)
  const [searchState,setSearchState] = useState("")
  const [searchParams,setSearchParams] = useSearchParams("")
  // console.log(courses);
  const onChange = (event) => {
    setSearchState(event.target.value);
    event.preventDefault();
}
const onClick = () =>{
  setSearchParams(searchState)
  searchParams && setCourses(filter_courses(searchState,data))
}
useEffect (()=>{
  setCourses(data)
},[data])
  return (
    <div>
      <NavigationBar onChange={onChange} onClick={onClick}/>
      <Header />
      <Courses_Section data = {courses} courses_details={courses_details} courses_reviews={courses_reviews}/>
    </div>
  );
}

export default Home;
