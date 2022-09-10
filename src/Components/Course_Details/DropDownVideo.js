import React from 'react'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
function DropDownVideo(props) {
    const data = props.data
  return (
    <span className='drop-down card'>
        <h5 className='drop-down-count-'>{data.title}</h5>
        <h5 className='drop-down-count-'>{data.content_summary}</h5>    
    </span>
  )
}

export default DropDownVideo