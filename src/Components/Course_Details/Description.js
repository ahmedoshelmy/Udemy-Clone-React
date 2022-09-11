import React from 'react'

function Description(props) {
    const data = props.data
  return (
    <div>
      <h2>Description</h2>
      <div className='Requirements-div'>
      <p>{data}</p>
      </div>
    </div>
  )
}

export default Description