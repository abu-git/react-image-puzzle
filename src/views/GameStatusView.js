import PropTypes from 'prop-types'
import { connect } from 'react-redux'


const GameStatus = (props) => {
    if(props.gameComplete){
        return (
            <div className='game-status'>
                <div>
                    <h4 className='text-lg font-bold py-2'>Game Complete!!!</h4>
                </div>
                <div><h3>You used {props.moves} moves</h3></div>
            </div>
        )
    }else {
        return(
            <div className='py-2'>
                <h4 className='font-semibold text-md'>Moves: {props.moves} </h4>
            </div>
        )
    }
    
}

GameStatus.propTypes = {
    moves: PropTypes.number,
    gameComplete: PropTypes.bool
}

const mapStateToProps = (state) => {
    return {
        moves: state.tileGame.moves,
        gameComplete: state.tileGame.gameComplete
    }
}

const GameStatusView = connect(mapStateToProps)(GameStatus)

export default GameStatusView