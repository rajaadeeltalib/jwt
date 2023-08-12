"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
// import {axios} from "axios";





const Signup = () => {
  const [user, setUser] = React.useState({
    email:"",
    password: "",
    username: "",    
  })

  const onSignup = async () => {

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-black text-2xl my-12">
      Signup
        </h1>
        <hr />
        <label htmlFor="username">username</label>
        <input
        className="my-2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 "
       id="username"
       type="text"
       value={user.username}
       onChange={(e)=> setUser({...user, username: e.target.value})} 
       placeholder="username"
       />
       
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
       onClick={onSignup}
       className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Signup Now</button>
        
        <Link href="/login">Login Here</Link>
        </div>
    
  )
}

export default Signup