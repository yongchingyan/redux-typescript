import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPC,
  setMobile,
  selectMode,
} from './displaySlice';

export var Display = () => {
    const mode = useSelector(selectMode);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Current Mode: {mode}</p>
            <button onClick={()=> { 
                console.log("set mobile")
                dispatch(setMobile) 
            }}> Switch Mode </button>
        </div>
    )
}