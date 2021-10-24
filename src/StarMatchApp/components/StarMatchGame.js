import { useEffect, useState } from 'react'
import { range, random, sum, randomSumIn } from '../utils'

import PlayAgain from './PlayAgain'
import PlayNumber from './PlayNumber'
import StarsDisplay from './StarsDisplay'

const MAX_STARS = 9
const MAX_SECONDS = 10

const useStarMatchGameState = () => {
    const [stars, setStars] = useState(random(1, MAX_STARS))

    const [available, setAvailable] = useState(range(1, MAX_STARS))
    const [candidates, setCandidates] = useState([])
    const [seconds, setSeconds] = useState(MAX_SECONDS)

    useEffect(() => {
        if (seconds <= 0 || available.length === 0) return

        const timer = setTimeout(() => {
            setSeconds(seconds - 1)
        }, 1000)

        return () => clearTimeout(timer)
    })

    const setGameState = newCandidates => {
        if (sum(newCandidates) !== stars) setCandidates(newCandidates)
        else {
            const newAvailable = available.filter(n => !newCandidates.includes(n))
            setStars(randomSumIn(newAvailable, MAX_STARS))
            setAvailable(newAvailable)
            setCandidates([])
        }
    }

    return {
        stars,
        available,
        candidates,
        seconds,
        setGameState
    }
}

const StarMatchGame = props => {
    const {
        stars,
        available,
        candidates,
        seconds,
        setGameState
    } = useStarMatchGameState()

    let gameStatus = 'active'
    if (available.length === 0) gameStatus = 'won'
    else if(seconds === 0) gameStatus = 'lost'

    const numberStatus = number => {
        const candidatesAreWrong = sum(candidates) > stars
        if (!available.includes(number)) return 'used'
        if (candidates.includes(number)) return candidatesAreWrong ? 'wrong' : 'candidate'
        return 'available'
    }

    const onNumberClick = (number, status) => {
        if (gameStatus !== 'active') return
        if (status === 'used') return

        const newCandidates = status === 'available' ?
            [...candidates, number] :
            candidates.filter(n => n !== number)

        setGameState(newCandidates)
    }

    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    {
                        gameStatus !== 'active' ?
                        <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}></PlayAgain> :
                        <StarsDisplay count={stars}></StarsDisplay>
                    }
                </div>
                <div className="right">
                    {range(1, 9).map(n =>
                        <PlayNumber
                            onClick={onNumberClick}
                            status={numberStatus(n)}
                            key={n}
                            number={n}>
                        </PlayNumber>
                    )}
                </div>
            </div>
            <div className="timer">Time Remaining: {seconds}</div>
        </div>
    )
}

export default StarMatchGame
