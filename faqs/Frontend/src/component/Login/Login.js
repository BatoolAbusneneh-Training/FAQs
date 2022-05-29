import "./login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../reducer/login";
import "bootstrap/dist/css/bootstrap.min.css";
const Login = () => {
  const state = useSelector((state) => {
    return {
      isLoggedIn: state.loginReducer.isLoggedIn,
      token: state.loginReducer.token,
    };
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [passworrd, setPassworrd] = useState("");
  const [message, setMessage] = useState("");
  const userLogin = { email, passworrd };

  const login = () => {
    axios
      .post("http://localhost:5000/login", userLogin)

      .then(async (result) => {
        dispatch(loginUser(result.data.token));
        navigate("/faqs");
        localStorage.setItem("token", result.data.token);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <form className="form">
      <h2 className="text-left">Login</h2>
  
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="floatingInput">Email</label>
      </div>
      <br />
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={(e) => {
            setPassworrd(e.target.value);
          }}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <br /> <br />
      <button
        id="login"
        type="button"
        className="btn btn-warning"
        onClick={login}
      >
        Login
      </button>
      <br /> <br />
      <p className="text-left">
        Players: Upload a game first to
        <a href="/users"> create your profile. </a>
        Courses: Create an account first to order your cards.
      </p>
    </form>
  );
};
export default Login;
