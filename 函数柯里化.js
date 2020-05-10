// 函数柯里化是将一个多个参数的函数转化为一系列一个参数的函数
function curry (fn) {
  let args = Array.prototype.slice.call(arguments,1)
  return function () {  
    let innerArgs = Array.prototype.slice.call(arguments)
    let finalArgs = args.concat(innerArgs);
    return fn.apply(null,finalArgs);
  }
}