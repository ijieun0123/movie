import {useState, useEffect} from 'react'
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

const Star = ({rating, size}) => {
  const [value, setValue] = useState(0)
  // size : small || medium || large

  // readonly 라서 useEffect 사용할 수 없다는 것 같음
  // 나중에 skeletons 사용하든가 해야할듯
  useEffect(() => {
    setValue(rating)
  }, [rating])

  return (
    <Stack direction="row" spacing={1}>
      <Rating size={size} max={10} value={value} readOnly />
    </Stack>
  )
}

export default Star
