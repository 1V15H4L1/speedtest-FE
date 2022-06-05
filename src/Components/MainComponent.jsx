import React from 'react'
import DisplayComponent from './DisplayComponent'
import LeaderBoardComponent from './LeaderBoardComponent'
import '../Styles/MainComponent.css'
import LoginPopup from './LoginPopup'
import { useState } from 'react'

function MainComponent() {
  const [showPopUp, setShowPopUp] = useState(true);
  const [Leaderboard,SetLeaderBoard] = useState(false);
  console.log(Leaderboard);
  return (
    <>
      {showPopUp &&<LoginPopup setShowPopUp={setShowPopUp}/> }

    <div class="seven">
				<h1>SPEED TEST</h1>
    <DisplayComponent SetLeaderBoard={SetLeaderBoard}/>
    {Leaderboard && <LeaderBoardComponent/> }
    </div>
    </>
  )
}

export default MainComponent