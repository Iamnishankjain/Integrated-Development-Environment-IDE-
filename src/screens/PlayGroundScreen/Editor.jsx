import React from 'react'
import './scss/Editor.scss'
const Editor = () => {
  return (
    <div className='editor-container'>
      <div className='editor-header'>
        <div className='editor-left-container'>
          <h2>{"title of file"}</h2>
          <span className="material-symbols-outlined">edit</span>
          <button>Save Code</button>
        </div>
        <div className='editor-right-container'>
          <select name="language" id="language">
            <option value="cpp">cpp</option>
            <option value="java">java</option>
            <option value="python">python</option>
            <option value="javascript">javascript</option>
          </select>
          <select name="theme" id="theme">
            <option value="vs-dark">vs-dark</option>
            <option value="vs-light">vs-light</option>
          </select>
        </div>
      </div>
      <div className='editor-body'>body</div>
      <div className="editor-footer">
        <button>
          <span class="material-symbols-outlined">fullscreen</span>
          <span>Full Screen</span>
        </button>
        <label htmlFor="import-code">
          <span className="material-symbols-outlined">download</span>
          <span>Import Code</span>
        </label>
        <input type="file" id="import-code"/>
        <button>
          <span className="material-symbols-outlined">file_save</span>
          <span>Export Code</span>
        </button>
        <button className='run-code-button'>Run Code</button>
      </div>
    </div>
  )
}

export default Editor
