import React from 'react'
import { useParams } from 'react-router-dom'

const PlayGroundScreen = () => {
  const params = useParams();
  console.log(params);
  return (
    <div>
      PlayGround Screen
    </div>
  )
}

export default PlayGroundScreen
