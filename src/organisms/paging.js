import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PAGE } from '../features/moviesSlice'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Paging = () => {
  const value = useSelector((state) => state.movies.value)

  const [page, setPage] = useState(1)

  const dispatch = useDispatch()

  const onChangePage = (e, newValue) => {
    setPage(newValue)
  }

  useEffect(() => {
    setPage(1)
  }, [value])

  useEffect(() => {
    dispatch(PAGE(page))
  }, [page])

  return (
    <Stack m={10} spacing={2} justifyContent="center" alignItems="center">
      <Pagination
        count={10}
        color="primary"
        page={page}
        onChange={onChangePage}
      />
    </Stack>
  )
}

export default Paging
