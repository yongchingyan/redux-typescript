import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPC,
  setMobile,
  selectMode,
} from './displaySlice';
import "../../css/display.scss"

// Component to detect and set the display mode in the redux store
// Curently it will switch to mobile mode if the window.innerwidth is below a certain width
// Else it will default to pc mode

// Future considerations: 
// setting the display mode base on Browser type using window.navigator.userAgent
// setting the display mode based on aspect ratio instead (window.innerwidth x window.innerHeight)

const minPCWidth: number = 768

export const Display = () => {

    const mode = useSelector(selectMode)
    const dispatch = useDispatch()
    const [width, setWidth] = useState(window.innerWidth)
    const handleWindowResize = () => {
        if (width !== window.innerWidth){
            setWidth(window.innerWidth)
            width<minPCWidth ? dispatch(setMobile()) : dispatch(setPC())
        }
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    })

    return (<div id="display">Current Display Mode: {mode}</div>)
}
