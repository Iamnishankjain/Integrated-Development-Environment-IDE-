import React, { useContext } from 'react'
import './CreatePlayGroundModal.scss'
import { ModalContext } from '../ModalProvider';
import { PlayGroundContext } from '../PlayGroundProvider';

const CreateNewFileModal = () => {
  const modalFeatures = useContext(ModalContext);
  const playGroundFeature = useContext(PlayGroundContext);
  const closeModal = ()=>{
    modalFeatures.closeModal();
  }

  const onSubmitModal=(event)=>{
    event.preventDefault();
    const fileTitle = event.target.fileName.value;
    const fileLanguage=event.target.language.value;
    playGroundFeature.createNewFile(modalFeatures.modalPayload,fileTitle,fileLanguage);
    closeModal();
  }
  return (
    <div className='modal-container'>
      <form className='modal-body' onSubmit={onSubmitModal} >
        <span onClick={closeModal} className="material-symbols-outlined close">close</span>
        <h1>Create New File</h1>
        <div className='item'>
          <input type="text" name='fileName' required/>
          <select name='language'>
            <option value="java">JAVA</option>
            <option value="cpp">cpp</option>
            <option value="javascript">JavaScript</option>
            <option value="python">python</option>
          </select>
        </div>
        <div className='item'>
          <button type='submit' style={{width: "200px"}}>Create PlayGround</button>
        </div>
      </form>
    </div>
  )
}

export default CreateNewFileModal
