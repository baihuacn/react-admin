import { ACCOUNT_UP_INFO } from '../actionTypes'

export function updateAccountInfo(payload) {
  return {
    type: ACCOUNT_UP_INFO,
    payload,
  }
}
