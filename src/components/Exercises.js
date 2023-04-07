import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, Pagination } from '@mui/material'
import { ExerciseCard } from './ExerciseCard'
import { exerciseOptions, fetchData } from '../utility/fetchData'


export const Exercises = ({ exercises, setExercises, muscleGroup }) => {
  const [currentPage, setCurrentPage ] = useState(1)

  const paginate = (event, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800, behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exerciseData = []
      if (muscleGroup === 'all') {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscleGroup}`, exerciseOptions)
      }
      setExercises(exerciseData)
    }
    fetchExerciseData()
  }, [muscleGroup])

  const indexOfLastExercise = currentPage * 9
  const indexOfFirstExercise = indexOfLastExercise - 9
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  console.log(exercises)
  console.log(currentExercises)

  return (
    <Box id="exercises" sx={{ marginTop: { lg: '110px' }}} marginTop='50px' padding='20px'>
      <Typography variant='h3' marginBottom={2}>
        Results:
      </Typography>
      <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} sx={{ gap: { lg: '110px', xs: '50px' }}} >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack marginTop={'100px'} alignItems={'center'}>
          {exercises.length > 9 ? <Pagination 
          color='standard' 
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length/9)}
          page={currentPage}
          onChange={paginate}
          size='large'
          showFirstButton
          showLastButton
          />
          : ''}
      </Stack>
    </Box>
  )
}