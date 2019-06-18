import { BASELAYOUT_UP_COLLAPSED, BASELAYOUT_UP_MENUS } from '../actionTypes'

export function updateBaseLayoutCollapsed(payload) {
  return {
    type: BASELAYOUT_UP_COLLAPSED,
    payload,
  }
}

export function updateBaseLayoutMenus(payload) {
  return {
    type: BASELAYOUT_UP_MENUS,
    payload,
  }
}
