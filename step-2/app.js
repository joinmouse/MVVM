//Subject是构造函数，new Subject()创建一个主题对象,该对象内部维护订阅当前主题的观察者数组
function Subject() {
  this.observers = []
}
Subject.prototype.addObserver = function(observer) {
  this.observers.push(observer)
}
Subject.prototype.removeObserver = function(observer) {
  var index = this.observers.indexOf(observer)
  if(index > -1) {
    this.observers.splice(index,1)
  }
}
Subject.prototype.notify = function() {
  this.observers.forEach(function(observer) {
    observer.update()
  })
}

//Observer是构造函数，new Observer()创建一个观察者对象，该对象有一个update方法
function Observer(name) {
  this.name = name
}
Observer.prototype.update = function() {
  console.log(`${this.name} update...`)
}


//创建主题
var subject = new Subject()

//创建观察者
var observerOne = new Observer('joinmouse')
var observerTwo = new Observer('joinkey')

//主题添加观察者
subject.addObserver(observerOne)
subject.addObserver(observerTwo)

//主题通知所有的观察者更新
subject.notify()
