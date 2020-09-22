function createCurry(func) {
  // 获取函数参数长度
  const arity = func.length;
  // 获取传进来的参数
  const args = Array.prototype.slice.call(arguments, 1);
  return function () {
    // 合并参数
    let _args = [].slice.call(arguments);
    [].push.apply(_args, args);
    // 参数没有传递完毕，继续递归
    if (_args.length < arity) {
      return createCurry(this, func, _args);
    }
    // 参数传递完毕，执行原始函数，并返回结果
    return func.apply(this, _args);
  };
}
