import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counter from './reducers'
import Counter from './components/Counter'
const store = createStore(
    counter
)

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Counter
        // 显示的值
        value = {store.getState()}
        // store.dispatch({type: 'INCREMENT'}) 是action要做的事 代替了action文件  其实就是一个action函数
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    rootEl
)

// 将上面的render执行一下
render()
// 发布/订阅者模式的监听
// 通过这种方式  让store 和 render进行绑定
store.subscribe(render)