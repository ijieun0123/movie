import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  ThemeProvider,
  createTheme,
  Box,
} from '@material-ui/core'
import Stack from '@mui/material/Stack'
import StarIcon from '@mui/icons-material/Star'
import {yellow} from '@mui/material/colors'
import React, {memo} from 'react'

const theme = createTheme()

theme.typography.body1 = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  '-webkit-line-clamp': 3,
  '-webkit-box-orient': 'vertical',
}

theme.typography.body2 = {
  color: '#888',
}

const MovieCard = ({movie}) => {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        {/* 이미지 */}
        <CardMedia
          component="img"
          height="160"
          image={
            movie.backdrop_path
              ? process.env.REACT_APP_IMG_URL + movie.backdrop_path
              : process.env.PUBLIC_URL + '/img/no_photo.png'
          }
          alt="movie post"
        />

        {/* 타이틀 & 디테일 */}
        <CardContent>
          <Box sx={{minHeight: 115}}>
            <Typography gutterBottom variant="h5" color="primary" noWrap={true}>
              {movie.original_title}
            </Typography>
            <Typography variant="body1">{movie.overview}</Typography>
          </Box>
        </CardContent>

        {/* 개봉일 & 평점 */}
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body2">{movie.release_date}</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <StarIcon sx={{color: yellow[700]}} />
              <Typography variant="body2">{movie.vote_average}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default memo(MovieCard)
