'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import{auth} from "@/auth/firebase/firebase-config"
interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpPage: React.FC = () => {
  const[createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      const res = await createUserWithEmailAndPassword(formData.email,formData.confirmPassword)
      console.log({res})
      
    } catch (err){
      console.error(err)
    }
    console.log(formData.email);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleSubmit} className="bg-gray-800 text-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl mb-4 font-semibold">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-400 font-medium mb-2">Username</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-700 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-400 font-medium mb-2">Email Address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-700 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-400 font-medium mb-2">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-700 focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <label htmlFor="confirmPassword" className="block text-gray-400 font-medium mb-2">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm your password" className="w-full border border-gray-600 rounded px-3 py-2 bg-gray-700 focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;
