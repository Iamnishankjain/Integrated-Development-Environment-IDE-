import React, { useContext } from 'react'
import './leftHalf.scss'
import { modalConstants, ModalContext } from '../../Provider/ModalProvider'


const RightHalf = () => {
  const modalFeatures = useContext(ModalContext);
  const openCreatePlayGroundModal=()=>{
    modalFeatures.openModal(modalConstants.CREATE_PLAYGROUND);
  }
  return (
    <div className='left-container'>
      <div className='item-container'>
        <img src="/logo/logo.png" alt="logo" />
        <h4>Code. Compile. Debug.</h4>
        <button onClick={openCreatePlayGroundModal}>
          <span className="material-symbols-outlined">add</span>
          <span>Create PlayGround</span>
        </button>
      </div>
    </div>
  )
}

export default RightHalf
