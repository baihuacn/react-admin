/**
 * @file 基础布局的action
 */
import { BASELAYOUT_UP_COLLAPSED, BASELAYOUT_UP_SELLECTEDKEYS, BASELAYOUT_UP_OPENKEYS } from '../actionTypes'

export function updateBaseLayoutCollapsed(payload) {
  return {
    type: BASELAYOUT_UP_COLLAPSED,
    payload,
  }
}
export function updateBaseLayoutSelectedKeys(payload) {
  return {
    type: BASELAYOUT_UP_SELLECTEDKEYS,
    payload,
  }
}
export function updateBaseLayoutOpenKeys(payload) {
  return {
    type: BASELAYOUT_UP_OPENKEYS,
    payload,
  }
}
