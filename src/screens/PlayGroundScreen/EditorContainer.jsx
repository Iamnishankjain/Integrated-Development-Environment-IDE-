import React, { useRef, useState } from 'react'
import './scss/Editor.scss'
import Editor from '@monaco-editor/react'
const EditorContainer = () => {
  const [code,setCode]=useState('');
  const [language,setLanguage]=useState('cpp');
  const [theme,setTheme]=useState('vs-dark');
  const codeRef=useRef();


  const fileNameExtMap = {
    cpp: 'cpp',
    java:'java',
    python:'py',
    javascript:'js',
  }

  const editorOptions = {
    fontSize:18,
    wordWrap:'on'
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
    setLanguage(e.target.value);
  }
  const onChangeTheme=(e)=>{
    setTheme(e.target.value);
  }

  return (
    <div className='editor-container'>
      <div className='editor-header'>
        <div className='editor-left-container'>
          <h2>{"title of file"}</h2>
          <span className="material-symbols-outlined">edit</span>
          <button>Save Code</button>
        </div>
        <div className='editor-right-container'>
          <select onChange={onChangeLanguage} name="language" id="language">
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
        <button>
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
        <button className='run-code-button'>
          <span className="material-symbols-outlined">play_arrow</span>
          <span>Run</span>
        </button>
      </div>
    </div>
  )
}

export default EditorContainer
