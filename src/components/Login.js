import React ,{ useEffect,useState}from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');
     const navigate = useNavigate();

     useEffect(()=>{
         const auth = localStorage.getItem('user');
         if(auth)
         {
           navigate('/')
         }
       })

     const handleLogin= async ()=>{
        console.warn("email,password",email,password)
        let result = await fetch('http://localhost:5000/login',{
          method:'post',
          body:JSON.stringify({email,password}),
          headers:{
            'Content-Type':'application/json'
          }
        });
        result = await result.json();
        console.warn(result)
        if(result.name){
           localStorage.setItem("user",JSON.stringify(result));
           navigate("/")

        } else {
          alert("Please enter correct details")
        }
     }
  return (
    <div className="register">
      <h1>Register</h1>
      <input className="inputBox" value={email} type="text" autoComplete="off" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>
      <input className="inputBox" value={password} type="password" placeholder="Enter password" autoComplete="new-password" onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handleLogin} type="button" className="submitBtn">Login</button>
    </div>
  )
} 

export default Login