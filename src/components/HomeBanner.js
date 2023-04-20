import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import HeroBannerImg from '../images/HeroBannerImg.jpeg'

export const HomeBanner = () => {
    
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/signup')
  };

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
        <Button variant='contained' sx={{backgroundColor: '#1463F3'}} onClick={handleClick}>Join!</Button>
        <img src={HeroBannerImg} alt='Smiling exercise group' className='hero-img' />
    </Box>
  )
}