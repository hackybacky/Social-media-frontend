import React from 'react';
import './close.css'
export default function Closefr({user}) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
  );
}
