import {useState, useEffect} from 'react'
import api from '../axios/api'
import {Grid, Box} from '@material-ui/core'

const BoxStyle = {
  position: 'relative',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
}

const IframeStyle = {
  position: 'absolute',
  top: 0,
  let: 0,
  width: '100%',
  height: '100%',
  border: 'none',
}

const Video = ({id}) => {
  const [videos, setVideos] = useState([])

  const getVideos = () => {
    api
      .getVideos(id)
      .then(res => {
        console.log(res.data)
        const {results} = res.data
        setVideos(results)
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <Grid container spacing={1}>
      {videos.map(video => (
        <Grid key={video.id} item xs={12} sm={6} lg={4}>
          <Box sx={BoxStyle}>
            <iframe
              style={IframeStyle}
              src={`https://www.youtube.com/embed/${video.key}?autoplay=1`}
            ></iframe>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default Video
