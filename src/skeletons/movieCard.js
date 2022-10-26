import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'
import {Card, CardContent, CardMedia, Typography, Box} from '@material-ui/core'

const MovieCardSkeleton = () => {
  return (
    <Card>
      {/* 이미지 */}
      <CardMedia>
        <Skeleton variant="rectangular" width="100%" animation="wave">
          <div style={{paddingTop: '50%'}} />
        </Skeleton>
      </CardMedia>

      {/* 타이틀 & 디테일 */}
      <CardContent>
        <Box sx={{minHeight: 115}}>
          <Skeleton width="100%" height={50} animation="wave">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="100%" animation="wave">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="100%" animation="wave">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="100%" animation="wave">
            <Typography>.</Typography>
          </Skeleton>
        </Box>
      </CardContent>

      {/* 개봉일 & 평점 */}
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Skeleton width="40%" animation="wave">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="20%" animation="wave">
            <Typography>.</Typography>
          </Skeleton>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default MovieCardSkeleton
