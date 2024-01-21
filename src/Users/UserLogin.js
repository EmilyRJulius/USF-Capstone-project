import React, { useState } from "react";
import axios from 'axios';

function Login() {
  const [login, setLogin] = useState({
    loginUser:{
        login_username: "",
        login_password: ""
    }
})

const loginUser = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:5000/login', login);

    console.log(response.data.message);
    // Handle successful login
  } catch (error) {
    console.error('Login failed:', error.response.data.message);
    // Handle login failure
  }
};

function handleLogin(e) {
  const { value, name } = e.target;
  setLogin({
      ...login.loginUser,
      [name]: value,
  });
}

  return (
    <div>
      <form>
      <label>
        Username:
        <input
          type="text"
          name="login_username"
          autoComplete="username"
          value={login.loginUser?.login_username}
          onChange={handleLogin}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="login_password"
          autoComplete="current-password"
          value={login.loginUser?.login_password}
          onChange={handleLogin}
        />
      </label>
      <input type="submit" onSubmit={loginUser}/>
      </form>
    </div>
  );
}
export default Login;
