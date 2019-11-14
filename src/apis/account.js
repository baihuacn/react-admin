/**
 * @file 账户相关口
 */
import request from '@/utils/request'

export function fetchLogin(params) {
  return request.post('/login', params)
}

export function fetchLogout(params) {
  return request.post('/logout', params)
}

export function fetchUserInfo(params) {
  return request.get('/userInfo', { params })
}

export function fetchMenus(params) {
  return request.get('/menus', { params })
}
