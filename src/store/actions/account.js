/**
 * @file 账户的action
 */
import { ACCOUNT_UP_TOKEN, ACCOUNT_UP_INFO, ACCOUNT_UP_MENUS } from '../actionTypes'

export function updateAccountToken(payload) {
  return {
    type: ACCOUNT_UP_TOKEN,
    payload,
  }
}

export function updateAccountInfo(payload) {
  return {
    type: ACCOUNT_UP_INFO,
    payload,
  }
}

export function updateAccountMenus(payload) {
  return {
    type: ACCOUNT_UP_MENUS,
    payload,
  }
}
