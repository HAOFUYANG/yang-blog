/**
 * new操作符
 */

export function New<T>(constructor:Function,...args:any[]):T{
  // 1. 创建一个空对象，继承 constructor 的原型
  const obj = Object.create(constructor.prototype)
  // 2. 将 obj 作为 this ，执行 constructor ，传入参数
  constructor.apply(obj,args)
  return obj
}

class Foo {
  name:string
  age:number
  constructor(name:string,age:number){
    this.name = name
    this.age = age
  }
  getInfo() {
    return this.name+this.age
  }
}
const a = New<Foo>(Foo,'yang',18)
console.log('a :>> ', a);
console.log('a.getInfo() :>> ', a.getInfo()); //a.getInfo() :>>  yang18

