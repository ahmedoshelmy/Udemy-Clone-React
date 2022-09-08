import React from "react";
import CoursesSection from "./Courses-Section";
import CourseCard from "./CourseCard";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Courses_Section from "./Courses-Section";
import Courses_Groups from "./GroupedCourses";
import Add_to_Cart from "./PopUpCourse/Add to Cart";
import PopUpCourse from "./PopUpCourse/PopUpCourse";
function Home(props) {
  console.log(props.data);
  return (
    <div>
      <NavigationBar />
      <Header />
      <Courses_Section data = {props.data}/>
    </div>
  );
}

export default Home;
