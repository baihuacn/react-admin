import request from '@/utils/request'

export function fetchLogin(params) {
  return request.post('/login', params)
}

export function fetchUserInfo(params) {
  return request.post('/userInfo', params)
}

export function fetchLogout(params) {
  return request.post('/logout', params)
}
