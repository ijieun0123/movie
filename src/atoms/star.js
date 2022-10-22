import {useState, useEffect} from 'react'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

const Star = ({rating, size}) => {
  const [value, setValue] = useState(rating)
  // size : small || medium || large

  return (
    <Stack direction="row" spacing={1}>
      <Rating size={size} max={10} value={value} readOnly />
    </Stack>
  )
}

export default Star
