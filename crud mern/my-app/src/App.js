import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import NavBar from './Component/NavBar';
import EditUser from './Component/EditUser';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/all' element={<AllUsers />} />
      <Route path='/add' element={<AddUser />} />
      <Route path='/edit/:id' element={<EditUser />}  />
      <Route path='/' element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
