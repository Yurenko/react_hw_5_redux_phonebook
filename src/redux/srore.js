import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import filterReducer from './filterReducer';

const rootStorage = combineReducers({
  filterReducer,
});

const store = createStore(rootStorage, devToolsEnhancer());

export default store;
