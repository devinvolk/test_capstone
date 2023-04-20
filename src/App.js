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
import { UpdateProfile } from './views/UpdateProfile';
import { Workouts } from './views/Workouts';
import { Favorites } from './views/Favorites';

function App() {
  return (
    <BrowserRouter>
    <Box width='400px' sx={{ width: {xl: '1488px'}}} m='auto'>
      <Nav />
      <div className='content'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/searchexercises' element={<ExerciseSearch />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/updateprofile' element={<UpdateProfile />} />
        <Route path='/workoutcreator' element={<WorkoutCreator />} />
        <Route path='/workouts' element={<Workouts />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      </div>
      <Footer />
    </Box>
    </BrowserRouter>
  );
}

export default App;