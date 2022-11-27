import React, { useState, useEffect } from "react";
import Mainmenu from "./Mainmenu";
import './App.css';
import axios from "axios";


function Register() {
  
  const [data, setData] = useState({
    first_name:"",
    last_name:"",
    email:"",
    password:""
  });

  const handleChange=(e)=>{
    setData({ ...data, [e.target.name]: e.target.value })
  }

const submitForm=(e)=>{
    e.preventDefault();

    const sendData = {
      first_name:data.first_name,
      last_name:data.last_name,
      email:data.email,
      password:data.password
    }
    
    console.log(sendData);
    
    axios.post('http://localhost/reactapi/register.php',sendData)
    .then(result=>{
      if(result.data.Status="success"){
        console.log(result.data.Status);
      }
    });
  

}

  

  return (
     
    <div className="main-box">
      <div>
        < Mainmenu />
      </div >
      <form onSubmit={submitForm} >
      <div className="row">
        <div className="col-md-12 text-center text-info"><h3>Register</h3></div>
      </div>
       
      <div className="inner-box">
        <div className="row">
          <label for="first_name" class="text-info">First Name:</label>
          <input type="text" name="first_name" className="form-control" onChange={handleChange} value={data.first_name} />
        </div>
     
        <div className="row">
          <label for="last_name" class="text-info">Last Name:</label>
          <input type="text" name="last_name" className="form-control" onChange={handleChange} value={data.last_name} />
        </div>

        <div className="row">
          <label for="email" class="text-info">Email:</label>
          <input type="text" name="email" className="form-control" onChange={handleChange} value={data.email} />
        </div>

        <div className="row">
          <label for="password" class="text-info">Password:</label>
          <input type="text" name="password" className="form-control" onChange={handleChange} value={data.password} />
        </div>
      
        <div className="row">
        <input type="submit" name="submit" class="btn btn-info btn-md" value="submit" />
        </div>

      </div>
      </form>  
     

    </div>
  );
}

export default Register;
