import React,{useEffect, useState} from "react"
import {axiosWithAuth} from "./axiosWithAuth"


const Friends = () => {

    const [friends, setFriends] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then( res => {
            console.log(res)
        })
        .catch (err => {
            console.log(err)
        })
    })
    
    return (
        <>
        Hello from friends?
        </>
    )
}

export default Friends;