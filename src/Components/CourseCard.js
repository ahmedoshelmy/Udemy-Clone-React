import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating_Stars from "./Rating_Stars";
import Rating from "./Rating_Stars";

function CourseCard(course) {
  console.log(course);
  return (
    <div className="course">
          <Link to={`Course-Details/:${course.id}`}
      state={{
        course:course
      }}
    > 
      <img src={course.image_750x422} alt="${course.alt}" height="135"></img>
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
