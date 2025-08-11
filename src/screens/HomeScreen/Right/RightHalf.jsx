import { useContext } from "react";
import "./rightHalf.scss";
import { PlayGroundContext } from "../../Provider/PlayGroundProvider";
import { modalConstants, ModalContext } from "../../Provider/ModalProvider";
import { useNavigate } from "react-router-dom";

const Folder = ({ folderTitle, cards,folderId }) => {
  const playGroundFeature = useContext(PlayGroundContext);
  const modalFeatures=useContext(ModalContext);

  const navigate = useNavigate();

  const onDeleteFolder = (folderId) =>{
    playGroundFeature.deleteFolder(folderId);
  }
  const onUpdateFolderName = () =>{
    modalFeatures.setModalPayload(folderId);
    modalFeatures.openModal(modalConstants.UPDATE_FOLDER);
  }
  const onCreateNewFile=()=>{
    modalFeatures.setModalPayload(folderId);
    modalFeatures.openModal(modalConstants.CREATE_NEW_FILE);
  }
  return (
    <div className="folder-container">
      <div className="folder-header">
        <div className="folder-header-item">
          <span className="material-symbols-outlined folder-icon">folder</span>
          <span>{folderTitle}</span>
        </div>
        <div className="folder-header-item">
          <span className="material-symbols-outlined delete" onClick={()=>onDeleteFolder(folderId)}>delete</span>
          <span className="material-symbols-outlined edit" onClick={onUpdateFolderName}>edit</span>
          <button onClick={onCreateNewFile}>
            <span className="material-symbols-outlined">add</span>
            <span>New File</span>
          </button>
        </div>
      </div>
      <div className="cards-container">
        {cards?.map((file,index) => {

          const onUpdateFileTitle = ()=>{
            modalFeatures.setModalPayload({folderId: folderId,fileId: file.id});
            modalFeatures.openModal(modalConstants.UPDATE_FILE_TITLE);
          }

          const onDeleteFile = () => {
            playGroundFeature.deleteFile(folderId,file.id);
          }

          const navigateToPlayGroundScreen = () =>{
            navigate(`/playground/${file.id}/${folderId}`);
          }

          return (
            <div className="card" key={index} onClick={navigateToPlayGroundScreen}>
              <img src="logo/logo.png" alt="logo" className="logo" />
              <div className="title-container">
                <span>{file?.title}</span>
                <span>Language: {file?.language}</span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <span className="material-symbols-outlined" onClick={onUpdateFileTitle}>edit</span>
                <span className="material-symbols-outlined" onClick={onDeleteFile}>delete</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const RightHalf = () => {
  const {folders} = useContext(PlayGroundContext);
  const modalFeatures=useContext(ModalContext);
  const onCreateNewFolderModal = ()=>{
    modalFeatures.openModal(modalConstants.CREATE_FOLDER)
  }
  return (
    <div className="right-container">
      <div className="header">
        <h1>
          <span className="my">My</span> <span>PlayGround</span>
        </h1>
        <button className="add-folder" onClick={onCreateNewFolderModal}>
          <span className="material-symbols-outlined">add</span>
          <span>New Folder</span>
        </button>
      </div>
      {folders?.map((folder, index) => {
        return <Folder folderTitle={folder?.title} cards={folder?.files} folderId={folder.id} key={folder.id}/>;
      })}
    </div>
  );
};

export default RightHalf;
