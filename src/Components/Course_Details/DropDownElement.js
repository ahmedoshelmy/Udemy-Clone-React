import React, { useState } from 'react'
import DropDownVideos from './DropDownVideos'
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
function DropDownElement(props) {
    const data = props.data
    const title = data.title
    const count = data.lecture_count
    const duration = Math.floor(data.content_length/60)
    const [open,setOpen] = useState(false)
    console.log(data);
  return (
    <div>
    <span className='drop-down card' onClick={()=>{
        setOpen(!open)
    }}>
         {open?<KeyboardArrowDownSharpIcon fontSize="large"/>:<KeyboardArrowUpSharpIcon fontSize="large"/>}
        <h4 className='drop-down-element '>{title}</h4>
        <h5 className='drop-down-count-'>{count} Lectures.{duration} min</h5>
    </span>
    {open?<DropDownVideos data={data.items} />:""}
    </div>
  )
}

export default DropDownElement