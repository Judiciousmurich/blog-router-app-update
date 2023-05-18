import {BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './pages/Home'
import Navigation from './pages/Navigation'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/footer'
import About from './pages/About'
import Downloads from './pages/Downloads'
import Popular from './pages/Popular'



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
        <Route path='/navigation' element={<Navigation/>}></Route>
        <Route path="/about" element={<About />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path='*'element={<NotFound/>}></Route>

    </Routes>
    <Footer/>
  
    
    </BrowserRouter>
    
          </>
  )
}

export default App
