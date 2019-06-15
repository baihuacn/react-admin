import { SIDER_UP_COLLAPSED, SIDER_UP_MENUS } from '../actionTypes'

export function updateSiderCollapsed(payload) {
  return {
    type: SIDER_UP_COLLAPSED,
    payload,
  }
}

export function updateSiderMenus(payload) {
  return {
    type: SIDER_UP_MENUS,
    payload,
  }
}
