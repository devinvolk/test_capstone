import React, { useState, useEffect} from 'react'
import { Box, Button, Typography, Stack} from '@mui/material'
import { auth, db } from '../firebase'
import { onSnapshot, collection, deleteDoc, doc } from 'firebase/firestore'

export const FavoritesPageDisplayed = () => {
    const [favoriteExercises, setFavoriteExercises] = useState([])
    console.log(favoriteExercises)

    const handleRemoveClick = async (exerciseID) => {
        try {
          await deleteDoc(doc(db, 'users', auth.currentUser.uid, 'favorites', exerciseID))
          setFavoriteExercises((oldFavorites) => 
            oldFavorites.filter((exercise) => exercise.Exercise.id !== exerciseID)
          )
        } catch (error) {
          console.log('Failed to delete exercise from favorites:', error)
        }
    }

    useEffect(() => {
        const unmount = onSnapshot(collection(db, 'users', auth.currentUser.uid, 'favorites'), (querySnapshot) => {
          const favoriteArr = []
          querySnapshot.forEach((doc) => {
            favoriteArr.push(doc.data())
          })
          setFavoriteExercises(favoriteArr)
        })
    
        return () => {
          unmount()
        }
      }, [])

  return (
    <Box id="exercises" sx={{ marginTop: { lg: '110px' }}} marginTop='50px' padding='20px'>
      <Typography variant='h3' marginBottom={2} textAlign={'center'}>
        Your Favorites:
      </Typography>
      <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} sx={{ gap: { lg: '110px', xs: '50px' }}} >
        {favoriteExercises.map((exercise, index) => (
          <Box className='exercise-card' key={index}>
          <Typography textAlign={'center'} color={'black'} fontWeight={'bold'} fontSize={'22px'} marginTop={'10px'} marginBottom={'10px'} textTransform={'capitalize'}>
              {exercise.Exercise.name}
          </Typography>
          <img src={exercise.Exercise.gifUrl} alt={exercise.Exercise.name} loading="lazy" />
          {/* <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
              <Button sx={{ marginTop: '10px', marginBottom: '5px', color: 'whitesmoke', backgroundColor: '#1463F3', fontSize: '15px', borderRadius: '20px', textTransform: 'capitalize'}}>
                  {exercise.Exercise.bodyPart}
              </Button>
              <Button sx={{ marginTop: '10px', marginBottom: '5px', color: 'whitesmoke', backgroundColor: '#0C243C', fontSize: '15px', borderRadius: '20px', textTransform: 'capitalize'}}>
                  {exercise.Exercise.target}
              </Button>
              <Button sx={{ marginTop: '10px', marginBottom: '5px', color: 'whitesmoke', backgroundColor: '#55C2C3', fontSize: '15px', borderRadius: '20px', textTransform: 'capitalize'}}>
                  {exercise.Exercise.equipment}
              </Button>
          </Stack> */}
          <Box sx={{ display: 'flex', justifyContent: 'center'}} >
            <Button variant="contained" color="error" sx={{ width: '80%', textAlign: 'center' }} onClick={() => handleRemoveClick(exercise.Exercise.id)}>
                Remove
            </Button>
          </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
