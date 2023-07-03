import React from 'react'
import './SignUp.css'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="form-cont">
      <div class="logo-wrap">
        <h1 class="logo">HireSum</h1>
      </div>
      <h1 class="main-head">Login Page</h1>
      <hr />
      <form>
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Kabir Roy"required />
        </div>

        <div class="form-group">
          <label for="password">Enter Password:</label>
          <input type="password" id="password" name="password" required placeholder="123@Abc"/>
        </div>

        <div class="form-group">
          <p>Not a memeber? <strong><Link to='/signup'>Sign Up</Link></strong></p>
        </div>

        <Link to='/candidate' type="submit" class="submit-btn">
          Submit
        </Link>
      </form>
    </div>
  )
}

export default Login
