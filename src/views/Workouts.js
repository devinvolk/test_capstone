import React, { useState, useEffect } from 'react'
import { Box, Typography, CardActions, CardContent, Button } from '@mui/material'
import { auth, db } from '../firebase'
import { collection, query, getDocs, deleteDoc, doc } from 'firebase/firestore'

export const Workouts = () => {
    const [workouts, setWorkouts] = useState([]);

    const handleDelete = async (workoutID) => {
        try {
            await deleteDoc(doc(db, 'users', auth.currentUser.uid, 'workouts', workoutID))
            setWorkouts((oldWorkouts) => 
                oldWorkouts.filter((workout) => workout.id !== workoutID)
            )
        } catch (error) {
            console.log('Failed to delete workout:', error)
        }
    }

    useEffect(() => {
      const fetchWorkouts = async () => {
        const querySnapshot = await getDocs(query(collection(db, 'users', auth.currentUser.uid, 'workouts')));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWorkouts(data);
      };
  
      fetchWorkouts();
    }, []);
  
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignItems: 'center' }} > 
        {workouts.length === 0 ? (
          <Typography variant='h6'>You haven't saved any workouts yet</Typography>
        ) : (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            {workouts.map((workout) => (
              <Box key={workout.id} sx={{ marginTop: 2, width: '500px', bgcolor: 'whitesmoke', border: '1px solid primary.main', borderRadius: '15px' }} >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" component="div">
                    {workout.Title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '20px', mt: '5px'}}>
                    <ul style={{ listStyle: 'none', margin: 0, paddingInlineStart: '20px' }}>
                      {workout.Exercises.map((exercise, index) => (
                        <li key={index}>{exercise}</li>
                      ))}
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center'}}>
                  <Button size="small" color='error' onClick={() => handleDelete(workout.id)}>Delete Workout</Button>
                </CardActions>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    )
  };
