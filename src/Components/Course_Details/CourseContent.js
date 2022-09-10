import React from 'react'
import DropDownElement from './DropDownElement';

function CourseContent(props) {
    const data = props.data
  return (
    <div className='course-content'>
      <h3>Course Content</h3>
      {data.map(e=>{
        return <DropDownElement data={e}/>
      })}
    </div>
  )
}

export default CourseContent