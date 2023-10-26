import './Game.css'
import { connect } from "react-redux"
import { initGame } from "../features/gameSlice"
import PropTypes from 'prop-types'
import { NumImages } from "../constants"

import GameHeaderView from "./GameHeaderView"
import GameStatusView from "./GameStatusView"
import PuzzleView from "./PuzzleView"
import RestartButtonView from './RestartButtonView'

const Game = (props) => {
    return (
        <div className="text-center bg-none">
            <GameHeaderView gameName={props.gameName} />
            <GameStatusView />
            <PuzzleView />
            <RestartButtonView onInitGame={props.onInitGame} />
        </div>
    )
}

Game.propTypes = {
    gameName: PropTypes.string
}

const mapStateToProps = state => {
    return {
        gameName: state.tileGame.gameName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitGame: (gameId) => {
            dispatch(initGame({ gameId, imageNumber: Math.floor(Math.random() * NumImages) + 1, doShuffling: true }))
        }
    }
}

const GameView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game)

export default GameView