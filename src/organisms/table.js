import { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const BasicTable = ({ rating, release_date, genres }) => {
  const createData = (name, value) => {
    if (name === 'Genres') {
      const genres = value
        .map((el) => {
          return el.name
        })
        .join(', ')
      return { name, genres }
    } else {
      console.log(value)
      return { name, value }
    }
  }

  const rowsArr = [
    createData('Rating', rating),
    createData('Release Date', release_date),
    createData('Genres', genres),
  ]

  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableBody>
          {rowsArr.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">
                {row.genres ? row.genres : row.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable
