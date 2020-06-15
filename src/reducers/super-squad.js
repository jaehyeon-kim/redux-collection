import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';

export function createCharacter(id) {
  let character = characters_json.find((c) => c.id === id);
  return character;
}

export function characters(state = characters_json, action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter((item) => item.id !== action.id);
      return characters;
    case REMOVE_CHARACTER:
      return [...state, createCharacter(action.id)];
    default:
      return state;
  }
}

export function heroes(state = [], action) {
  switch (action.type) {
    case ADD_CHARACTER:
      let heroes = [...state, createCharacter(action.id)];
      return heroes;
    case REMOVE_CHARACTER:
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}
