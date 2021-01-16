import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface CounterState {
    mode: string;
}

const initialState: CounterState = {
    mode: "pc"
}

export const displaySlice = createSlice({
    name: 'display',
    initialState,
    reducers: {
        setPC: state => { state.mode = "pc" },
        setMobile: state => { state.mode = "mobile" },
    },
});

export const {setPC, setMobile} = displaySlice.actions;

export const selectMode = (state: RootState) => state.display.mode;

export default displaySlice.reducer;