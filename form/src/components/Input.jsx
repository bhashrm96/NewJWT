import React from 'react'

function Input(props) {

  return (

        <input type={props.type} className='user' value={props.value} name={props.name} placeholder={props.placeholder} onChange={props.change}/>
        
  )
}

export default Input