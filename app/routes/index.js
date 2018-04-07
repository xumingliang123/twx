import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import configureStore from 'store/configureStore'

import App from 'containers/App'
import Intro from 'containers/Intro'
import Questions from 'containers/Questions'
import Question from 'containers/Question'
import Hometextiles from 'containers/Hometextiles'
import Clothing from 'containers/Clothing'
import Trend from 'containers/Trend'
import Home from 'containers/Home'

export default function(history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="questions" component={Questions} />
        <Route path="questions/:id" component={Question} />
        <Route path="home-textiles" component={Hometextiles} />
        <Route path="clothing" component={Clothing} />
        <Route path="trend" component={Trend} />
      </Route>
    </Router>
  )
}
