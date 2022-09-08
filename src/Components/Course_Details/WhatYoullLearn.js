import React from 'react'
import {TiTick} from 'react-icons/ti';
function WhatYoullLearn(props) {
    const data_list = props.data
    console.log(data_list);
  return (
    <div className='card'>
        <h3>What you'll learn</h3>
        <div className='objectives-list row'>
            {
                data_list.map((item,idx)=>{
                    return (<span className='objective col-md-6 col-lg-6'><i class="glyphicon glyphicon-ok"/> <span key={idx} className=''>{item}</span></span>)
                })
            }
        </div>
    </div>
  )
}

export default WhatYoullLearn