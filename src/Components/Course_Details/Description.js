import React from 'react'
import ShowMore from './ShowMore'

function Description(props) {
    const data = props.data
  return (
    <div>
      <h2>Description</h2>
      <div className='Requirements-div'>
      <ShowMore data={data} />
      </div>
    </div>
  )
}

export default Description