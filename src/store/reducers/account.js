import { ACCOUNT_UP_INFO } from '../actionTypes'

const initialState = {
  token: '',
  id: '',
  name: '',
  avatar: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ACCOUNT_UP_INFO:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
