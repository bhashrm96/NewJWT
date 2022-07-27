import React, {useState} from 'react'
import Input from './Input'
import Button from './Button'
import Button2 from './Button2'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Register() {

  const navigate = useNavigate()

  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    pass: "",
    passconfirm: ""
  })
  
  function handleChange(e)
  {
    const {name, value} = e.target
    setData((pValue)=>{
      return(
        {
          ...pValue,
          [name]: value
        })
    })
  }

  function handleSubmit(e)
  {
    e.preventDefault()

    axios.post("http://localhost:5000/register", {
    name: data.name,
    email: data.email,
    number: data.number,
    pass: data.pass
    })

    setData({
      name: "",
      email: "",
      number: "",
      pass: "",
      passconfirm: ""
    })

    navigate('/')

    alert('Sucessfully Registered')
  }

  return (
    <div className='flex'>
      <div className='regstyle'>
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <Input value={data.name} change={handleChange} type = "text" name="name" placeholder = "Your Name"/>
            <Input value={data.email} change={handleChange} type = "email" name="email" placeholder = "Your Email" />
            <Input value={data.number} change={handleChange} type = "text" name="number" placeholder = "Your Phone"/>
            <Input value={data.pass} change={handleChange} type = "password" name="pass" placeholder = "New Password" />
            <Input value={data.passconfirm} change={handleChange} type = "password" name="passconfirm" placeholder = "Confirm Password" />
            <Button button = "Register"/>
          </form>
        </div>
      <div>
      <img src="https://media.istockphoto.com/vectors/registration-abstract-concept-vector-illustration-vector-id1305268276?k=20&m=1305268276&s=612x612&w=0&h=OmqJgWReL0TGm9UXp21uFeYooLhoQ4SWLLz7tXH6eUk=" alt="" />
      <Button2 button = "Already Have an Account?" />
    </div>  
    </div>
    </div>
  )
}

export default Register