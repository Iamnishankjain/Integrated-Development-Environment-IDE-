import React from 'react'
import './leftHalf.scss'
const RightHalf = () => {
  return (
    <div className='left-container'>
      <div className='item-container'>
        <img src="logo/logo.png" alt="logo" />
        <h4>Code. Compile. Debug.</h4>
        <button>
          <span className="material-symbols-outlined">add</span>
          <span>Create PlayGround</span>
        </button>
      </div>
    </div>
  )
}

export default RightHalf
