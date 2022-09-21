import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Rating_Stars from "./Rating_Stars";
import Rating from "./Rating_Stars";
import { useState,useEffect } from "react";
import axios from "axios";
import { OverlayTrigger, Popover, PopoverBody, Tooltip } from "react-bootstrap";
import HoverCard from "../HoverCard/HoverCard";
import "./CourseCard.css"

function CourseCard(props) {
  const course = props.course
  console.log(course);
  const [course_detail, setcourse_detail] = useState([]);
  const popover = (props)=>(
    <Tooltip id="button-tooltip"{...props} >
    <HoverCard course={course} />
    </Tooltip>
)
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

    <OverlayTrigger 
    delay={{ show: 250, hide: 250 }} className='tippycard' overlay={popover} placement='top-end' trigger={['hover', 'focus']} interactive={true} >
      <Link to={`Course-Details/:${course.id}`}
    state={{
      course:course,
      course_detail:course_detail
    }}
  >
    <div className="course">
      <img className="course-img" src={course.image_750x422} alt="${course.alt}"></img>
      <a href={course.image_750x422}>
        <h4 className="course-title">{course.title}</h4>
      </a>
      <p className="course-instructor">{course.visible_instructors[0].title}</p>
      <Rating_Stars rating = {course.rating}/>
      <Price price ={course.price.list_price.amount}/>
    </div>
    </Link>
    </OverlayTrigger>
  );
}

export default CourseCard;
