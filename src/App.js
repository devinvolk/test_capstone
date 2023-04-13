import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import { Home } from './views/Home';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { ExerciseSearch } from './views/ExerciseSearch';
import { ExerciseDetails } from './views/ExerciseDetails';
import { SignUp } from './views/SignUp';
import { Login } from './views/Login';
import { WorkoutCreator } from './views/WorkoutCreator';

function App() {
  return (
    <BrowserRouter>
    <Box width='400px' sx={{ width: {xl: '1488px'}}} m='auto'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/searchexercises' element={<ExerciseSearch />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/workoutcreator' element={<WorkoutCreator />} />
      </Routes>
      <Footer />
    </Box>
    </BrowserRouter>
  );
}

export default App;