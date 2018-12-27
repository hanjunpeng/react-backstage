import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import routes from './router'
import './assets/css/common.less';
import 'antd/dist/antd.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createHistory()
ReactDOM.render(
  <Provider>
    <ConnectedRouter history={history}>
      <div>
        { routes }
      </div>
    </ConnectedRouter>
  </Provider>,  
  document.getElementById('root'));
serviceWorker.unregister();
