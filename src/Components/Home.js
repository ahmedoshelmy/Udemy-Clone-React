import React from "react";
import CoursesSection from "../Courses-Section";
import CourseCard from "./CourseCard";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Courses_Section from "../Courses-Section";
function Home(props) {
  const data = props.data;
  return (
    <div>
      <NavigationBar />
      <Header />
      <Courses_Section data={data} />
      {/* <CourseCard {...course} /> */}
      {/* <CourseCard {...props.data[1]} /> */}
    </div>
  );
}

export default Home;
