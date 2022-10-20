import { useState, useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const BasicTable = ({ rating, release_date, genres }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Rating
            </TableCell>
            <TableCell align="right">{rating}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Release Date
            </TableCell>
            <TableCell align="right">{release_date}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              genres
            </TableCell>
            <TableCell align="right">
              {genres.map((genre) => {
                return <div key={genre.name}>{genre.name}</div>
              })}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BasicTable
