import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
//浏览器开发工具
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import reducers from './reducers/index';

import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter,routerMiddleware} from 'react-router-redux';
import {  Router } from 'react-router-dom';
import Loadable from 'react-loadable';

const history = createHistory()
const middleware=[thunk,routerMiddleware(history)];
const store=createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)
if(module.hot) {//判断是否启用热加载
    module.hot.accept('./reducers/index.js', () => {//侦听reducers文件
        import('./reducers/index.js').then(({default:nextRootReducer})=>{
            store.replaceReducer(nextRootReducer);
        });
    });
    module.hot.accept('./Containers/App.jsx', () => {//侦听App.jsx文件
        render(store)
    });
}

const render = ()=>{
    const App = require("./Containers/App.jsx").default;
    ReactDOM.hydrate(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </Provider>,
    document.getElementById('root'))
}

window.main = () => {//暴露main方法给window
  Loadable.preloadReady().then(() => {
    render()
  });
};