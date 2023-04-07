import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, TextField, Button } from '@mui/material';
import { exerciseOptions, fetchData } from '../utility/fetchData';
import { DropDownMuscleGroup } from './DropDownMuscleGroup';


export const ExerciseSearch = ( {muscleGroup, setMuscleGroup, setExercises}) => {
    const [search, setSearch] = useState('')
    const [exerciseTarget, setExerciseTarget] = useState([])

    useEffect(() => {
      const fetchExerciseTargetData = async () => {
        const exerciseTargetData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
        setExerciseTarget(['all', ...exerciseTargetData])
      }
      fetchExerciseTargetData()
    }, [])
    

    const searchMainAPI = async () => {
        if (search) {
            const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            console.log(exerciseData)
            const queriedExercise = exerciseData.filter((exercise) => exercise.name.toLowerCase().includes(search))
            setSearch('')
            setExercises(queriedExercise)
        }
    }

  return (
    <Stack alignItems={'center'} justifyContent={'center'} marginTop={2} padding={1}>
        <Typography fontWeight={'700'} marginBottom={3} textAlign={'center'} sx={{fontSize: {lg: '45px', xs: '40px'}}}>
            Search For An Exercise
        </Typography>
        <Box position={'relative'} marginBottom={3}>
            <TextField
                type='text'
                size='normal'
                variant='filled'
                placeholder='Search Exercises'
                sx={{
                    input: {
                        fontWeight: '700',
                    },
                    width: {lg: '800px', xs: '350px'},
                    backgroundColor: 'whitesmoke',
                    borderRadius: '5px'
                }}
                onChange={(event) => setSearch(event.target.value.toLowerCase())}
                value={search}
            />
            <Button className='search-btn' 
                sx={{
                    backgroundColor: '#1463F3',
                    color: 'white',
                    width: {lg: '170px', xs: '80px'},
                    fontSize: {lg: '20px', xs: '15px'},
                    height: '55px',
                    position: 'absolute',
                    right: '0'
                }}
                onClick={searchMainAPI}
            >
                Search
            </Button>
        </Box>
        <Box sx={{ width: '100%', position: 'relative' }}>
            <DropDownMuscleGroup exerciseTarget={exerciseTarget} muscleGroup={muscleGroup} setMuscleGroup={setMuscleGroup} />
        </Box>
    </Stack>
  )
}