import React, { useContext } from 'react'
import './CreatePlayGroundModal.scss';
import { PlayGroundContext } from '../PlayGroundProvider';
import { ModalContext } from '../ModalProvider';
const UpdateFolderTitleModal = () => {
  const modalFeatures = useContext(ModalContext);
  const playGroundFeature = useContext(PlayGroundContext);
    const closeModal = ()=>{
      modalFeatures.closeModal();
    }
  
    const onSubmitModal=(event)=>{
      event.preventDefault();
      const folderName = event.target.folderName.value;
      playGroundFeature.editFolderTitle(modalFeatures.modalPayload,folderName);
      closeModal();
    }
  return (
    <div className='modal-container'>
      <form className='modal-body' onSubmit={onSubmitModal}>
        <span onClick={closeModal} className="material-symbols-outlined close">close</span>
        <h1>Update Folder Name</h1>
        <div className='item'>
          <input type="text" name='folderName' required/>
          <button type='submit'>Update</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateFolderTitleModal
