import React, {useState} from "react"
import axio from "axios"

import {useInput} from "./useInput"
import Axios from "axios";
const Login = () => {

    const [username, setUsername, handleUsername] = useInput("Lambda School");
    const [password, setPassword, handlePassword] = useInput("i<3Lambd4");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("/api/login",{ username: username, password: password })
        .then(res =>{
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username
            <input
            id="username"
            name="username"
            onChange={e => handleUsername(e.target.value)}
            placeholder="Username"
            type="text"
            value={username}
            />
            </label>
            <label htmlFor="password">Password
            <input
            id="password"
            name="password"
            onChange={e => handlePassword(e.target.value)}
            placeholder="Password"
            type="password"
            value={password}
            />
            </label>
            <button type="submit">Submit</button>
        </form>   
        </>
    )
}

export default Login