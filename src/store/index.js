/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import {  persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import thunk from 'redux-thunk';
import reducers from './reducers/index';

// Redux Persist config
// Change the redux persist blacklist to control what is stored in local storage
const config = {
  key: 'root',
  storage,
  blacklist: ['status'],
};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = persistCombineReducers(config, reducers);

// const middleware = [thunk];

const configureStore = () => {
  const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunk)),
  );

  const persistor = persistStore(
    store,
    null,
    () => { store.getState(); },
  );

  return { persistor, store };
};

export default configureStore;