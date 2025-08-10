import React from 'react'
import './scss/OutputHeader.scss'
const OutputHeader = () => {
  return (
    <header className="output-header">
      <h2>Output:</h2>
      <button>
        <span className="material-symbols-outlined">file_save</span>
        <span>Export Output</span>
      </button>
    </header>
  )
}

export default OutputHeader
