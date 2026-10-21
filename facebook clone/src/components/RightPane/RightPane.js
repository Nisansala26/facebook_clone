import React from 'react'
import './rightPane.css'

export default function RightPane() {
  return (
    <div className='rightPaneBox'>
      <div className="rightPaneContainer">
        <div className='adContainer'>
          <span className='aponsered'>Sponsered</span>
          <img src="/images/ad.jpg" alt="" className='adImage'/>
          <span className='adText'>Order Your food with pick me delivery service. Oder Now</span>
        </div>
        <hr/>
        <span className='birthdayTitle'>Birthdays</span>
        <div className='birthdayContainer'>
          <img src="/images/6.jpg" alt="" className='birthdayImage'/>
          <span className='birthdayText'><b>Kasun Gayantha </b> and <b>3 other friends</b> have birthday today.......!</span>
        </div>
        <div className='onlineFriendsContainer'>
          <li className='onlineFriend'>
            <div className='onlineFriendImageContainer'>
              <img src="/images/7.jpg" alt="" className='onlineFriendImg'/>
              <span className='onlineStatus'></span>
            </div>
            <span className='onlineFriendName'>nadeeka Siriwardana</span>

          </li>

             <li className='onlineFriend'>
            <div className='onlineFriendImageContainer'>
              <img src="/images/7.jpg" alt="" className='onlineFriendImg'/>
              <span className='onlineStatus'></span>
            </div>
            <span className='onlineFriendName'>nadeeka Siriwardana</span>

          </li>

             <li className='onlineFriend'>
            <div className='onlineFriendImageContainer'>
              <img src="/images/7.jpg" alt="" className='onlineFriendImg'/>
              <span className='onlineStatus'></span>
            </div>
            <span className='onlineFriendName'>nadeeka Siriwardana</span>

          </li>

             <li className='onlineFriend'>
            <div className='onlineFriendImageContainer'>
              <img src="/images/7.jpg" alt="" className='onlineFriendImg'/>
              <span className='onlineStatus'></span>
            </div>
            <span className='onlineFriendName'>nadeeka Siriwardana</span>

          </li>

             <li className='onlineFriend'>
            <div className='onlineFriendImageContainer'>
              <img src="/images/7.jpg" alt="" className='onlineFriendImg'/>
              <span className='onlineStatus'></span>
            </div>
            <span className='onlineFriendName'>nadeeka Siriwardana</span>

          </li>

        </div>
      </div>
        
        
    </div>
  )
}
