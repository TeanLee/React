import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-dom'
// actions 可能是异步
// action -> reducer(oldState, data) -> 返回一个新的状态
// thunk 负责异步请求
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const middleware = [thunk]
middleware.push(createLogger())

const store = createStore(
    reducer,
    // 需要异步请求数据时   交给中间件
    applyMiddleware(...middleware)
)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
