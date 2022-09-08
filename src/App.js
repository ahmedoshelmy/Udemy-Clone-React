import { Route, Routes } from "react-router-dom";
import "./App.css";
import CourseDetails from "./Components/CourseDetails";
import FetchCourses from "./Data/FetchCourses";
import Home from "./Components/Home";
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3005/summary`)
      .then((res) => {
        console.log(res.data[0].items);
        setData(res.data[0].items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home data={data}/>} />
      <Route path="Course-Details/:id" element={<CourseDetails/>}/>
    </Routes>
  );
}

export default App;
