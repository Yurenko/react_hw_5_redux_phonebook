import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import filterReduser from './filterReduser';

const rootStorage = combineReducers({
  filterReduser,
});

const store = createStore(rootStorage, devToolsEnhancer());

export default store;
