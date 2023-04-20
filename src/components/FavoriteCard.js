import { Box, Button, Stack, Typography } from "@mui/material"
import React from "react"

export const FavoriteCard = ({ exercise }) => {
  return (
    <Box className='exercise-card'>
        <Typography textAlign={'center'} color={'black'} fontWeight={'bold'} fontSize={'22px'} marginTop={'10px'} marginBottom={'10px'} textTransform={'capitalize'}>
            {exercise.name}
        </Typography>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction={'row'} alignItems={'center'} justifyContent={'center'}>
            <Button sx={{ marginTop: '10px', marginBottom: '5px', color: 'whitesmoke', backgroundColor: '#1463F3', fontSize: '15px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ marginTop: '10px', marginBottom: '5px', color: 'whitesmoke', backgroundColor: '#0C243C', fontSize: '15px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {exercise.target}
            </Button>
            <Button sx={{ marginTop: '10px', marginBottom: '5px', color: 'whitesmoke', backgroundColor: '#55C2C3', fontSize: '15px', borderRadius: '20px', textTransform: 'capitalize'}}>
                {exercise.equipment}
            </Button>
        </Stack>
    </Box>
  );
};
