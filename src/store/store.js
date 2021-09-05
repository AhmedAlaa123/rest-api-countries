import { createStore,combineReducers } from "redux"
import changeModeReducer from './../reducers/change-mode-reducer';
import selectCountryReducer from './../reducers/select-country-reducer';
import saveCountiresReducer from './../reducers/save-countries-reducer';

// const intialState={
//     darkMode:false,
//     selectedCountry:'',
//     countries:[]
// }

const AppReducers=combineReducers({modeReducer:changeModeReducer,
    countryReducer:selectCountryReducer,saveCountiresReducer:saveCountiresReducer});
const store=createStore(AppReducers)
export default store;
