import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen/HomeScreen'
import PlayGroundScreen from './screens/PlayGroundScreen/PlayGroundScreen'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/playground" element={<PlayGroundScreen />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
