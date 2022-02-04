import './feed.css'
import React from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css';
import { Posts } from '../../dummyData';
export default function Feed() {
    console.log(Posts);
    return (

        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {
                    Posts.map((p) => (
                        <Post key={p.id} post={p} />
                    ))
                }
            </div>
        </div>
    )
}
