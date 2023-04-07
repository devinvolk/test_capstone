import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

export const ExercisePage = ({detail}) => {
  return (
    <Stack sx={{ flexDirection: { lg: 'row'}, padding: '20px', alignItems: 'center'}} gap={'60px'}>
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
            <Button variant='contained' sx={{backgroundColor: '#1463F3', width: '80px', textTransform: 'capitalize', justifySelf: 'center', alignSelf: 'center'}}>Favorite</Button>
        </Stack>
    </Stack>
  )
}
