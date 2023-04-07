import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export const YoutubeVideos = ({ youtubeVideos, name }) => {
  if(!youtubeVideos.length) return 'Loading...'
  return (
    <Box padding={'20px'} sx={{ marginTop: { lg: '200px', xs: '20px' }}}>
      <Typography variant='h3' marginBottom={3}>
        Related Videos:
      </Typography>
      <Stack alignItems={'center'} justifyContent={'flex-start'} flexWrap={'wrap'} sx={{ flexDirection: { lg: 'row'}, gap: { lg: '110px', xs: '0'}}}>
        {youtubeVideos?.slice(0, 3).map((item, index) => (
          <a key={index} className='youtubeVideo' href={`https://www.youtube.com/watch?v=${item.video.videoId}`} target='_blank' rel='noreferrer'>
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}
