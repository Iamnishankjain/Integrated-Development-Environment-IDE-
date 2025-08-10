import React from 'react'
import './scss/PlayGroundScreen.scss'
import { useParams } from 'react-router-dom'
import Header from './Header/Header';
import Editor from './Editor';
import IO from './IO';

const PlayGroundScreen = () => {
  const params = useParams();
  const {fileId,folderId} = params;
  return (
    <div className='playground-container'>
      <Header />
      <div className='main-section'>
        <Editor />
        <IO/>
      </div>
    </div>
  )
}

export default PlayGroundScreen
