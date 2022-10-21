import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

const Paging = ({page, count, onChangePage}) => {
  return (
    <Stack m={10} spacing={2} justifyContent="center" alignItems="center">
      <Pagination
        count={count > 10 ? 10 : count}
        color="primary"
        page={page}
        onChange={onChangePage}
      />
    </Stack>
  )
}

export default Paging
