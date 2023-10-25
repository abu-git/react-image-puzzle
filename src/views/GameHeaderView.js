import PropTypes from 'prop-types'

const GameHeaderView = (props) => {
    return(
        <>
            <header>
                <h3>Sliding Image Puzzle</h3>
            </header>
            <div>
                <h2>{props.gameName}</h2>
            </div>
        </>
    )
    
}

GameHeaderView.propTypes = {
    gameName: PropTypes.string
}

export default GameHeaderView