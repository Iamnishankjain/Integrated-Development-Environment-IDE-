import React from 'react'
import './scss/inputHeader.scss'
const InputHeader = () => {
  return (
    <header className="input-header">
      <h2>Input:</h2>
        <label htmlFor="importfile" className='button'>
          <span className="material-symbols-outlined">download</span>
          <span>Import Input</span>
        </label>
        <input type="file" id="importfile"/>
    </header>
  )
}

export default InputHeader
