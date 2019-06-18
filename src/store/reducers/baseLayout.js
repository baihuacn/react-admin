import { BASELAYOUT_UP_COLLAPSED, BASELAYOUT_UP_MENUS } from '../actionTypes'

const initialState = {
  collapsed: false,
  menus: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case BASELAYOUT_UP_COLLAPSED:
      return {
        ...state,
        collapsed: action.payload,
      }
    case BASELAYOUT_UP_MENUS:
      console.log(action.payload)
      return {
        ...state,
        menus: action.payload,
      }
    default:
      return state
  }
}
