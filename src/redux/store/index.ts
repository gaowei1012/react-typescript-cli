/*
 * @Description: create store
 * @Author: 执念
 * @Date: 2019-09-16 21:16:08
 * @LastEditTime: 2019-09-16 21:33:19
 * @LastEditors: 执念
 */
import { createStore, combineReducers } from 'redux';
import { rootReducer } from '../reducers';

const reducers = combineReducers({
  root: rootReducer
});

const store = createStore(reducers);

export default store;
export { store };
