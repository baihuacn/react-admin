import { BASELAYOUT_UP_COLLAPSED } from '../actionTypes'

const initialState = {
  collapsed: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case BASELAYOUT_UP_COLLAPSED:
      return {
        ...state,
        collapsed: action.payload,
      }
    default:
      return state
  }
}
