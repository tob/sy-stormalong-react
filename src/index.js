import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'
import ArtPage from './components/ArtPage'

import App from './App'
import AllArticles from './components/AllArticles'

import './index.sass'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={AllArticles} />
        <Route path="/articles/:articleId" component={ArtPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
