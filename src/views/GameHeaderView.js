import PropTypes from 'prop-types'

const GameHeaderView = (props) => {
    return(
        <div className='py-2'>
            <header className='py-1'>
                <h3>Sliding Image Puzzle</h3>
            </header>
            <div>
                <h2 className='text-2xl font-extrabold'>{props.gameName}</h2>
            </div>
        </div>
    )
    
}

GameHeaderView.propTypes = {
    gameName: PropTypes.string
}

export default GameHeaderView