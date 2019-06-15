import { combineReducers } from 'redux'
import account from './account'
import sider from './sider'

const reducers = combineReducers({ account, sider })

export default reducers
