import {useState} from 'react'
import  './LoginForm.css'


export function  LoginForm() {
      const [showPassword, setShowPassword] = useState(false);

      function toggleShowPassword() {
        setShowPassword(!showPassword);
      }
      return (
        <>
          <div>
            <input className = "email" placeholder = "Email"/>
          </div>
          <div>
            <input className = "password" 
            placeholder = "Password" 
            type = {showPassword ? 'text' : 'password'}
          />
          <button
            className = "show-button"
            onClick = {toggleShowPassword}
          >
          {showPassword ? 'Hide' : 'Show'}
          </button>

          </div>
          <button className = "login-button"> Login </button>
          <button className = "login-button"> Sign up </button>
        </>
      );
     }