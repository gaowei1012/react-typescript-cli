/*
 * @Description: 合并reducer 
 * @Author: 执念
 * @Date: 2019-09-16 21:29:44
 * @LastEditTime: 2019-09-16 21:32:22
 * @LastEditors: Please set LastEditors
 */
import { combineReducers } from 'redux'
import { addReducer } from './count'


const rootReducer = combineReducers({
  count: addReducer
})

export default rootReducer
export { rootReducer }
