import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from './Provider.tsx'
import './index.css'
import { Home } from './pages/home/Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider>
    <React.StrictMode>
      <Home />
    </React.StrictMode>,
  </Provider>
 
)
