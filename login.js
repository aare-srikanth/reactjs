import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Mainmenu from './Mainmenu';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Login() {
    const [logindata, setLoginData] = useState(null);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const users = [{ username: "Aare", password: "123456" },{username:"Srikanth",password:"147852"}];
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const account = users.find((user) => user.username === email);
        console.log(logindata.ResCode);
        if (account && account.password === password) {
            if(logindata.ResCode === 1)
            navigate("/dashboard");
        }
      };
      
      useEffect(() => {
        // POST request using fetch inside useEffect React hook
        fetch('logindata.json',{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }})
            .then(response => response.json())
            .then(data => setLoginData(data));

    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

  return (
<div>    
<div>
    < Mainmenu />
</div >   
<div id="login">
        <h3 class="text-center text-white pt-5">Login form</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
<form id="login-form" class="form" action="" method="post" onSubmit={handleSubmit} >
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br/>
                                <input type="text" name="username" id="username" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control"/>
                                {email}
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br/>
                                <input type="text" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control"/>
                                {password}
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span>Remember me</span><span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br/>
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit" />
                            </div>
                            {/* <div id="register-link" class="text-right">
                                <Link to="/register">Register here</Link>
                            </div> */}
</form>
</div>
                </div>
            </div>
        </div>
    </div>
	</div>
  );
}

export default Login;
