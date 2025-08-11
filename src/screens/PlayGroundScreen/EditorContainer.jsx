import React, { useContext, useRef, useState } from 'react'
import './scss/Editor.scss'
import Editor from '@monaco-editor/react'
import { PlayGroundContext } from '../Provider/PlayGroundProvider';
import { ModalContext, modalConstants } from '../Provider/ModalProvider'
import Modal from '../Provider/Modal/Modal';
const EditorContainer = ({fileId,folderId,runCode}) => {
  const {getDefaultCode,getDefaultLanguage,getUpdateLanguage,saveCode,getTitleOfFile} = useContext(PlayGroundContext);
  const modalFeatures = useContext(ModalContext)
  const [code,setCode]=useState(()=> getDefaultCode(fileId, folderId));
  const [language,setLanguage]=useState(()=> getDefaultLanguage(fileId, folderId));
  const [theme,setTheme]=useState('vs-dark');
  const codeRef=useRef(code);


  const fileNameExtMap = {
    cpp: 'cpp',
    java:'java',
    python:'py',
    javascript:'js',
  }

  const editorOptions = {
    fontSize:18,
    wordWrap:'on',
    minimap: { enabled: false },
  }
  const onChangeCode = (newCode) =>{
    codeRef.current=newCode;
  }
  const onUploadCode = (event) =>{
    const file = event.target.files[0];
    if (!file) return;

    const textFileExtensions = [
      "txt", "java", "py", "cpp", "c", "js", "json", "html", "css", "md", "xml", "sh", "bat", "rb", "php"
    ];

    const extension = file.name.split('.').pop().toLowerCase();
    const isTextExtension = textFileExtensions.includes(extension);
    const isTextMime = file.type.startsWith("text/");

    if (isTextExtension || isTextMime) {
      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = function (e) {
        const importedCode = e.target.result;
        setCode(importedCode);
        codeRef.current=importedCode;
      };
    } else {
      alert("Please choose a supported text file");
    }
  }
  const onExportCode=()=>{
    const codeValue=codeRef.current?.trim();

    if(!codeValue){
      alert("Code required for exporting");
    }
    else{
      //create instant file in memory
      const codeBlob=new Blob([codeValue],{type: "text/plain"});
      //create download url
      const downloadUrl=URL.createObjectURL(codeBlob);
      //create clickable link
      const link=document.createElement('a');
      link.href=downloadUrl;
      link.download=`code.${fileNameExtMap[language]}`;
      link.click();
    }
  }

  const onChangeLanguage=(e)=>{
    const selectedLanguage=e.target.value;
    setLanguage(selectedLanguage);
    getUpdateLanguage(fileId,folderId,selectedLanguage);
    const newCode=getDefaultCode(fileId,folderId);
    setCode(newCode);
    codeRef.current=newCode;   
  }
  const onChangeTheme=(e)=>{
    setTheme(e.target.value);
  }
  const onSaveCode=()=>{
    saveCode(fileId,folderId,codeRef.current);
    alert("code  Saved");
  }
  const fullScreenRef = useRef(false)
  const onFullScreen=()=>{
    fullScreenRef.current=!fullScreenRef.current;
    if(fullScreenRef.current){
      document.body.requestFullscreen();
    }else{
      document.exitFullscreen();
    }
  }

  const onRunCode=()=>{
    runCode({code:codeRef.current,language});
  }
  const onChangeFileName = () => {
    modalFeatures.setModalPayload({
      folderId,
      fileId,
    })
    modalFeatures.openModal(modalConstants.UPDATE_FILE_TITLE)
  }

  return (
    <div className='editor-container'>
      <div className='editor-header'>
        <div className='editor-left-container'>
          <h2>{getTitleOfFile(fileId,folderId)}</h2>
          <span className="material-symbols-outlined title-edit" onClick={onChangeFileName}>edit</span>
          <button onClick={onSaveCode}>Save Code</button>
        </div>
        <div className='editor-right-container'>
          <select value={language} onChange={onChangeLanguage}>
            <option value="cpp">cpp</option>
            <option value="java">java</option>
            <option value="python">python</option>
            <option value="javascript">javascript</option>
          </select>
          <select onChange={onChangeTheme} name="theme" id="theme">
            <option value="vs-dark">vs-dark</option>
            <option value="vs-light">vs-light</option>
          </select>
        </div>
      </div>
      <div className='editor-body'>
        <Editor 
        height={"100%"}
        language={language}
        theme={theme}
        options={editorOptions}
        onChange={onChangeCode}
        value={code}
        />
      </div>
      <div className="editor-footer">
        <button onClick={onFullScreen}>
          <span className="material-symbols-outlined">fullscreen</span>
          <span>Full Screen</span>
        </button>
        <label htmlFor="import-code">
          <span className="material-symbols-outlined">download</span>
          <span>Import Code</span>
        </label>
        <input type="file" id="import-code" onChange={onUploadCode}/>
        <button onClick={onExportCode}>
          <span className="material-symbols-outlined">file_save</span>
          <span>Export Code</span>
        </button>
        <button className='run-code-button' onClick={onRunCode}>
          <span className="material-symbols-outlined">play_arrow</span>
          <span>Run</span>
        </button>
      </div>
      <Modal />
    </div>
  )
}

export default EditorContainer
 