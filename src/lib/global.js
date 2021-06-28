function throttle(delay, noTrailing, callback, debounceMode) {
  // eslint-disable-next-line init-declarations
  let timeoutID
  let lastExec = 0
  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback
    callback = noTrailing
    noTrailing = undefined
  }

  function wrapper() {
    let self = this
    let elapsed = Number(new Date()) - lastExec
    let args = arguments

    function exec() {
      lastExec = Number(new Date())
      callback.apply(self, args)
    }

    function clear() {
      timeoutID = undefined
    }

    if (debounceMode && !timeoutID) {
      exec()
    }
    if (timeoutID) {
      clearTimeout(timeoutID)
    }
    if (debounceMode === undefined && elapsed > delay) {
      exec()
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(
        debounceMode ? clear : exec,
        debounceMode === undefined ? delay - elapsed : delay
      )
    }
  }

  return wrapper
}

window.throttle = throttle

function debounce(delay, atBegin, callback) {
  return callback === undefined
    ? throttle(delay, atBegin, false)
    : throttle(delay, callback, atBegin !== false)
}

window.debounce = debounce
window.clone = function (obj) {
  if (obj === null) {
    return obj
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime())
  }
  if (obj instanceof Array) {
    return obj.map((row) => window.clone(row))
  }
  if (obj instanceof Object) {
    let ret = {}
    Object.keys(obj).forEach((key) => {
      ret[key] = window.clone(obj[key])
    })
    return ret
  }
  return obj
}
window.cssStyle = function css(css) {
  let style = document.createElement('style')
  style.type = 'text/css'
  style.appendChild(document.createTextNode(css))
  document.getElementsByTagName('head')[0].appendChild(style)
}
