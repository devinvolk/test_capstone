import React, { useState } from 'react'
import { FormControl, InputLabel, Select, MenuItem, Stack, Typography } from '@mui/material'
import { Box, Button } from '@mui/material'
// import { fetchData, exerciseOptions } from '../utility/fetchData'

export const DropDownMuscleGroup = ({ exerciseTarget, muscleGroup, setMuscleGroup }) => {
  
  const [selection, setSelection] = useState('')

  const handleChange = (event) => {
    setSelection(event.target.value)
  }

  const searchMuscleGroup = async () => {
    if (selection) {
        setMuscleGroup(selection)
        console.log(muscleGroup)
        setSelection('')
        window.scrollTo({ top: 800, behavior: 'smooth'})
    }
}

  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <Typography marginBottom={1}>
        OR
      </Typography>
      <Box position={"relative"}>
        <FormControl variant='filled' sx={{ width: { lg: "800px", xs: "350px" } }}>
          <InputLabel id="demo-simple-select-label">Muscle Group Selector</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Muscle Group"
            onChange={handleChange}
            value={selection}
          >
            {exerciseTarget.map((exercise) =>
              <MenuItem value={exercise} key={exercise} sx={{ textTransform: 'capitalize'}}>{exercise}</MenuItem>
            )}
          </Select>
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
                onClick={searchMuscleGroup}
            >
                Search
            </Button>
        </FormControl>
      </Box>
    </Stack>
  );
}
