/*
浅拷贝
浅拷贝指的是将一个对象的属性值复制到另一个对象，
如果有的属性的值为引用类型的话，那么会将这个引用的地址
复制给对象，因此两个对象会有同一个引用类型的引用。
浅拷贝可以使用  Object.assign 和展开运算符来实现。 
*/
function shallowCopy(object) {
  // 是否为对象
  if (typeof object !== 'object') return;
  // 对象or数组
  const newObj = Array.isArray(object) ? [] : {};
  // 遍历属性并赋值
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      newObj[key] = object[key];
    }
  }
  return newObj;
}

/*
深复制
引用的属性也是有基本属性组成,复制时遇到引用属性，就遍历为基本属性复制：递归 
深拷贝相对浅拷贝而言，如果遇到属性值为引用类型的时候，
它新建一个引用类型并将对应的值复制给它，
因此对象获得的一个新的引用类型而不是一个原有类型的引用。
深拷贝对于一些对象可以使用 JSON 的两个函数来实现，
但是由于 JSON 的对象格式比 js 的对象格式更加严格，
所以如果属性值里边出现函数或者 Symbol 类型的值时，
会转换失败。
*/
function deepCopy(object) {
  // 判断是否为对象
  if (typeof object !== 'object') return;
  // 对象or数组
  let newObj = Array.isArray(object) ? [] : {};
  // 遍历属性并复制
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      // 递归遍历引用属性
      newObj[key] = typeof object[key] === 'object' ?
        deepCopy(object[key]) : object[key]
    }
  }
}