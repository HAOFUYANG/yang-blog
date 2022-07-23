
/**
 * 
 * @param fn 
 * @returns 
 */
function curry(fn:Function){
  const fnLength = fn.length
  let args:any =[]
  function calc(this:any,...newArgs:any) {
    // 积累参数
    args = [...args,...newArgs]
    // console.log('args :>> ', args);
    if(args.length<fnLength){
      // 参数不够，返回函数
      return calc
    }else {
      // 参数够了，返回执行结果
      return fn.apply(this,args.slice(0,fnLength))
    }
  }
  return calc
}
function add(a: number, b: number, c: number): number {
  return a + b + c
}
const curryAdd = curry(add)
const res = curryAdd(1)(2)(3)
console.info(res)