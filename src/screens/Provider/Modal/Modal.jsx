import React, { useContext } from 'react'
import { modalConstants, ModalContext } from '../ModalProvider'
import CreatePlayGroundModal from './CreatePlayGroundModal';
import CreateFolderModal from './CreateFolderModal';
import UpdateFolderTitleModal from './UpdateFolderTitleModal';
import UpdateFileTitleModal from './UpdateFileTitleModal';
import CreateNewFileModal from './CreateNewFileModal';

const Modal = () => {

  const modalFeatures = useContext(ModalContext);
  return (
    <>
      {modalFeatures.activeModal === modalConstants.CREATE_PLAYGROUND &&  <CreatePlayGroundModal/>}
      {modalFeatures.activeModal === modalConstants.CREATE_FOLDER &&  <CreateFolderModal/>}
      {modalFeatures.activeModal === modalConstants.UPDATE_FOLDER &&  <UpdateFolderTitleModal/>}
      {modalFeatures.activeModal === modalConstants.UPDATE_FILE_TITLE &&  <UpdateFileTitleModal/>}
      {modalFeatures.activeModal === modalConstants.CREATE_NEW_FILE &&  <CreateNewFileModal/>}
    </>
  )
}

export default Modal
