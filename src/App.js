import { Route, Routes } from "react-router-dom";
import "./App.css";
import CourseDetails from "./Components/CourseDetails";
import FetchCourses from "./Data/FetchCourses";
import Home from "./Components/Home";

function App() {
  // console.log(this.props);
  // const { courses_data } = this.props;
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Course-Details" element={<CourseDetails />} />
    </Routes>
  );
}

export default App;
