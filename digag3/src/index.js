import React from 'react';
// redux container概念  父组件 redux 通信
// prop, actions => 子组件
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import 'element-theme-default';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
