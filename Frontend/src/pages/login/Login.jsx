import React, { useState } from 'react'
import "./login.css"
import {useNavigate} from "react-router-dom"

export default function Login({setUser}) {
    const[user, settingUser] = useState()
    const navigate = useNavigate()

    function HandleField(e){
        settingUser({...user, [e.target.id] : e.target.value})
    }
    function HandleSubmit(e){
        e.preventDefault()
        setUser(user)
        navigate("/dashboard")
    }
    return (
    <div className="login">
        <form className='loginForm ' onSubmit={HandleSubmit}>
            <div className="userInputLogin">
                <label className="userInputLabel" htmlFor="name">Name</label>
                <input id="name" className='userInput' onChange={HandleField}/>
            </div>
            <div className="userInputLogin">
                <label className="userInputLabel" htmlFor="password">Password</label>
                <input id="password" className='userInput' onChange={HandleField}/>
            </div>
            <button className="loginButton">Login</button>
        </form>
    </div>
  )
}
