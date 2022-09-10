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
  const courses = props.data 
  const courses_reviews = props.courses_reviews
  const courses_details = props.courses_details
  // console.log(courses_details);
  // console.log(courses);
  return (
    <div>
      <NavigationBar />
      <Header />
      <Courses_Section data = {courses} courses_details={courses_details} courses_reviews={courses_reviews}/>
    </div>
  );
}

export default Home;
