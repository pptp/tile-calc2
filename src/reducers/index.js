import { combineReducers } from 'redux';
// import walls from "./walls";
import walls from "./walls";
import {reducer as formReducer} from 'redux-form';


const reducers = {
  // walls, 
  walls,
  form: formReducer
};
module.exports = combineReducers(reducers);
