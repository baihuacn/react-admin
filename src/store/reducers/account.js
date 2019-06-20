import { ACCOUNT_UP_TOKEN, ACCOUNT_UP_INFO, ACCOUNT_UP_MENUS } from '../actionTypes'

const initialState = {
  token: '',
  userInfo: {
    name: '',
    avatar: '',
  },
  menus: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_UP_TOKEN:
      return {
        ...state,
        token: action.payload,
      }
    case ACCOUNT_UP_INFO:
      return {
        ...state,
        userInfo: action.payload,
      }
    case ACCOUNT_UP_MENUS:
      return {
        ...state,
        menus: action.payload,
      }
    default:
      return state
  }
}
