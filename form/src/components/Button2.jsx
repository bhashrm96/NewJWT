import React from 'react'
import { Link } from 'react-router-dom'

function Button2 (props) {
  return (
    <div className='btn2cont'>
      <Link className='btn2' to= {props.button==="Create an Account" ? '/register' : '/'}>{props.button}</Link> 
    </div>
  )
}

export default Button2
