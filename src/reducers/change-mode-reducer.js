
/*
 ================== This Reducer used to change mode to dark mode or light mode ==============
*/

import { CHANGE_MODE } from "../types/types";
var darkMode=localStorage.getItem('darkMode') // getting darkmode value from localstorge
if(darkMode) // check if darkmode is in localstorage
{
    // append to darkmode true if darkMode in localstorage is true as string false if darkMode in localstorage is false as string
    darkMode=darkMode==='true'?true:false
}
else{
    darkMode=false // apend defaulte value as false  if darkMode not in loaclstorage 
}
const intialState={
    darkMode
}
function changeModeReducer(state=intialState,action)
{
    const {darkMode}=state; // construct darkMode from state
    if(action.type===CHANGE_MODE)
    {
        localStorage.setItem('darkMode',!darkMode) // store darkMode in localStorage
        return {
            darkMode:!darkMode
        }
    }
    return state
}
export default changeModeReducer;