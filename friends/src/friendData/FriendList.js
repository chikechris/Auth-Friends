import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utility/axiosWithAuth";


const FriendList = () => {
  const [friends, setFriends] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    axiosWithAuth
      .get("/friends", {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err.response));
  }, []);
  return (
    <div>
      
      <h2>Friend List</h2>
    </div>
  );
};

export default FriendList;