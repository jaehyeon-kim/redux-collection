import { combineReducers } from 'redux';
import { characters, heroes } from './super-squad';
import { recipes, favoriteRecipes } from './recipe-finder';

const rootReducer = combineReducers({
  characters,
  heroes,
  recipes,
  favoriteRecipes,
});

export default rootReducer;
