import React from 'react'
import './homeScreen.scss'
import LeftHalf from './Left/LeftHalf'
import RightHalf from './Right/RightHalf'
const HomeScreen = () => {
  return (
    <div className='home-container'>
      <LeftHalf/>
      <RightHalf />
    </div>
  )
}

export default HomeScreen
