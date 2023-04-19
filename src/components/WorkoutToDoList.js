import React, { useState } from 'react'
import { Box, TextField, Button, Avatar, Typography, Fab } from '@mui/material'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import GitHubIcon from '@mui/icons-material/GitHub'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { auth, db } from '../firebase'
import { setDoc, doc } from 'firebase/firestore'
import { Alert, AlertTitle} from '@mui/material'

export const WorkoutToDoList = () => {
    const [workouts, setWorkouts] = useState([])
    const [newWorkout, setNewWorkout] = useState('')
    const [title, setTitle] = useState('')
    const [alertMessage, setAlertMessage] = useState(false)

    const addWorkout = () => {
        if (newWorkout !== '') {
            setWorkouts([...workouts, newWorkout])
            setNewWorkout('')
        }
    }

    const removeWorkout = (index) => {
        const updateWorkouts = [...workouts]
        updateWorkouts.splice(index, 1)
        setWorkouts(updateWorkouts)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await setDoc(doc(db, 'users', auth.currentUser.uid, 'workouts', title),{
            Title: title,
            Exercises: workouts
            }
          )
          setAlertMessage(true)
        } catch (error) {
          console.error('Error updating profile', error)
        }
    }

    function Copyright(props) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
            <Link color='inherit' href="https://github.com/devinvolk" target='_blank' rel='noreferrer' id='footer-link'>
              See the code here!
            {' '}
            <GitHubIcon fontSize='small' id='github' />
            </Link>
          </Typography>
        );
      }

    const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      {alertMessage && (
          <Alert severity='success'>
            <AlertTitle>Workout Created!</AlertTitle>
          </Alert>
        )}
       <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
        }}
        > 
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: '500px',
            bgcolor: 'whitesmoke',
            border: '1px solid primary.main',
            borderRadius: '15px'
          }}
        >
          <Avatar sx={{ mt: 3, mb: 1, bgcolor: "primary.main" }}>
            <FitnessCenterIcon />
          </Avatar>
          <TextField
              type="text"
              size="normal"
              variant="standard"
              placeholder="Title"
              onChange={(event) => setTitle(event.target.value)}
            />
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Box 
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'baseline'
              }}
            >
            <TextField
              type="text"
              size="normal"
              variant="standard"
              placeholder="Split squat x5"
              onChange={(event) => setNewWorkout(event.target.value)}
            />
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Fab color="primary" size='small' aria-label="add" onClick={addWorkout}>
                <AddIcon />
              </Fab>
            </Box>
            </Box>
            <ul>
              {workouts.map((workouts, index) => (
                <li key={index} style={{ listStyle: 'none'}}>
                  {workouts}
                  <Button onClick={() => removeWorkout(index)} color='error'>
                    <DeleteIcon />
                  </Button>
                </li>
              ))}
            </ul>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}
