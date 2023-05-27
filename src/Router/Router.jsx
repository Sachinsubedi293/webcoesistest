import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Homepage from '../Components/Homepage';


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/home' element={<Homepage/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router;