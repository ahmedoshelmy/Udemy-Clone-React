import React from "react";
import CoursesSection from "./Courses-Section";
import CourseCard from "./CourseCard";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Courses_Section from "./Courses-Section";
import Courses_Groups from "./GroupedCourses";
function Home(props) {
  console.log(props.data);
  return (
    <div>
      <NavigationBar />
      <Header />
      <Courses_Section data = {props.data}/>
      {/* <CourseCard {...course} /> */}
      {/* <CourseCard {...props.data[1]} /> */}
    </div>
  );
}

export default Home;
