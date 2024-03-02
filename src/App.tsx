import { useState } from 'react'
import Player from './Player.tsx'
import './styles/App.css'


const App = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  return (
    <>
      <h1 className='header'>Snake Game</h1>
      <div className="parent">
        <div className="game">
        <Player isPlaying = {isPlaying}/>
        </div>

      </div>
      <button 
      onClick = {() => setIsPlaying(true)}
      className="start">
      Start Game
      </button>
    </>
  )
}

export default App
