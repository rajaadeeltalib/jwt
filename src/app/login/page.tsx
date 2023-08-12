"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import {axios} from "axios";





const Login = () => {
  const [user, setUser] = React.useState({
    email:"",
    password: "",
      
  })

  const onLogin = async () => {

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-black text-2xl my-12">
      Login
        </h1>
        <hr />
        
       
       <label htmlFor="email ">Email</label>
        <input
        className="my-2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
       id="email"
       type="text"
       value={user.email}
       onChange={(e)=> setUser({...user, email: e.target.value})} 
       placeholder="email"
       />
       <label htmlFor="username">Password</label>
        <input
        className="my-2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
       id="password"
       type="password"
       value={user.password}
       onChange={(e)=> setUser({...user, password: e.target.value})} 
       placeholder="password"
       />
       <button 
       onClick={onLogin}
       className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Login Now</button>
        
        <Link href="/signup">Signup Here</Link>
        </div>
    
  )
}

export default Login