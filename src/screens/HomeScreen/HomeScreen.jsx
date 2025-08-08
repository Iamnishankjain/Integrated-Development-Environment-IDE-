import React from 'react'
import './HomeScreen.scss'
const HomeScreen = () => {
  return (
    <div className='home-container'>
      <div className='left-container'>
        <div className='item-container'>
          <img src="logo/logo.png" alt="logo" />
          <h4>Code. Compile. Debug.</h4>
          <button>
            <span class="material-symbols-outlined">add</span>
            <span>Create PlayGround</span>
          </button>
        </div>
      </div>
      <div className='right-container'>
        <h1>right-container</h1>
      </div>
    </div>
  )
}

export default HomeScreen
