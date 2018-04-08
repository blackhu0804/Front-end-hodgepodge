/* 
  一次用Mustache渲染前端数据时，
  在后台获取数据为类数组对象，
  转化为数组对象的格式来渲染
*/
var arrayLike = {
  0: 'name',
  1: 'age',
  2: 'sex',
}
console.log(arrayLike)
// {0: "name", 1: "age", 2: "sex"}

var data = []
for (var i in arrayLike) {
  var obj = {}
  obj.id = i
  obj.name = arrayLike[i]
  data.push(obj)
}
console.log(data)
    // [{id: "0", name: "name"}
    // {id: "1", name: "age"}
    // {id: "2", name: "sex"}]