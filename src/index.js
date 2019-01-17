import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import { BrowserRouter, Route, History } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import PostsIndex from './components/PostsIndex';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(ReduxThunk, ReduxPromise)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
