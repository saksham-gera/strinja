import "./Login.css";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import React from 'react'

export default function Login({ func }) {
  return (
    <div className="login-popup" >
      <div className="login-popup-black-overlay" onClick={() => {
        func("none");
      }}></div>
      <div className="login-container">
        <div className="close-button" onClick={() => {
          func("none");
        }}>
          <CloseRoundedIcon fontSize="medium" style={{color:"white"}}/>
        </div>
        <h1>
          Hey! Welcome Creator
        </h1>
        <form>
          <input className="form-control" placeholder="Email Address"></input>
          <input className="form-control" placeholder="Password"></input>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  )
}
