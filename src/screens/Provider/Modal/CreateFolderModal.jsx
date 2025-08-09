import React, { useContext } from 'react'
import './CreatePlayGroundModal.scss'
import { ModalContext } from '../ModalProvider';
import { PlayGroundContext } from '../PlayGroundProvider';
const CreateFolderModal = () => {
  const modalFeatures = useContext(ModalContext);
  const playGroundFeature = useContext(PlayGroundContext);
  const closeModal = ()=>{
    modalFeatures.closeModal();
  }

  const onSubmitModal=(event)=>{
    event.preventDefault();
    const folderName = event.target.folderName.value;
    playGroundFeature.createNewFolder(folderName);
    closeModal();
  }
  return (
    <div className='modal-container'>
      <form className='modal-body' onSubmit={onSubmitModal}>
        <span onClick={closeModal} className="material-symbols-outlined close">close</span>
        <h1>Create New Folder</h1>
        <div className='item'>
          <input type="text" name='folderName' required/>
          <button type='submit'>Create PlayGround</button>
        </div>
      </form>
    </div>
  )
}

export default CreateFolderModal
