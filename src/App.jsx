import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import MainLayout from './layouts/Mainlayout'
import Home from './pages/Home';
import About from './pages/About';
import Recipes from './pages/Recipes';
import Store from './pages/Store';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/recipes" element={<Recipes/>}></Route>
        <Route path="/store" element={<Store/>}></Route>
      </Route>
     </Routes>
     
     </BrowserRouter> 

     {/* <img src="../images/logo.jpg" alt="logo" className="w-12 h-12" /> */}
    </>
  )
}

export default App
