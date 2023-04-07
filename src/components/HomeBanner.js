import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import { lineHeight } from '@mui/system';

export const HomeBanner = () => {
  return (
    <Box sx={{
        marginTop: {lg: '210px', xs: '70px'},
        marginLeft: {sm: '50px'}
    }} position={'relative'} padding={'20px'}>
        <Typography color={'#1463F3'} fontWeight={'600'} fontSize={'25px'}>
            Welcome to Social Fit!
        </Typography>
        <Typography fontWeight={'700'} sx={{ fontSize: {lg: '45px', xs: '40px'}}} marginTop={2} marginBottom={2}>
            Eat, Train, Sleep, <br></br> Repeat
        </Typography>
        <Typography fontSize={'20px'} lineHeight={'35px'} marginBottom={3}>
            Join our exercise collective today!
        </Typography>
        <Button variant='contained' sx={{backgroundColor: '#1463F3'}}>Join!</Button>
    </Box>
  )
}