import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './app/store'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
