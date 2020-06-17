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

// //// Recipe Finder
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './reducers';
// import RecipeFinder from './components/recipe-finder/RecipeFinder';
// import FavoriteRecipeList from './components/recipe-finder/FavoriteRecipeList';

// const store = createStore(rootReducer);
// store.subscribe(() => console.log('store', store.getState()));

// ReactDOM.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/" component={RecipeFinder} />
//         <Route path="/favorites" component={FavoriteRecipeList} />
//       </Switch>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('root')
// );

//// Meme Generator
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import MemeGenerator from './components/meme-generator/MemeGenerator';
import { fetchMemes } from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMemes());

ReactDOM.render(
  <Provider store={store}>
    <MemeGenerator />
  </Provider>,
  document.getElementById('root')
);
