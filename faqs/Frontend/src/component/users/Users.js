import "./users.css";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [passworrd, setPassworrd] = useState("");
  const [message, setMessage] = useState("");

  const information = { firstName, lastName, country, email, passworrd };
  const navigate = useNavigate();
  const checkFormValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,8}(.[a-z{3,8}])?/g;

    if (
      regEx.test(email) &&
      email !== null &&
      passworrd !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      country !== ""
    ) {
      register();
    }
  };
  const register = () => {
    axios
      .post(`http://localhost:5000/users`, information)
      .then((result) => {
        setMessage("result.response.data.message");
        navigate("/login");
      })
      .catch((err) => {
        setMessage("err.response.data.message");
      });
  };

  return (
    <div className="registerPage">     <h2  className="text-center">Create Account</h2>

      {/* <div class="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          id="floatingInput"
          placeholder="Email"
        />
        <label htmlFor="floatingInput">FirstName</label>
      </div> */}
      {/* <div className="form-floating">
        <input
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">LastName</label>
      </div>{" "} */}
      {/* <br />
      <div class="form-floating">
        <input
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          type="text"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Country</label>
      </div> */}
      {/* <br />
      <div className="form-floating">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label htmlFor="floatingPassword">Email</label>
      </div>{" "}
      <br /> */}
    
        {/* /////////// */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="FirstName"
          />
        </div>{" "}
        <br />
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="LastName"
          />
        </div>
        {/* //////////////// */}
        <br />
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            placeholder="Country"
          />
        </div>{" "}
        <br />
        <div class="mb-3">
          <input
            type="email"
            className="form-control"
            id="formGroupExampleInput"
            onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"          />
        </div>  <br /> <div class="mb-3">
          <input
            type="password"
            className="form-control"
            id="formGroupExampleInput"
            onChange={(e) => {
                setPassworrd(e.target.value);
              }}
              placeholder="Password"          />
        </div>{" "}
       
      <br />
      <div class="d-grid gap-2 col-6 mx-auto">
        <button
          className="btn btn-warning"
          type="button"
          onClick={checkFormValidation}
        >
          Sign UP
        </button>
      </div>
      <p className="text-center">
        To keep connected with us please login with your personal info{" "}
        <a href="login">Login</a>
      </p>
      <p className="message">{message}</p>
    </div>
  );
};
export default Users;
