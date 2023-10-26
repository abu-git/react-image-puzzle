//import logo from './logo.svg';
import './App.css';
import tileGame from './features/gameSlice';
import { initGame } from './features/gameSlice';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { GameId_3x3, NumImages } from './constants';
import GameView from './views/GameView';


const store = configureStore({
  reducer: {
    tileGame
  }
});

store.dispatch(initGame({ gameId: GameId_3x3, imageNumber: Math.floor(Math.random() * NumImages) + 1, doShuffling: true }));
//store.dispatch(initGame({ gameId: GameId_3x3, imageNumber: 2, doShuffling: true }));

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <main className='bg-green-100 h-full'>
          <GameView />
        </main>
      </Provider>
    </div>
  );
}

export default App;
