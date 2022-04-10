import React from "react";
import { useNavigate } from "react-router-dom";
import Img from "../Images/prevented.jpg";
const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div>
        <img src={Img} alt="" width="400px" />
        <p className="center">Login Please </p>
        <form
          onSubmit={() => {
            handleLogin();
            navigate("/home", { replace: true });
          }}
        >
          <label>
            Username: <input name="username" type="text" required />
          </label>{" "}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
