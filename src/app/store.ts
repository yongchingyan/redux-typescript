import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import displayReducer from '../features/display/displaySlice';

export const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
