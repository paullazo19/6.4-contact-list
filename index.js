import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './modules/App'
import detailView from './modules/DetailView'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/:lastName/:firstName/:email/:phoneNumber/:city/:state/:photo" component={detailView}/>
  </Router>
), document.getElementById('app'))
