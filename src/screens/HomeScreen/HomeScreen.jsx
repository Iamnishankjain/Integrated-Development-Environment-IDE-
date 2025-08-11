import React from 'react'
import './HomeScreen.scss'
import LeftHalf from './Left/LeftHalf'
import RightHalf from './Right/RightHalf'
import Modal from '../Provider/Modal/Modal'
const HomeScreen = () => {
  return (
    <div className='home-container'>
      <LeftHalf/>
      <RightHalf />
      <Modal />
    </div>
  )
}

export default HomeScreen
