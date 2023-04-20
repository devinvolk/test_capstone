import { Alert, AlertTitle, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { auth, db } from '../firebase'
import { setDoc, doc } from 'firebase/firestore'

export const ExercisePage = ({detail}) => {
  const [alertMessage, setAlertMessage] = useState(false)

  const handleFavorite = async (event) => {
    event.preventDefault()
    try {
      await setDoc(doc(db, 'users', auth.currentUser.uid, 'favorites', detail.id),{
        Exercise: detail
        }
      )
      setAlertMessage(true)
    } catch (error) {
      console.log('Error adding workout to favorites:', error)
    }
  }

  return (
    <Stack sx={{ flexDirection: { lg: 'row'}, padding: '20px', alignItems: 'center'}} gap={'60px'}>
      {alertMessage && (
      <Alert severity='success'>
        <AlertTitle>Exercise added to Favorites!</AlertTitle>
      </Alert>
    )}
        <img src={detail.gifUrl} alt={detail.name} loading='lazy' className='exercisePageImage' />
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
            <Typography variant='h3' textAlign={'center'}>
                {detail.name}
            </Typography>
            <Typography variant='h6' textAlign={'center'}>
                The {detail.name}{' '} is a great exercise that targets your {detail.target}. 
                {detail.equipment === 'body weight' ? ' This exercise utilizes your own body weight. ' : ` This exercise requires a ${detail.equipment} to be performed. `} 
                Exercising regularly helps to improve mental clearity, metabolism, and quality of life!
            </Typography>
            <Button onClick={handleFavorite} variant='contained' sx={{backgroundColor: '#1463F3', width: '80px', textTransform: 'capitalize', justifySelf: 'center', alignSelf: 'center'}}>Favorite</Button>
        </Stack>
    </Stack>
  )
}
