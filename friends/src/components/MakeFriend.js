import React,{useEffect, useState} from "react"
import {axiosWithAuth} from "./axiosWithAuth"
import {useInput} from "./useInput"

const MakeFriend = () => {

    const [name, setName, handleName] = useInput("");
    const [email, setEmail, handleEmail] = useInput("");
    const [age, setAge, handleAge] = useInput("");

    const handleSubmit = (e) => {
        axiosWithAuth()
        .post("http://localhost:5000/api/friends",{name:name,email:email,age:age,id:Date.now()})
    }

    return (
        <>  
            <h3>Add a friend:</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name
                    <input
                    id="name"
                    name="name"
                    onChange={e => handleName(e.target.value)}
                    placeholder="name"
                    type="text"
                    value={name}
                    />
                </label>
                <label htmlFor="email">Email
                    <input
                    id="email"
                    name="email"
                    onChange={e => handleEmail(e.target.value)}
                    placeholder="email"
                    type="email"
                    value={email}
                    />
                </label>
                <label htmlFor="age">Age
                    <input
                    id="age"
                    name="age"
                    onChange={e => handleAge(e.target.value)}
                    placeholder="age"
                    type="text"
                    value={age}
                    />
                </label>
                <button type="submit">Add!</button>
            </form>
            
        </>
    )
}

export default MakeFriend