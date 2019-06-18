import request from '@/utils/request'

export function fetchMenus(params) {
  return request.get('/menus', { params })
}
