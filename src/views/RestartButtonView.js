import { GameId_3x3 } from '../constants'
import PropTypes from 'prop-types'

const RestartButtonView = (props) =>
    <div className='flex justify-center mt-9'>
        <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' onClick={() => props.onInitGame(GameId_3x3)}>Restart</button>
    </div>


RestartButtonView.propTypes = {
    onInitGame: PropTypes.func
}

export default RestartButtonView