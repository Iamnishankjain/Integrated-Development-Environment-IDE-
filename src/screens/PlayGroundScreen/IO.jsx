import React from 'react'
import './scss/IO.scss'
const IO = () => {
  return (
    <div className='io-container'>
      <div className='input'>
        <header className="input-header">
          <h2>Input:</h2>
            <label htmlFor="importfile" className='button'>
              <span className="material-symbols-outlined">download</span>
              <span>Import Input</span>
            </label>
            <input type="file" id="importfile"/>
        </header>
        <textarea name="input" id="input"></textarea>
      </div>
      <div className="output">
        <header className="output-header">
          <h2>Output:</h2>
          <button>
            <span className="material-symbols-outlined">file_save</span>
            <span>Export Output</span>
          </button>
        </header>
        <textarea name="output" id="output" readOnly></textarea>
      </div>
    </div>
  )
}

export default IO
