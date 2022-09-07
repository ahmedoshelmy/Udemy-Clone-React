import React from 'react'
import CourseCard from './CourseCard';

function groupCourses(data, n) {
    var group = [];
    for (let i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0) j++;
      group[j] = group[j] || [];
      group[j].push(data[i]);
      console.log(group[j]);
    }
    console.log(group);
    return group;
  }
  function showGroupOfCourses(courses){
    return courses.map((course,i)=>{
        return <CourseCard {...course} />
    })
  }
function Courses_Groups(props) {
  console.log(props.courses);
  const courses = props.courses
    const grouped_courses = groupCourses(courses,5)
    console.log(grouped_courses);
   const Content =  grouped_courses.map((courses,i)=>{
        return (
        <div className={`carousel-item ${(i === 0) ? "active" : ""}`}>
        <div className="courses" id="courses">
           {showGroupOfCourses(courses)}
        </div>
        </div>
        )
    })
  return (
    <div>{Content}</div>
  )
}

export default Courses_Groups