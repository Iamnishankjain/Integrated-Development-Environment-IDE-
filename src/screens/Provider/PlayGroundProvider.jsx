import React, { createContext } from 'react'
import { useContext } from 'react'
export const PlayGroundContext = createContext();

const PlayGroundProvider = ({children}) => {
  const obj={name:'arvind'}
  return (
    <PlayGroundContext.Provider value={obj}>
      {children}
    </PlayGroundContext.Provider>
  )
}

export default PlayGroundProvider
