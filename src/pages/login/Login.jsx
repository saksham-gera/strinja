import "./Login.css";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {useAuth} from "../../Authorization/AuthContext.jsx";
import React,{useState} from "react";


export default function Login({ func }) {

  const { login, isLoggedIn } = useAuth();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = () => {
    // Call the login function from the context
    login(Username, Password);
    func("none");
  }

  return (
    <div className="login-popup" >
      <div className="login-popup-black-overlay" onClick={() => {
        func("none");
      }}></div>
      <div className="login-container">
        <div className="blur-bg"></div>
        <div className="close-button" onClick={() => {
            func("none");
          }}
        >
          <CloseRoundedIcon fontSize="medium" style={{ color: "white" }} />
        </div>
        <h1>Hey! Welcome Creator</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            placeholder="Username"
          ></input>
          <input
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Password"
          ></input>
          <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
}