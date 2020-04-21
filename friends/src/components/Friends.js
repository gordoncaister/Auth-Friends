import React,{useEffect, useState} from "react"
import {axiosWithAuth} from "./axiosWithAuth"


const Friends = () => {

    const [friends, setFriends] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then( res => {
            console.log(res)
            setFriends(res.data)
        })
        .catch (err => {
            console.log(err)
        })
    },[])
    
    console.log(friends)
    return (
        <>
        Hello from friends?
        </>
    )
}

export default Friends;