import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth)
    {
      navigate('/')
    }
  })


  const collectData = async () => {

    if (!name || !email || !password) {
      alert("Please fill in all the fields.");
      return; // Prevent proceeding if any field is empty
    }
    console.warn("Name:", name, "Email:", email, "Password:", password);
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json()
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate('/')
    // if(result)
    // {
    //   navigate('/')` 
    // }
  }

  return (
    <div className="register">
      <h1>Register</h1>
      <input className="inputBox" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
      <input className="inputBox" type="text" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="off" placeholder="Enter Email" />
      <input className="inputBox" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" autoComplete="new-password"
      />
      <button onClick={collectData} type="button" className="submitBtn">Sign Up</button>
    </div>
  );
};

export default SignUp;
