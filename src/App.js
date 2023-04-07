import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import { Home } from './views/Home';
import { ExerciseDetails } from './views/ExerciseDetails';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Login } from './views/Login';

function App() {
  return (
    <BrowserRouter>
    <Box width='400px' sx={{ width: {xl: '1488px'}}} m='auto'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </Box>
    </BrowserRouter>
  );
}

export default App;