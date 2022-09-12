import { Route, Routes } from "react-router-dom";
import "./App.css";
import CourseDetails from "./Pages/CourseDetails";
import FetchCourses from "./Data/FetchCourses";
import Home from "./Pages/Home";
import React, { useEffect, useState } from "react";
import axios from "axios";
import NavigationBar from "./Components/NavigationBar";
import { useSearchParams } from "react-router-dom";
function filter_courses(filter_value,courses){
  filter_value = filter_value.toUpperCase()
  courses = courses.filter(
    (course) => course.title.toUpperCase().indexOf(filter_value) > -1
  );
  console.log(filter_value,courses);
  return courses
}
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
  const data = courses
  const [searchState,setSearchState] = useState("")
  const [searchParams,setSearchParams] = useSearchParams("")
  const onChange = (event) => {
    setSearchState(event.target.value);
    event.preventDefault();
}
const onClick = () =>{
  setSearchParams(searchState)
  searchParams && setCourses(filter_courses(searchState,data))
}
// useEffect (()=>{
//   setCourses(data)
// },[data])
  return (
    <div>
     <NavigationBar onChange={onChange} onClick={onClick}/>
    <Routes>
      <Route path="/" element={<Home data={courses} courses_details={courses_details}  courses_reviews={courses_reviews}  />} />
      <Route path="Course-Details/:id" element={<CourseDetails/>}/>
    </Routes>
    </div>
  );
}

export default App;
