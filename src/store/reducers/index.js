/**
 * @file reducer 根文件
 */
import { combineReducers } from 'redux'
import account from './account'
import baseLayout from './baseLayout'

const reducers = combineReducers({ account, baseLayout })

export default reducers
