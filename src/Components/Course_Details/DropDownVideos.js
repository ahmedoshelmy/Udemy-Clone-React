import React from 'react'
import DropDownVideo from './DropDownVideo'

function DropDownVideos(props) {
    const data = props.data
  return (
    <div>
        {
            data.map(e=>{
                return <DropDownVideo data={e}/>
            })
        }
    </div>
  )
}

export default DropDownVideos