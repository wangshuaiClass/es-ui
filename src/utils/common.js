/**
 * 函数防抖
 * @param { Promise } fn 执行函数
 */
export const debounce = fn => {
  let timer = null
  return () => {
    clearTimeout(timer)
    timer = setTimeout(async (...data) => {
      fn(...data)
    }, 300)
  }
}
/**
 * 函数节流
 * @param { Function } fn 延时调用函数
 */
let lastTime = null
export const throttle = fn => {
  return (...data) => {
    const nowTime = +new Date()
    if (nowTime > lastTime + 800 || !lastTime) {
      fn(...data)
      lastTime = nowTime
    }
  }
}
/**
 * 回到顶部
 */
export const backTop = () => {
  const y = document.documentElement.scrollTop || document.body.scrollTop
  if (y > 0) {
    window.requestAnimationFrame(backTop)
    window.scrollTo(0, y - y / 8)
  }
}

/**
 * qs.stringify
 */
export const qsStringify = json => {
  const res = []
  for (const key in json) {
    if (json.hasOwnProperty(key)) {
      res.push(`${key}=${json[key]}`)
    }
  }
  return res.join('&')
}

/**
 * deepclone 
 */
function getType(obj) {
  // tostring会返回对应不同的标签的构造函数
  var toString = Object.prototype.toString;
  var map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  if (obj instanceof Element) {
    return 'element';
  }
  return map[toString.call(obj)];
}

export const deepClone = data => {
  var type = getType(data);
  var obj;
  if (type === 'array') {
    obj = [];
  } else if (type === 'object') {
    obj = {};
  } else {
    //不再具有下一层次
    return data;
  }
  if (type === 'array') {
    for (var i = 0, len = data.length; i < len; i++) {
      obj.push(deepClone(data[i]));
    }
  } else if (type === 'object') {
    for (var key in data) {
      obj[key] = deepClone(data[key]);
    }
  }
  return obj;
}
