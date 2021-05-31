export function debounce(func,delay = 500) {
  let timer = null

  return function (...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    },delay)
  }
}

export function formatDate(date, format) {
  let Y = date.getFullYear() + ''
  let M = date.getMonth() + 1 +''
  let D = date.getDate() + ''
  let h = date.getHours() + ''
  let m = date.getMinutes() + ''
  let s = date.getSeconds() + ''
  let o = {
    'M+': M,
    'D+': D,
    'h+': h,
    'm+': m,
    's+': s
  }
  if(/(Y+)/.test(format)) {
    let length = RegExp.$1.length
    format = format.replace(RegExp.$1, Y.substr(4 - length))
  }
  for(let k in o) {
    if(new RegExp(`(${k})`).test(format)) {
      let length = RegExp.$1.length
      format = format.replace(RegExp.$1, (o[k].length === 1) ? ('0' + o[k]).substr(2 - length) : o[k].substr(2 - length) )
    }
  }
  return format
}