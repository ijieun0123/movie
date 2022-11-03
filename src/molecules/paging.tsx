import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import React, {memo} from 'react'

interface PagingProp {
  page: number,
  count: number,
  onChangePage: (e: React.ChangeEvent<unknown>, newValue: number) => void
}

const Paging = ({page, count, onChangePage}: PagingProp) => {
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

export default memo(Paging)
