import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Route, BrowserRouter , Routes } from "react-router-dom";
import { Secao } from './components/Secao.tsx'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routes>
        <Route Component={App} path='/'/>
        <Route Component={Secao} path='/secao'/>
      </Routes>
     
    
    
    </BrowserRouter>
  </React.StrictMode>,
)
