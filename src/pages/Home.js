import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import MovieCard from '../organisms/card'
import { useSelector } from 'react-redux'
import Paging from '../organisms/paging'

const Home = () => {
  const movies = useSelector((state) => state.movies.movies)

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {movies.map((movie, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              <Link to={'/Detail/' + movie.id} className="link">
                <MovieCard movie={movie} />
              </Link>
            </Grid>
          )
        })}
      </Grid>
      <Paging />
    </>
  )
}

export default Home
