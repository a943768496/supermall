import {request} from 'network/request'

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getCategoryDetail(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}