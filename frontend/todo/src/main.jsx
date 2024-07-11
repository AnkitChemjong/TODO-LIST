import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ContextApp} from './compo/context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextApp>
    <App />
  </ContextApp>
)
