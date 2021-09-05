
import { SAVE_COUNTRIES } from "../types/types"

const intialstate={
    countries:[]
}
const saveCountiresReducer=(state=intialstate,action)=>{
    if(action.type===SAVE_COUNTRIES)
    {
        // console.log(state,'reducer')
        return action.countries
    }
    else return state
}
export default saveCountiresReducer