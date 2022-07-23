/**
 * 获取详细的数据类型
 * @param val
 */
function getType(val: any): string {
  //调用原型中的方法
  const typeProto = Object.prototype.toString.call(val) //[object String]
  const spaceIndex = typeProto.indexOf(' ')
  console.log('spaceIndex :>> ', spaceIndex);
  const type = typeProto.slice(spaceIndex + 1, -1)
  return type.toLowerCase()
}
console.info(getType(() => { }))
console.log(getType(100))
console.log(getType({}))