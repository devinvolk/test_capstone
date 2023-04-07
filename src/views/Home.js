import React, { useState } from 'react';
import { Box } from '@mui/material';
import { HomeBanner } from '../components/HomeBanner';
import { ExerciseSearch } from '../components/ExerciseSearch';
import { Exercises } from '../components/Exercises';

export const Home = () => {
  const [muscleGroup, setMuscleGroup] = useState('all')
  const [exercises, setExercises] = useState([])

  return (
    <Box>
      <HomeBanner />
      <ExerciseSearch muscleGroup={muscleGroup} setMuscleGroup={setMuscleGroup} setExercises={setExercises} />
      <Exercises muscleGroup={muscleGroup} exercises={exercises} setExercises={setExercises} />
    </Box>
  )
}