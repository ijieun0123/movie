import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Star from '../atoms/star'
import React, {memo} from 'react'
import { styled } from '@mui/material/styles';

const CustomTableRow = styled(TableRow)({
  borderBottom: '1px solid rgba(224, 224, 224, 1)',
  '&:last-child td, &:last-child th': {border: 0},
}) as typeof TableRow

const CustomTableCell = styled(TableCell)({
  float: 'right',
  border: 'none',
}) as typeof TableCell

interface BasicTableProp {
  rating: number,
  release_date: string,
  genres: [
    { name: [] }
  ],
}

const BasicTable = ({rating, release_date, genres}: BasicTableProp) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableBody>
          <CustomTableRow>
            <TableCell component="th" scope="row">
              Rating
            </TableCell>
            <CustomTableCell>
              <Star rating={rating} size="small" />
            </CustomTableCell>
          </CustomTableRow>

          <CustomTableRow>
            <TableCell component="th" scope="row">
              Release Date
            </TableCell>
            <CustomTableCell>{release_date}</CustomTableCell>
          </CustomTableRow>

          <CustomTableRow>
            <TableCell component="th" scope="row">
              Genres
            </TableCell>
            <CustomTableCell>
              {genres.map(genre => genre.name).join(', ')}
            </CustomTableCell>
          </CustomTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default memo(BasicTable)
