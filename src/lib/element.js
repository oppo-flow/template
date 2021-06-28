function keepAddClas(className) {
  if (this.classList) {
    this.classList.add(className)
  } else {
    this.setAttribute('class', className)
  }
}

HTMLElement.prototype.addClass = function (classes) {
  switch (classes.constructor.name) {
    case 'Array':
      classes.forEach((classNameA) => {
        keepAddClas.call(this, classNameA)
      })
      break
    case 'Object':
      for (const className in classes) {
        // eslint-disable-next-line no-prototype-builtins
        if (classes.hasOwnProperty(className)) {
          if (classes[className]) {
            keepAddClas.call(this, className)
          }
        }
      }
      break
    case 'String':
      classes = classes.split(' ')
      this.addClass(classes)
      break
    default:
      console.log(`addClass fail ${classes.constructor.name}`)
  }
}

HTMLElement.prototype.remClass = function (classes) {
  // console.log(`remClass:${JSON.stringify(classes)}`);
  switch (classes.constructor.name) {
    case 'Array':
      classes.forEach((classNameB) => {
        classNameB = classNameB.trim()
        this.classList.remove(classNameB)
      })
      break
    case 'Object':
      for (const className in classes) {
        // eslint-disable-next-line no-prototype-builtins
        if (classes.hasOwnProperty(className)) {
          if (classes[className]) {
            this.classList.remove(className)
          }
        }
      }
      break
    case 'String':
      classes = classes.split(' ')
      this.remClass(classes)
      break
    default:
      console.log(`addClass fail ${classes.constructor.name}`)
  }
}
HTMLElement.prototype.toggleClass = function (classes) {
  switch (classes.constructor.name) {
    case 'Array':
      classes.forEach((classNameC) => {
        classNameC = classNameC.trim()
        this.classList.toggle(classNameC)
      })
      break
    case 'Object':
      for (const className in classes) {
        // eslint-disable-next-line no-prototype-builtins
        if (classes.hasOwnProperty(className)) {
          if (classes[className]) {
            this.classList.toggle(className)
          }
        }
      }
      break
    case 'String':
      classes = classes.split(' ')
      this.toggleClass(classes)
      break
    default:
      console.log(`toggleClass fail ${classes.constructor.name}`)
  }
}
HTMLElement.prototype.hasClass = function (name) {
  if (this.classList) {
    let flag = false
    ;[...this.classList].forEach((row) => {
      if (row === name) {
        flag = true
      }
    })
    return flag
  } else {
    return false
  }
}
