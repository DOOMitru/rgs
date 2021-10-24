import './StarMatchApp.css'
import { useState } from 'react'
import StarMatchGame from './components/StarMatchGame'

const StarMatchApp = () => {
    const [gameKey, setGameKey] = useState(1)
    return (
        <StarMatchGame
            startNewGame={() => setGameKey(gameKey + 1)}
            key={gameKey}>
        </StarMatchGame>
    )
}

export default StarMatchApp
