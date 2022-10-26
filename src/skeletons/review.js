import Skeleton from '@mui/material/Skeleton'
import {Card, CardHeader, CardContent, Box, Typography} from '@material-ui/core'

const ReviewSkeleton = () => {
  return (
    <Card>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={210}
            height={20}
          />
        }
        subheader={
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={210}
            height={30}
          />
        }
      />

      <CardContent>
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={'100%'}
          height={110}
        />
      </CardContent>

      <Box sx={{ml: 2, mb: 2}}>
        <Skeleton
          animation="wave"
          variant="rounded"
          width={'50%'}
          height={20}
        />
      </Box>
    </Card>
  )
}

export default ReviewSkeleton
