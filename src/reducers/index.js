import { combineReducers } from 'redux';
import { characters, heroes } from './super-squad';
import { recipes } from './recipe-finder';

const rootReducer = combineReducers({
  characters,
  heroes,
  recipes,
});

export default rootReducer;
