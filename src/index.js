import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import AgeTeller from './components/age-teller/AgeTeller';

import SuperSquad from './components/super-squad/SuperSquad';
import rootReducer from './reducers';
// import { addCharacterById } from './actions';
const store = createStore(rootReducer);
// console.log('store.getState()', store.getState());
store.subscribe(() => null);
// store.dispatch(addCharacterById(2));

ReactDOM.render(
  <Provider store={store}>
    <SuperSquad />
  </Provider>,
  document.getElementById('root')
);
