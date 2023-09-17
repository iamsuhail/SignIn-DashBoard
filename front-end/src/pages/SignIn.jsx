import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import "./SignIn.css";
import { signInWithGoogle } from "./Firebase";
import Dashboard from "./Dashboard";
const SignIn = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    await signInWithGoogle();
    navigate("/Dashboard");
  };
  
  
  
    return (
        <div className="sign-in">
          <div className="overlap-wrapper">
            <div className="overlap">
              <div className="overlap-group">
                <div className="text-wrapper">Board.</div>
                <div className="div">LOGO</div>
                <div className="frame">
                <a href="https://github.com/iamsuhail"><img className="vector" src="Vector.svg" /></a>
                <a href="https://twitter.com/"><img className="img" alt="Vector" src="Vector (1).svg" /></a>
                <a href="https://www.linkedin.com/in/muhammad-suhail-s123/"><img className="carbon-logo-linkedin" alt="Carbon logo linkedin" src="carbon_logo-linkedin.svg" /></a>
                <a href="https://discord.com/"><img className="carbon-logo-discord" alt="Carbon logo discord" src="carbon_logo-discord.svg" /></a>
                </div>
              </div>
              <div className="login-form">
              <div className="overlap-2">
              <form>
                <label for="fname" className="text-wrapper-5">Email Address</label>
                <div className="div-wrapper" type="input">
                  <input type="text" id="fname" name="fname" className="text-wrapper-2"/>
                </div>
                <label for="lname" className="text-wrapper-6">Password</label>
                <div className="overlap-3">
                <input type="password" id="lname" name="lname" className="text-wrapper-3"/>
                </div>
                <div className="text-wrapper-7">Forgot password?</div>
                <div className="button-sign-in">
                    <div className="overlap-group-2">
                      <button className="text-wrapper-4" onClick={handleSignInWithGoogle}>Sign In</button>
                    </div>
                  </div>
              </form> 
              </div>
                <p className="don-t-have-an">
                  <span className="span">Don’t have an account? </span>
                  <a className="text-wrapper-8" onClick={handleSignInWithGoogle}>Register here</a>
                </p>
              </div>
              <div className="google-sign-in">
                <div className="overlap-4">
                  
        <button className="text-wrapper-9" onClick={handleSignInWithGoogle}>Signin With Google</button>
        
                  <img
                    className="google-icon"
                    alt="Google icon"
                    src="https://c.animaapp.com/8ItR4IaS/img/google-icon-1.svg"
                  />
                </div>
              </div>
              <div className="apple-sign-in">
                <div className="overlap-4">
                  <a className="text-wrapper-10" href="/">Sign in with Apple</a>
                  <img className="apple" alt="Apple" src="https://c.animaapp.com/8ItR4IaS/img/apple-1.svg" />
                </div>
              </div>
              <div className="text-wrapper-11" >Sign In</div>
              <p className="p">Sign in to your account</p>
            </div>
          </div>
        </div>
      );
};

export default SignIn;