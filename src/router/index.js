import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import components from 'components/base'
import Login from 'components/BaseLogin'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const { location } = history

const routers = (
  <HashRouter>
    <div>
      <Route path = "/" component={components} />
      <Route path = "/login" component={Login} />
      {location.hash === '#/' ? <Redirect to="/login" /> : ''}
    </div>
  </HashRouter>
)

export default routers
