import { combineReducers } from 'redux';
import { characters, heroes } from './super-squad';

const rootReducer = combineReducers({
  characters,
  heroes,
});

export default rootReducer;
