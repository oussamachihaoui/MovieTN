import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Redux/store.js'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import MovieDetail from './Components/MovieDetail.jsx'
import Navbar from './Components/Navbar.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path='/'  element={<App />}/>
      <Route path='/movie-detail/:id' element={<MovieDetail/>}/>
    </Routes>

    </BrowserRouter>

  </Provider>
  
)
