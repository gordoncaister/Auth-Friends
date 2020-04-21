import React,{useEffect, useState} from "react"
import {axiosWithAuth} from "./axiosWithAuth"
import MakeFriend from "./MakeFriend"


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
        {friends.map((friend) => {
            return (
            <div key={friend.id}>
                <h3>{friend.name}</h3>
                <p>email: {friend.email}</p>
                <p>age: {friend.age}</p>
                <small>{friend.id}</small>
            </div>
            )
            
        })}
        <MakeFriend />
        </>
    )
}

export default Friends;