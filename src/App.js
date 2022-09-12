import { Route, Routes } from "react-router-dom";
import "./App.css";
import CourseDetails from "./Components/Course_Details/CourseDetails";
import FetchCourses from "./Data/FetchCourses";
import Home from "./Components/Home";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [courses_details, setcourses_details] = useState([]);
  const [courses_reviews,setcourses_reviews] = useState ([])
  const [courses,setCourses] = useState([])
  useEffect(() => {
    axios
      .get(`http://localhost:3005/summary`)
      .then((res) => {
        // console.log(res);
        setCourses(res.data[0].items);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get(`http://localhost:3005/data`)
      .then((res) => {
        // console.log(res);
        setcourses_details(res.data[2]);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get(`http://localhost:3005/review`)
      .then((res) => {
        // console.log(res);
        setcourses_details(res.data[0].items);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home data={courses} courses_details={courses_details}  courses_reviews={courses_reviews}  />} />
      <Route path="Course-Details/:id" element={<CourseDetails/>}/>
    </Routes>
  );
}

export default App;
