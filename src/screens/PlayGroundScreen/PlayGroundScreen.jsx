import React, { useCallback, useState } from 'react'
import './scss/PlayGroundScreen.scss'
import { useParams } from 'react-router-dom'
import Header from './Header/Header';
import EditorContainer from './EditorContainer';
import { makeSubmission } from './Services/service';

const PlayGroundScreen = () => {
  const params = useParams();
  const {fileId,folderId} = params;
  const [codeInput,setCodeInput]=useState('');
  const [codeOutput,setCodeOutput]=useState('');
  const [showLoader,setShowLoader] = useState(false);

  const onImportInput = (event) =>{
    const file = event.target.files[0];
    if (!file) return;

    const textFileExtensions = ["txt"];

    const extension = file.name.split('.').pop().toLowerCase();
    const isTextExtension = textFileExtensions.includes(extension);
    const isTextMime = file.type.startsWith("text/");

    if (isTextExtension || isTextMime) {
      const fileReader = new FileReader();
      fileReader.readAsText(file);
      fileReader.onload = function (e) {
        const importedInput = e.target.result;
        setCodeInput(importedInput);
      };
    } else {
      alert("Please choose a supported .txt file");
    }
  }

  const onExportOutput = () =>{
    const codeOutputValue=codeOutput.trim();

    if(!codeOutputValue){
      alert("OutPut is Empty()");
    }
    else{
      //create instant file in memory
      const codeBlob=new Blob([codeOutputValue],{type: "text/plain"});
      //create download url
      const downloadUrl=URL.createObjectURL(codeBlob);
      //create clickable link
      const link=document.createElement('a');
      link.href=downloadUrl;
      link.download=`output.txt`;
      link.click();
    }
  }
  const callback = ({apiStatus,data,message})=>{
    if(apiStatus === 'loading'){
      setShowLoader(true);
    }
    else if(apiStatus === 'error'){
      setShowLoader(false);
      setCodeOutput("something went wrong");
    }else{
      setShowLoader(false);
      if(data.status.id===3)
        setCodeOutput(atob(data.stdout))
      else
        setCodeOutput(atob(data.stderr))
    }
  }
  const runCode=useCallback(({code,language})=>{
    makeSubmission(code,language,callback,codeInput)
  },[codeInput])

  return (
    <div className='playground-container'>
      <Header />
      <div className='main-section'>
        <EditorContainer fileId={fileId} folderId={folderId} runCode={runCode} />
        <div className='io-container'>
          <div className='input'>
            <header className="input-header">
              <h2>Input:</h2>
                <label htmlFor="importfile" className='button'>
                  <span className="material-symbols-outlined">download</span>
                  <span>Import Input</span>
                </label>
                <input type="file" id="importfile" onChange={onImportInput}/>
            </header>
            <textarea name="input" id="input" value={codeInput} onChange={(e)=>setCodeInput(e.target.value)}></textarea>
          </div>
          <div className="output">
            <header className="output-header">
              <h2>Output:</h2>
              <button onClick={onExportOutput}>
                <span className="material-symbols-outlined">file_save</span>
                <span>Export Output</span>
              </button>
            </header>
            <textarea name="output" id="output" value={codeOutput} onChange={(e)=>setCodeOutput(e.target.value)} readOnly></textarea>
          </div>
        </div>
      </div>
      { showLoader &&
        <div className="fullpage-loader">
          <div className='loader'></div>
        </div>
      }
    </div>
  )
}

export default PlayGroundScreen
