import React, {useState} from "react"

import {useInput} from "./useInput"
const Login = () => {

    const [username, setUsername, handleUsername] = useInput("Lambda School");
    const [password, setPassword, handlePassword] = useInput("i<3Lambd4");
    
    return(
        <>
        <form>
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
            <button>Submit</button>
        </form>   
        </>
    )
}

export default Login