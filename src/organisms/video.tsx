import {useAppSelector, useAppDispatch} from '../app/store'
import {useParams} from 'react-router-dom'
import {VIDEO} from '../features/detailSlice'
import api from '../axios/api'
import {Grid, Box} from '@material-ui/core'
import Skeleton from '@mui/material/Skeleton'
import useSkeleton from '../core/useSkeleton'
import AlertPaper from '../atoms/alertPaper'
import styled from 'styled-components';

const BoxStyle = {
  position: 'relative',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
}

const contentStyle = {
  position: 'absolute',
  top: 0,
  let: 0,
  width: '100%',
  height: '100%',
  border: 'none',
}

const CustomIframe = styled.iframe`
  position: absolute;
  top: 0;
  let: 0;
  width: 100%;
  height: 100%;
  border: none;
`

const Video = () => {
  const videos = useAppSelector(state => state.detail.videos.results)

  const {id} = useParams()
  const dispatch = useAppDispatch()

  const getVideos = () => {
    api
      .getVideos(id)
      .then(res => {
        console.log(res.data)
        const {results} = res.data
        dispatch(VIDEO({results: results}))
      })
      .catch(e => {
        console.log(e)
      })
  }

  const {loading} = useSkeleton(getVideos)

  return (
    <>
      {videos.length ? (
        <Grid container spacing={1}>
          {videos.map(video => (
            <Grid key={video.id} item xs={12} sm={6} lg={4}>
              <Box sx={BoxStyle}>
                {loading ? (
                  <Skeleton
                    sx={contentStyle}
                    animation="wave"
                    variant="rectangular"
                  />
                ) : (
                  <CustomIframe
                    src={`https://www.youtube.com/embed/${video.key}?autoplay=1`}
                  ></CustomIframe>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <AlertPaper />
      )}
    </>
  )
}

export default Video
