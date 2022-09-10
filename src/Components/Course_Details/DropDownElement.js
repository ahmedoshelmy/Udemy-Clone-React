import React, { useState } from 'react'

function DropDownElement(props) {
    const data = props.data
    const title = data.title
    const count = data.lecture_count
    const duration = Math.floor(data.content_length/60)
    const [open,setOpen] = useState(false)
    console.log(data);
  return (
    <span className='drop-down card'>
        <h4 className='drop-down-element '>{title}</h4>
        <h5 className='drop-down-count-'>{count} Lectures.{duration} min</h5>
    </span>
  )
}

export default DropDownElement