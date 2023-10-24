import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'

const Button = ({text}) => <button>{text}</button> //Componente creado

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <App/>
)
