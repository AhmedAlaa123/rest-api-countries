import { ADD_COUNTRY } from "../types/types";

const intialState={
    country:''
}
function selectCountryReducer(state=intialState,action){
    if(action.type===ADD_COUNTRY)
    return action.country
    return state;
}
export default selectCountryReducer;