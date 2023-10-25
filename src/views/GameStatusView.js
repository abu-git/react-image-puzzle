import PropTypes from 'prop-types'
import { connect } from 'react-redux'


const GameStatus = (props) => {
    return(
        <div className=''>
            <h4>Moves: {props.moves} </h4>
        </div>
    )
}

GameStatus.propTypes = {
    moves: PropTypes.number
}

const mapStateToProps = (state) => {
    return {
        moves: state.tileGame.moves
    }
}

const GameStatusView = connect(mapStateToProps)(GameStatus)

export default GameStatusView