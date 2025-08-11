import React, { useContext } from 'react'
import './CreatePlayGroundModal.scss'
import { ModalContext } from '../ModalProvider'
import { PlayGroundContext } from '../PlayGroundProvider';
const CreatePlayGroundModal = () => {
  const modalFeatures = useContext(ModalContext);
  const playGroundFeature = useContext(PlayGroundContext);
  const closeModal = ()=>{
    modalFeatures.closeModal();
  }

  const onSubmitModal=(event)=>{
    event.preventDefault();
    const folderName = event.target.folderName.value;
    const fileName = event.target.fileName.value;
    const language =event.target.language.value;
    playGroundFeature.createNewPlayGround({
      folderName,fileName,language
    })
    closeModal();
  }
  return (
    <div className='modal-container'>
      <form className='modal-body' onSubmit={onSubmitModal}>
        <span onClick={closeModal} className="material-symbols-outlined close">close</span>
        <h1>Create New PlayGround</h1>
        <div className='item'>
          <p>Enter Folder Name</p>
          <input type="text" name='folderName' required/>
        </div>
        <div className='item'>
          <p>Enter File Name</p>
          <input type="text" name='fileName' required/>
        </div>
        <div className='item'>
          <select name='language'>
            <option value="java">java</option>
            <option value="cpp">cpp</option>
            <option value="javascript">javascript</option>
            <option value="python">python</option>
          </select>
          <button type='submit'>Create PlayGround</button>
        </div>
      </form>
    </div>
  )
}

export default CreatePlayGroundModal
