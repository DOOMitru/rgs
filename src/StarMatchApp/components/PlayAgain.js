const PlayAgain = props => (
    <div className="game-done">
        <div className="message" style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}>
            {props.gameStatus === 'lost' ? 'Game over!' : 'Winner!'}
        </div>
        <button onClick={props.onClick}>Play again</button>
    </div>
)

export default PlayAgain
