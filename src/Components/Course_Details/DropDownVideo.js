import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
function DropDownVideo(props) {
    const data = props.data
  return (
    <span className='drop-down card'>
        <span className='drop-down-heading'>
        <PlayCircleIcon className='icon'/>
        <h5 className='drop-down-count-'>{data.title}</h5>
        </span>
        <h5 className='drop-down-count-'>{data.content_summary}</h5>    
    </span>
  )
}

export default DropDownVideo