import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating_Stars from "./Rating_Stars";
import Rating from "./Rating_Stars";
import { useState,useEffect } from "react";
import axios from "axios";
function CourseCard(props) {
  const course = props.course
  console.log(course);
  const [course_detail, setcourse_detail] = useState([]);
  useEffect(() => {
      axios
      .get(`http://localhost:3005/${course.id}`)
      .then((res) => {
        console.log(res);
        setcourse_detail(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);
  return (
    <div className="course">
          <Link to={`Course-Details/:${course.id}`}
      state={{
        course:course,
        course_detail:course_detail
      }}
    > 
      <img className="course-img" src={course.image_750x422} alt="${course.alt}"></img>
      <a href={course.image_750x422}>
        <h4 className="course-title">{course.title}</h4>
      </a>
      <p className="course-instructor">{course.visible_instructors[0].title}</p>
      <Rating_Stars rating = {course.rating}/>
      <Price price ={course.price.list_price.amount}/>
      </Link>
    </div>

  );
}

export default CourseCard;
