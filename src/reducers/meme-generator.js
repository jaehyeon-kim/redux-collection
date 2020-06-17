import { RECEIVE_MEMES, NEW_MEME } from '../actions';

export function memes(state = [], action) {
  switch (action.type) {
    case RECEIVE_MEMES:
      return action.memes;
    default:
      return state;
  }
}

export function myMemes(state = [], action) {
  switch (action.type) {
    case NEW_MEME:
      return [...state, action.meme];
    default:
      return state;
  }
}
