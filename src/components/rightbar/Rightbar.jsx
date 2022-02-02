import './rightbar.css'
import React from 'react';
export default function Rightbar() {
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">

                    <img className='birthdayImg' src="assets/posts/mypost.jpg" />
                    <span className="birthdayText">
                        <b>kumar </b> <b>shukla </b> have birthday today
                    </span>
                </div>
            </div>
        </div>
  )
}
