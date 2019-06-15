import { SIDER_UP_COLLAPSED, SIDER_UP_MENUS } from '../actionTypes'

const initialState = {
  collapsed: false,
  menus: [
    {
      id: 1,
      pid: -1,
      icon: 'dashboard',
      name: '工作台',
      path: '/',
    },
    {
      id: 2,
      pid: -1,
      icon: 'form',
      name: '表单页',
      path: '/form',
    },
    {
      id: 3,
      pid: 2,
      icon: '',
      name: '基础表单',
      path: '/form/basic-form',
    },
    {
      id: 4,
      pid: 2,
      icon: '',
      name: '分布表单',
      path: '/form/step-form',
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIDER_UP_COLLAPSED:
      return {
        ...state,
        collapsed: action.payload,
      }
    case SIDER_UP_MENUS:
      return {
        ...state,
        menus: action.payload,
      }
    default:
      return state
  }
}
