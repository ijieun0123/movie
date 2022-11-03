import {useState, useEffect} from 'react'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'

interface StarProp {
  rating: number,
  size: "small" | "medium" | "large" | undefined
}

const Star = ({rating, size}: StarProp) => {
  const [value, setValue] = useState(0)

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
