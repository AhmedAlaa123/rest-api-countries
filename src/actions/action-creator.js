import { ADD_COUNTRY,SAVE_COUNTRIES,CHANGE_MODE } from "../types/types";

const addCountryAction=country=>{
    return {type:ADD_COUNTRY,country}
}
const saveCountriesAction=countries=>{
    return {type:SAVE_COUNTRIES,countries}
}
const changeMoodAction=()=>{
    return {
        type:CHANGE_MODE
    }
}

export {addCountryAction,saveCountriesAction,changeMoodAction}