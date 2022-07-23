function newInstanceof(source:any,target:any):boolean {
  //判空和所有的值类型
  console.log('typeof souce :>> ', typeof source);
  console.log('object :>> ', !['function','object'].includes(typeof source)|| typeof source == null);
  if(!['function','object'].includes(typeof source) || typeof source == null) return false
  console.log('111 :>> ', 111);
  let tempSource = source
  while(tempSource){
    if(tempSource.__proto__ === target.prototype){
      return true
    }
    //如果找不到
    //那就继续顺着原型链，往上找
    tempSource = tempSource.__proto__
  }
  return false
}
console.info( newInstanceof({}, Object) )
console.info( newInstanceof([], Object) )
console.info( newInstanceof([], Array) )
console.info( newInstanceof({}, Array) )