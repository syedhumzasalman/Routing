import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'

const SignIn = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let Navigate = useNavigate()



  const signInHandler = async () => {
    console.log(email, password);
    setEmail("")
    setPassword("")

    try {

      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log(response);
      localStorage.setItem("uid", response.user.uid)
      Navigate("/dashboard")

    } catch (error) {
      alert(error.message)
    }


  }



  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign In</h2>

          <div className="space-y-4">
            <input
              type="email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />

            <button
              onClick={signInHandler}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Sign In
            </button>

            <p>Create Acount? <Link to="/signup" className='text-blue-900'>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn