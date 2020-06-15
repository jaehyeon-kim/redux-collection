//// Age Teller
// import React from 'react';
// import ReactDOM from 'react-dom';
// import AgeTeller from './components/age-teller/AgeTeller';

// ReactDOM.render(<AgeTeller />, document.getElementById('root'));

//// Super Squad
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import SuperSquad from './components/super-squad/SuperSquad';
// import rootReducer from './reducers';
// const store = createStore(rootReducer);
// // for testing
// // import { addCharacterById } from './actions';
// // console.log('store.getState()', store.getState());
// // store.subscribe(() => null);
// // store.dispatch(addCharacterById(2));

// ReactDOM.render(
//   <Provider store={store}>
//     <SuperSquad />
//   </Provider>,
//   document.getElementById('root')
// );

//// Recipe Finder
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import RecipeFinder from './components/recipe-finder/RecipeFinder';

const store = createStore(rootReducer);
// store.subscribe(() => console.log('store', store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <RecipeFinder />
  </Provider>,
  document.getElementById('root')
);
