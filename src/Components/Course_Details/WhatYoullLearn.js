import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
function WhatYoullLearn(props) {
    const data_list = props.data
  return (
    <div className='card what_youll_learn'>
        <h3>What you'll learn</h3>
        <div className='objectives-list row'>
            {
                data_list.map((item,idx)=>{
                    return (<span className='objective col-md-6 col-lg-6'><CheckIcon/> <span key={idx} className=''>{item}</span></span>)
                })
            }
        </div>
    </div>
  )
}

export default WhatYoullLearn