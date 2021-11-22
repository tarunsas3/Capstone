import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
import "./AuthForm.css";
import "font-awesome/css/font-awesome.min.css";

function AuthForm() {
  const [container, setContainer] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="wrapper">
      <div className={"container " + container}>
        {/* <div class="form-container sign-up-container">
          <form className="formContainer">
            <h1 className="displayTitle">Create Account</h1>
            <div class="social-container">
              <a className="linkTags social">
                <i class="fab fa-facebook-square fa-2x"></i>
              </a>
              <a className="linkTags social">
                <i class="fab fa-google-plus-square fa-2x"></i>
              </a>
              <a className="linkTags social">
                <i class="fab fa-linkedin-square fa-2x"></i>
              </a>
            </div>
            <span className="userChoice">
              or use your email for registration
            </span>
            <input className="inputContainer" type="text" placeholder="Name" />
            <input
              className="inputContainer"
              type="email"
              placeholder="Email"
            />
            <input
              className="inputContainer"
              type="password"
              placeholder="Password"
            />
            <button className="btn">Sign Up</button>
          </form>
        </div> */}
        <div class="form-container forgot-password-container">
          <form className="formContainer">
            <h1 className="displayTitle">Forgot Password</h1>
            <span className="userChoice passwordChoice">
              or contact customer support
            </span>
            <input
              className="inputContainer"
              type="email"
              placeholder="Email"
            />
            <button className="btn">Submit</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form className="formContainer">
            <h1 className="displayTitle">Sign in</h1>
            <div class="social-container">
              <a className="linkTags social">
                <i class="fab fa-facebook-square fa-2x"></i>
              </a>
              <a className="linkTags social">
                <i class="fab fa-google-plus-square fa-2x"></i>
              </a>
              <a className="linkTags social">
                <i class="fab fa-linkedin-square fa-2x"></i>
              </a>
            </div>
            <span className="userChoice">or use your account</span>
            <input
              className="inputContainer"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="inputContainer"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="btn" onClick={handleClick}>
              Sign In
            </button>

            <a
              className="linkTags"
              href="#"
              onClick={(e) =>
                setContainer("forgot-password-active") && e.preventDefault()
              }
            >
              Forgot your password?
            </a>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            {/* {container !== "forgot-password-active" ? (
              <div class="overlay-panel overlay-left">
                <h1>Hello, Learner!</h1>
                <p className="Description">
                  Enter your personal details and start journey with us
                </p>
                <h3 className="displaySubText">or</h3>
                <button
                  className="btn ghost"
                  onClick={(e) => setContainer("") && e.preventDefault()}
                >
                  Sign In
                </button>
              </div>
            ) : ( */}
            <div class="overlay-panel overlay-left">
              <h1 className="displayTitle">Hello, Learner!</h1>
              <p className="Description">
                We regret that you have forgotten your password enter your email
                address
              </p>
              <h3 className="displaySubText">or</h3>
              <button
                className="btn ghost"
                onClick={(e) => setContainer("") && e.preventDefault()}
              >
                Go Back
              </button>
            </div>
            {/* )} */}
            <div class="overlay-panel overlay-right">
              <h1 className="displayTitle">Welcome Back!</h1>
              <p className="Description">
                To keep connected with us please login with your credentials
              </p>
              {/* <h3 className="displaySubText">or</h3>
              <button
                className="btn ghost"
                onClick={(e) =>
                  setContainer("right-panel-active") && e.preventDefault()
                }
              >
                Sign Up
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
