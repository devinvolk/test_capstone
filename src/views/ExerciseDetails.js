import { Box } from '@mui/material'
import React, { useState, useEffect} from 'react'
import { YoutubeVideos } from '../components/YoutubeVideos'
import { ExercisePage } from '../components/ExercisePage'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youtubeOptions } from '../utility/fetchData'

export const ExerciseDetails = () => {
  const [detail, setDetail] = useState({})
  const [youtubeVideos, setYoutubeVideos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const fetchSingleExerciseData = async () => {
      const exerciseDetailData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions)
      setDetail(exerciseDetailData)
      console.log(exerciseDetailData)

      const youtubeData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setYoutubeVideos(youtubeData.contents)
    }
    fetchSingleExerciseData()
  }, [id])
  


  return (
    <Box>
      <ExercisePage detail={detail} />
      <YoutubeVideos youtubeVideos={youtubeVideos} name={detail.name} />
    </Box>
  )
}