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

    function editFriend(e) {
        axiosWithAuth()
        .put(`http://localhost:5000/api/friends/${e}`,{name:"Monkey Moo",email:"monkeymoo@lovesyou.too",age:"4"})
        console.log(e)
    }
    const deleteFriend = (e) =>{
        axiosWithAuth()
        .delete(`http://localhost:5000/api/friends/${e}`)
        console.log(e)
    }

    
    console.log(friends)
    return (
        <>
        {friends.map((friend) => {
            return (
            <div key={friend.id}>
                <h3>{friend.name}</h3>
                <p>email: {friend.email}</p>
                <p>age: {friend.age}</p>
                <br></br>
                <button type="submit" onClick={(e)=> {
                    editFriend(friend.id)
                }}>Edit</button>
                <button type="submit" onClick={(e)=> {
                    deleteFriend(friend.id)
                }}>Delete</button>
            </div>
            )
            
        })}
        <MakeFriend />
        </>
    )
}

export default Friends;