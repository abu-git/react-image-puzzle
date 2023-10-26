import {
    generateTileSet,
    swapTilesInSet,
    allTilesAreAligned,
    getIndexInHighScoreList,
    tileIsValidForMovement
} from './tilesetFunctions.ts';
import { gameConfigs } from '../game-config.js';
import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';

// The state is an object with game state and an array of tiles
// A tile is a number 1-N and the blank tile is represented by 0

const initialState = {
    moves: 0,
    gameComplete: false,
    imageNumber: 1,
    tiles: [],
    size: undefined,
    gameId: undefined,
    gameName: undefined
}

const emptyTileId = 0

export const gameSlice = createSlice({
    name: 'tileGame',
    initialState: initialState,

    reducers: {
        initGame(state, action){
            const payload = action.payload
            Object.assign(state, initialState)
            state.imageNumber = payload.imageNumber
            //console.log(state.imageNumber)
            state.tiles = generateTileSet(gameConfigs[payload.gameId].size, payload.doShuffling)
            state.size = gameConfigs[payload.gameId].size
            state.gameId = payload.gameId
            state.gameName = gameConfigs[payload.gameId].name
        },

        moveTile(state, action){
            if(state.gameComplete || !tileIsValidForMovement(action.payload.id, state.size, state.tiles)){
                return state
            }

            // Move tile i.e swap with the empty tile
            state.moves = state.moves + 1
            state.tiles = swapTilesInSet(state.tiles, emptyTileId, action.payload.id)
            state.gameComplete = allTilesAreAligned(state.tiles)
        }
    }
})

export const { initGame, moveTile } = gameSlice.actions
export default gameSlice.reducer