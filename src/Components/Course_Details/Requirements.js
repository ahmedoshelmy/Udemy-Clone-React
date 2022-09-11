import React from 'react'

function Requirements(props) {
  const data = props.data
  return (
    <div>
      <h2>Requirements</h2>
      <div className='Requirements-div'>
      <ul className='Requirements-List'> 
        {data.map(e=>{
          return <li className='requirements-item'>{e}</li>
        })}
      </ul>
      </div>
    </div>
  )
}

export default Requirements