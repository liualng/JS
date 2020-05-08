// 浅拷贝
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
*/
function deepCopy(object){
  // 判断是否为对象
  if(typeof object !== 'object') return;
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