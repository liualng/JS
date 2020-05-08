/* call */
Function.prototype.myCall = function (context) {
  // 判断调用者是否为函数，即对象
  if (typeof this !== 'object') {
    console.error('非函数调用');
  }
  // 获取参数
  const args = [...arguments].slice(1);
  let result;
  // 获取对象,默认为window
  context = context || window;
  // 将函数设为对象方法
  context.func = this;
  // 调用函数
  result = context.func(...args);
  // 删除函数属性
  delete context.func;
  return result;
}

// apply
Function.prototype.myApply = function (context) {
  // 判断调用者是否为函数
  if (typeof this !== 'function') {
    console.error('type error');
  }
  // 获取对象
  context = context || window;
  // 获取参数
  const args = [...arguments].slice(1);
  // 结果
  let result;
  // 将函数的this绑定到对象
  context.func = this;
  // 调用函数
  result = context.func(args);
  // 删除函数属性
  delete context.func;
  // 返回结果
  return result;
}

// bind
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    console.error('type error');
  }
  context = context || window;
  const args = [...arguments].slice(1);
  const fn = this;
  return function Fn() {
    return fn.apply(
      // 可能被作为new构造函数使用
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};