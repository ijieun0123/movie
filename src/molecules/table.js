import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Star from '../atoms/star'

const TableRowStyle = {
  borderBottom: '1px solid rgba(224, 224, 224, 1)',
  '&:last-child td, &:last-child th': {border: 0},
}

const TableCellStyle = {
  float: 'right',
  border: 'none',
}

const BasicTable = ({rating, release_date, genres}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableBody>
          <TableRow sx={TableRowStyle}>
            <TableCell component="th" scope="row">
              Rating
            </TableCell>
            <TableCell style={TableCellStyle}>
              <Star rating={rating} size="small" />
            </TableCell>
          </TableRow>

          <TableRow sx={TableRowStyle}>
            <TableCell component="th" scope="row">
              Release Date
            </TableCell>
            <TableCell style={TableCellStyle}>{release_date}</TableCell>
          </TableRow>

          <TableRow sx={TableRowStyle}>
            <TableCell component="th" scope="row">
              Genres
            </TableCell>
            <TableCell style={TableCellStyle}>
              {genres.map(genre => genre.name).join(', ')}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable
