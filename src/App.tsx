import { useState } from 'react'
import Player from './Player.tsx'
import './styles/App.css'


const App = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  return (
    <>
      <div className="parent">
        <h2 className='header'>Snake Game</h2> 
         <button
       onClick = {() => setIsPlaying(true)} 
       className="start"> 
      Start Game 
      </button> 
    
        <div className="game">
        <Player isPlaying = {isPlaying}/>
        </div>
      </div>
      </>
  )
}

export default App
