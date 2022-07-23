/**
 * 数组扁平化
 * concat
 */

export function flattenByConcat(arr:any[]):any[]{
  let res:any =[]
  arr.forEach(item=>{
    if(Array.isArray(item)){
      res = res.concat(flattenByConcat(item))
    }else {
      res=res.concat(item)
    }
  })
  return res
}
// console.log('flatten() :>> ', flattenByConcat([1,2,[3],[4,[5,[6]]]]));

/**
 * reduce
 */

export function flattenByReduce(arr:any[]=[]):any[] {
  let res:any = []
  arr.reduce((acc,cur,index)=>{
    res = acc.concat(Array.isArray(cur)?flattenByReduce(cur):cur)
  },[])
  return res
}
console.log('flatten() :>> ', flattenByConcat([1,2,[3],[4,[5,[6]]]]));
