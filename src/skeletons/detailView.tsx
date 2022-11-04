import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Skeleton from '@mui/material/Skeleton'

const DetailViewSkeleton = () => {
  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} md={6} lg={5}>
        <Skeleton variant="rectangular" width="100%" animation="wave" />
      </Grid>

      <Grid item xs={12} md={6} lg={7}>
        <Stack spacing={2}>
          <Skeleton width="100%" animation="wave">
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
          <Skeleton width="100%" animation="wave">
            <Typography>.</Typography>
          </Skeleton>
          <Skeleton width="100%" animation="wave">
            <Typography>.</Typography>
          </Skeleton>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default DetailViewSkeleton
