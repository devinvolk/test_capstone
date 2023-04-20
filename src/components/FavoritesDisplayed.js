import React, { useState, useEffect} from 'react'
import { FavoriteCard } from './FavoriteCard'
import { Box, Typography, Stack} from '@mui/material'
import { auth, db } from '../firebase'
import { onSnapshot, collection} from 'firebase/firestore'

export const FavoritesDisplayed = () => {
    const [favoriteExercises, setFavoriteExercises] = useState([])
    console.log(favoriteExercises)

    useEffect(() => {
        const getFavoriteExercises = async () => {
            const favoriteArr = []
            if(favoriteExercises.length === 0){
                const subColRef = collection(db, 'users', auth.currentUser.uid, 'favorites')
                onSnapshot(subColRef, (querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                    favoriteArr.push(doc.data())
                  })
                  setFavoriteExercises(favoriteExercises.concat(favoriteArr))
                })
            }
        }
        getFavoriteExercises()
    }, [])

  return (
    <Box id="exercises" sx={{ marginTop: { lg: '110px' }}} marginTop='50px' padding='20px'>
      <Typography variant='h3' marginBottom={2}>
        Favorites:
      </Typography>
      <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} sx={{ gap: { lg: '110px', xs: '50px' }}} >
        {favoriteExercises.map((exercise, index) => (
          <FavoriteCard key={index} exercise={exercise.Exercise} />
        ))}
      </Stack>
    </Box>
  )
}
