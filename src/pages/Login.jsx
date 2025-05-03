import { useState } from "react"
import React from 'react'

export default function Login() {

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96  rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">{state === 'Sign Up' ? 'Create Account' : 'Login'}</p>
        <p>Please {state === 'Sign Up' ? 'sign up' : 'log in'} to book appointment</p>
        {
          state === "Sign Up" && <div className="w-full">
            <p>Full Name</p>
            <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange={(e) => setName(e.target.name)} value={name} required />
          </div>
        }

        <div className='w-full'>
          <p>Email</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange={(e) => setEmail(e.target.email)} value={email} required />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input className="border border-zinc-300 rounded w-full p-2 mt-1" type="text" onChange={(e) => setPassword(e.target.password)} value={password} required />
        </div>
        <button className="text-white w-full py-2 rounded-md text-base" style={{ background: "#5f6fff" }}>{state === "Sign Up" ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up"
            ? <p>Already have an account? <span onClick={() => setState('Login')} className="underline cursor-pointer" style={{ color: '#5f6fff' }} >Log in here</span> </p>
            : <p>Create an new account? <span onClick={() => setState('Sign Up')} className="underline cursor-pointer" style={{ color: '#5f6fff' }} >click here</span></p>
        }
      </div>
    </form>
  )
}
