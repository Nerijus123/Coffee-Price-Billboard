import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/Main'
import './styles/main.scss'
import {BrowserRouter} from 'react-router-dom'



ReactDOM.render(<BrowserRouter basename="/CoffeeWall"><Main/></BrowserRouter>,document.getElementById('root'));   

//webpack hot module 
if (module.hot) {
  module.hot.accept();
}
