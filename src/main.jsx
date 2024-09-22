import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import reducer from './reducers/index.jsx'

const middelware = [thunk];
const store = createStore(reducer, applyMiddleware(...middelware));
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
