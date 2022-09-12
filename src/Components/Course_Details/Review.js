import React from 'react'

function Review(props) {
    const name = props.review.name
    const data = props.review.data
  return (
    <div>
    <div class="square">
        <div class="con">
            <div class="letters">AH</div>
            <div>Asif H. <br/><i class="uis uis-favorite col"></i><i class="uis uis-favorite col"></i><i
                    class="uis uis-favorite col"></i><i class="uil uil-star col"></i><i
                    class="uil uil-star col"></i>
                <strong class="grey"> 3 weeks ago</strong>
            </div>
        </div>
        <p>
            Sometimes confusing but was able to clarify. Good job nonetheless.
        </p>
    </div>
    </div>
  )
}

export default Review