import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React, {memo} from 'react'

const DetailCard = ({title, detail}) => {
  return (
    <Card sx={{minWidth: 275}}>
      <CardContent>
        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
          Title
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{mt: 1.5}} color="text.secondary">
          Description
        </Typography>
        <Typography variant="body2">{detail}</Typography>
      </CardContent>
    </Card>
  )
}

export default memo(DetailCard)
