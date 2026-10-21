import React from 'react'
import './post.css'


export default function Post() {
  return (
    <div className='post'>
        <div className="postContainer">
            <div className="postTop">
               <div className="postTopLeft">
                 <img src="/images/2.jpg" alt="" className="postImage" />
                <span className="postUserName">Hasini Nisansala</span>
                <span className="postTime">5 min ago</span>
               </div>
            </div>

            <div className="postCenter">
                <div className="postCaption">
                    Be like a tree and let the dead leaves drop.

                </div>
                <img src="/images/2.jpg" alt="" className="postedImage" />

            </div>


            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/images/3.png" alt="" className="reactionPic" />
                    <img src="/images/4.png" alt="" className="reactionPic" />
                    <img src="/images/5.png" alt="" className="reactionPic" />
                    <span className="likeCount">Nisansala and 225 others</span>
                </div>
                <div className="postBottomRight">
                    <span className="commentCount">20 comments</span>

                </div>



            </div>
        </div>
    </div>
  )
}
