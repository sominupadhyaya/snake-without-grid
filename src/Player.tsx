import { useState, useEffect } from "react"
import {PlayerProps} from "./types/types.ts"

import './styles/App.css'

const Player: React.FC<PlayerProps> = ({isPlaying}) => { 
  const [positionX, setPositionX] = useState<number>(50)
  const [positionY, setPositionY] = useState<number>(50)
 
  const [currKey, setCurrKey] = useState<string>("")

  if (isPlaying){
  useEffect(() =>{
        document.addEventListener("keydown", onKeyDown, true)
    }, [])


  const onKeyDown = (e:KeyboardEvent) =>{
    setCurrKey(e.key)
  }

  useEffect(() =>{
    const interval = setInterval(() => {
        switch (currKey) {
          case "w":
            setPositionX(curr => curr - 2)
            setCurrKey("w")
            break;
          case "s":
            setPositionX(curr => curr + 2)
            setCurrKey("s")
            break;
          case "a":
            setPositionY(curr => curr - 1)
            setCurrKey("a")
            break;
          case "d":
            setPositionY(curr => curr + 1)
            setCurrKey("d")
            break;
          default:
            break;
        }},100)
        return () => clearInterval(interval)
  },[currKey])
}
  return (
    <>
        <div className="player" style={{
            top : positionX + "%",
            left : positionY + "%"
        }}></div>
    </>
  )
}


export default Player