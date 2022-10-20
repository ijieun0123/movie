import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  ThemeProvider,
  createTheme,
  Box,
} from '@material-ui/core'

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

const firstContentStyle = {
  minHeight: 115,
}

const lastContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
}

const MovieCard = ({ movie }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        {/* 이미지 */}
        <CardMedia
          component="img"
          height="160"
          image={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}
          alt="movie post"
        />

        {/* 타이틀 & 디테일 */}
        <CardContent>
          <Box sx={firstContentStyle}>
            <Typography gutterBottom variant="h5" color="primary" noWrap={true}>
              {movie.original_title}
            </Typography>
            <Typography variant="body1">{movie.overview}</Typography>
          </Box>
        </CardContent>

        {/* 개봉일 & 평점 */}
        <CardContent>
          <Box sx={lastContentStyle}>
            <Typography variant="body2">{movie.release_date}</Typography>
            <Typography variant="body2">{movie.vote_average}</Typography>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  )
}

export default MovieCard
