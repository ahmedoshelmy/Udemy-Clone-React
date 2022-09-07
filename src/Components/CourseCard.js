import React from "react";

function CourseCard(course) {
  console.log(course);
  return (
    <div className="course">
      <img src={course.image_750x422} alt="${course.alt}" height="135"></img>
      <a href={course.image_750x422}>
        <h4 className="course-title">{course.title}</h4>
      </a>
      <p className="course-instructor">{course.visible_instructors[0].title}</p>
      <div className="stars">
        <i className="course-rate">{Math.round(course.rating * 10) / 10}</i>
        <i className="fa fa-star checked"></i>
        <i className="fa fa-star checked"></i>
        <i className="fa fa-star checked"></i>
        <i className="fa fa-star checked"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
      </div>
      <h4 className="course-price">E&#163;{course.price.list_price.amount}</h4>
    </div>
  );
}

export default CourseCard;
