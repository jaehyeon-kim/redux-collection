//// super squad
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_CHARACTER = 'REMOVE_CHARACTER';

export function addCharacterById(id) {
  const action = {
    type: ADD_CHARACTER,
    id: id,
  };
  return action;
}

export function removeCharacterById(id) {
  const action = {
    type: REMOVE_CHARACTER,
    id: id,
  };
  return action;
}

//// recipe finder
export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORITE_RECIPE';

export function setRecipes(items) {
  return {
    type: SET_RECIPES,
    items: items,
  };
}

export function favoriteRecipe(recipe) {
  return {
    type: FAVORITE_RECIPE,
    recipe: recipe,
  };
}
