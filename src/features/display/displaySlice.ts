import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export const displaySlice = createSlice({
    name: 'display',
    initialState: {
        mode: "pc"
    },
    reducers: {
        setPC: state => { 
            console.log("set pc")
            state.mode = "pc" 
        },
        setMobile: state => { 
            console.log("set mobile")
            state.mode = "mobile"
        },
    },
});

export const {setPC, setMobile} = displaySlice.actions;

export const selectMode = (state: RootState) => state.display.mode;

export default displaySlice.reducer;