var data = {
  name: 'joinmouse',
  friends: [1,2,3]
}

function observe(data) {
  if(!data || typeof data !== 'object') return
  for(var key in data) {
    let value = data[key]
    Object.defineProperty(data, key, {
      enumerable: true,  //定义key可遍历
      configurable: true, //定义key可删除
      get: function() {
        console.log(`get ${value}`)
        return value
      },
      set: function(newValue) {
        console.log(`change happen: ${value} => ${newValue}`)
        value = newValue
      }
    })
    //若data[key]还是对象，则递归调用
    if(typeof value === 'object') {
      observe(value)
    }
  } 
}

//调用test: node index.js
observe(data)

console.log(data.name)
data.name = 'I love u'
data.friends[0] = 4