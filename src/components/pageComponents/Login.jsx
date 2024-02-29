import React, { useState } from "react";

function Login() {
   const [email,setEmail]= useState("");
   const [password,setPassword]= useState("");
   const[message,setMessage]= useState("")

   function signInHandler(){
       setMessage("Loading.....")
       if(email === "mani@gmail.com" && password === "Mani@123"){
        setTimeout(()=>{
            setMessage("Successfully login")
        },300)
        
       }else{
        setTimeout(()=>{
        setMessage("invalid credentials!")
        },3000)
       }
   }

  return (
    <>
      <div className="py-5">
        <h5>Login</h5>
        <div>
          <h6 className="">E-MAIL:</h6>
          <input type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="py-4">
          <h6 className="">PASSWORD:</h6>
          <input type="password" placeholder="Password"onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className="btn btn-success" onClick={signInHandler}>SIGNIN</button>
      </div>
      {message && <p className="">{message}</p>}
    </>
  );
}

export default Login;
