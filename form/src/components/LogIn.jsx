import React,{useState} from 'react'
import Input from './Input'
import Button from './Button'
import Button2 from './Button2'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function LogIn() {

  const navigate = useNavigate()

  const [data, setData] = useState({
    email: "",
    pass: "",
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
    
    console.log(data)

  }

  function handleSubmit(e)
  {
    e.preventDefault()

    axios.post("http://localhost:5000/login", {
    email: data.email,
    pass: data.pass
    }).then((res)=> {

      if(res.data==="success")
      {
          navigate('/home')
      }
      else
      {
          alert(res.data)
      }
    })

  }


  return (
    <div className='flex'>
<div className='logstyle'>


<div>

<img src="https://st2.depositphotos.com/1001599/43046/v/380/depositphotos_430460192-stock-illustration-sign-page-abstract-concept-vector.jpg?forcejpeg=true" alt="" />
<Button2 button = "Create an Account" />
</div>

  <div>
  <h1>LogIn</h1>
  <form onSubmit={handleSubmit}>
        <Input change={handleChange} type = "text" name="email" placeholder="Your Email" />
      <Input change={handleChange} type = "password" name="pass" placeholder="Your Password" />
      <Button button = "Login" />
      </form>
  </div>    

    </div>

    </div>
    
    
  )
}

export default LogIn