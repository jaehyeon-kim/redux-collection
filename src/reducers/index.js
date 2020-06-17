import { combineReducers } from 'redux';
import { characters, heroes } from './super-squad';
import { recipes, favoriteRecipes } from './recipe-finder';
import { memes, myMemes } from './meme-generator';

const rootReducer = combineReducers({
  characters,
  heroes,
  recipes,
  favoriteRecipes,
  memes,
  myMemes,
});

export default rootReducer;
