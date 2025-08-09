import React, { useContext } from 'react'
import { ModalContext } from '../ModalProvider';
import { PlayGroundContext } from '../PlayGroundProvider';
import './CreatePlayGroundModal.scss'

const UpdateFileTitleModal = () => {
  const modalFeatures = useContext(ModalContext);
  const playGroundFeature = useContext(PlayGroundContext);
  const closeModal = ()=>{
    modalFeatures.closeModal();
  }

  const onSubmitModal=(event)=>{
    event.preventDefault();
    const folderName = event.target.folderName.value;
    playGroundFeature.editFileTitle(modalFeatures.modalPayload.folderId,modalFeatures.modalPayload.fileId,folderName);
    closeModal();
  }
  return (
    <div className='modal-container'>
      <form className='modal-body' onSubmit={onSubmitModal}>
        <span onClick={closeModal} className="material-symbols-outlined close">close</span>
        <h1>Update File Name</h1>
        <div className='item'>
          <input type="text" name='folderName' required/>
          <button type='submit'>Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateFileTitleModal
