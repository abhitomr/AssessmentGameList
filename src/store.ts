import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState, Game } from '../type';
import { gameData } from '../data';

const initialState: AppState = {
  games:gameData,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addGame(state, action: PayloadAction<Game>) {
      state.games.push(action.payload);
    },
  },
});

export const { addGame } = gamesSlice.actions;

const store = configureStore({
  reducer: {
    games: gamesSlice.reducer,
  },
});

export default store;
