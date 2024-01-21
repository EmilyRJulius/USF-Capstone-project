import React, { useState } from "react";
import axios from "axios";
import "./User.css"

function NewUser() {
  const [users, setUsers] = useState({
    user: {
      username: "",
      password: "",
    },
  });

  function handleNewUser(e) {
    const { value, name } = e.target;
    setUsers({
      user:{
        ...users.user,
      [name]: value
      }
    });
  }

  async function createUser(){
    const response = await axios.post("http://localhost:5000/signup", users);
  }

  // const createUser = async () => {
  //   debugger;
  //   try {
  //     const response = await axios.post("http://localhost:5000/signup", users);
  //     console.log(response.data.message);
  //     // Handle successful signup
  //   } catch (error) {
  //     console.error("Signup failed:");
  //     // Handle signup failure
  //   }
  // };
  console.log(createUser);

  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            autoComplete="username"
            value={users.user?.username}
            onChange={handleNewUser}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            autoComplete="password"
            value={users.user?.password}
            onChange={handleNewUser}
          />
        </label>
        <br />
        <button onClick={createUser}>Submit</button>
      </form>
    </div>
  );
}

export default NewUser;
