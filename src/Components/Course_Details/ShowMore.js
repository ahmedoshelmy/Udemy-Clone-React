import React, { useState } from 'react'

function ShowMore(props) {
   const data = props.data
    const [visible,setVisible] = useState(false)
  return (
    <div>
         <p>{visible? data:data.substring(0,250)}<span id="dots">...</span>
                    <button onClick={(()=>{
                        console.log(visible);
                        setVisible(!visible)
                    })} id="myBtn">
                        {<span id="btnText">{visible? "Show less" : "Show more"}</span>}  </button>
                        {!visible &&<i id="angle-down" class="uil uil-angle-down"></i>}
                        {visible &&<i id="angle-up" class="uil uil-angle-up"></i>}
                  
                </p>
    </div>
  )
}

export default ShowMore