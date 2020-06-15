import { SET_RECIPES, FAVORITE_RECIPE } from '../actions';

export function recipes(state = [], action) {
  switch (action.type) {
    case SET_RECIPES:
      return action.items;
    default:
      return state;
  }
}

export function favoriteRecipes(state = [], action) {
  switch (action.type) {
    case FAVORITE_RECIPE:
      return [...state, action.recipe];
    default:
      return state;
  }
}
