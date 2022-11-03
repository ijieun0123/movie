import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

const RecommendItemSkeleton = () => {
  return (
    <>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={'100%'}
        height={'20vh'}
      />
      <Stack sx={{width: '100%', marginTop: 1}}>
        <Skeleton width="100%" animation="wave">
          <Typography>.</Typography>
        </Skeleton>
        <Skeleton width="70%" animation="wave">
          <Typography>.</Typography>
        </Skeleton>
      </Stack>
    </>
  )
}

export default RecommendItemSkeleton
