import { BASELAYOUT_UP_COLLAPSED, BASELAYOUT_UP_SELLECTEDKEYS, BASELAYOUT_UP_OPENKEYS } from '../actionTypes'

const initialState = {
  collapsed: false,
  selectedKeys: [],
  openKeys: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case BASELAYOUT_UP_COLLAPSED:
      return {
        ...state,
        collapsed: action.payload,
      }
    case BASELAYOUT_UP_SELLECTEDKEYS:
      return {
        ...state,
        selectedKeys: action.payload,
      }
    case BASELAYOUT_UP_OPENKEYS:
      return {
        ...state,
        openKeys: action.payload,
      }
    default:
      return state
  }
}
