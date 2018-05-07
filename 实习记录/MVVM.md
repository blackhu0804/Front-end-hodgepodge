# MVVM

## MVVM & 单项数据流

- MVVM 是指双向数据流，即 View-Model 之间的双向通信，由 ViewModel 做桥接。
- 单项数据流去除了 View -> Model 这一步。需要手动绑定。
---- 
> MVVM 的实现原理就是通过 `数据劫持+发布订阅模式`

