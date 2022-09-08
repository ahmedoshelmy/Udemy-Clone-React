import React from 'react'

function WhatYoullLearn(props) {
    const data_list = props.data
    console.log(data_list);
  return (
    <div className='card'>
        <h3>What you'll learn</h3>
        <div className='objectives-list row'>
            {
                data_list.map((item,idx)=>{
                    return <div key={idx} className='col-md-6'>{item}</div>
                })
            }
        </div>
    </div>
  )
}

export default WhatYoullLearn