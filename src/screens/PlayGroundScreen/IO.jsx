import React from 'react'
import './scss/IO.scss'
import OutputHeader from './Header/OutputHeader'
import InputHeader from './Header/InputHeader'
const IO = () => {
  return (
    <div className='io-container'>
      <div className='input'>
        <InputHeader />
        <textarea name="input" id="input"></textarea>
      </div>
      <div className="output">
        <OutputHeader />
        <textarea name="output" id="output" readOnly></textarea>
      </div>
    </div>
  )
}

export default IO
