# MVVM
mvvm(双向绑定)

### step-1
- 利用Object.defineProperty这个方法来实现对数据的劫持

- 关于Object.defineProperty这个方法请参考:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty


### step-2
- 观察者模式

  一个典型的观察者模式应用场景是用户在一个网站订阅主题
  
  １、多个用户(观察者：Observer)都可以订阅某一个主题(Subject)

  ２、当主体的内容更新的时候订阅该主题的用户都可以收到通知
  