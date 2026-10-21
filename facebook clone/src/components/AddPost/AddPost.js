import React from 'react'
import './addPost.css'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';




export default function AddPost() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPostTop">
                <img src="/images/1.avif" alt="" className="addPostPic" />
                <input placeholder="What's in your mind..?" className="addPostInput" />


            </div>
            <hr className="addPostHr" />
            <div className="addPostBottom">
                <div className="addPostOptions">
                    <div className="addPostOption">
                    <InsertPhotoIcon htmlColor='orange' className='addPostIcon'/>
                    <span className="addPostOptionText">Add Photo / Video</span>
                    </div>
                    <div className="addPostOption">
                    <AddLocationAltIcon htmlColor='red'  className='addPostIcon'/>
                    <span className="addPostOptionText">Add Location</span>
                    </div>
                    <div className="addPostOption">
                    <LocalOfferIcon htmlColor='blue'  className='addPostIcon'/>
                    <span className="addPostOptionText">Add Tag</span>
                    </div>
                    <div className="addPostOption">
                    <LiveTvIcon htmlColor='tomato'  className='addPostIcon'/>
                    <span className="addPostOptionText">Go Live</span>
                    </div>
                </div>
                <button className="PostButton">Post</button>
                    

            </div>
        </div>
    </div>
  )
}
