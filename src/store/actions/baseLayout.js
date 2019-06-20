import { BASELAYOUT_UP_COLLAPSED } from '../actionTypes'

export function updateBaseLayoutCollapsed(payload) {
  return {
    type: BASELAYOUT_UP_COLLAPSED,
    payload,
  }
}
