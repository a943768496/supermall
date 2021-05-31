import {request} from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.lowNowPrice = itemInfo.lowNowPrice
    this.highNowPrice = itemInfo.highNowPrice
    this.lowPrice = itemInfo.lowPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = services
  }
}

export class shop {
  constructor(shopInfo, score) {
    this.name = shopInfo.name
    this.shopLogo = shopInfo.shopLogo
    this.sumSell = shopInfo.cSells
    this.sumGoods = shopInfo.cGoods
    this.score = score
  }
}

export class detailParams {
  constructor(rules, info) {
    this.rules = rules
    this.info = info
  }
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

export class choice {
  constructor(color, size, price, data) {
    this.color = color.list
    this.size = size.list
    this.low = price.lowNowPrice
    this.high = price.highNowPrice
    this.title = data.itemInfo.title
    this.picture = data.itemInfo.topImages[0]
  }
}
