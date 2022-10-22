import * as React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import {Grid} from '@material-ui/core'
import Paging from '../molecules/paging'
import api from '../axios/api'
import usePage from '../core/usePage'
import Star from '../atoms/star'

const Recommend = ({id}) => {
  const [movies, setMovies] = useState([])
  const [count, setCount] = useState(0)

  const {page, onChangePage} = usePage(null)

  const getRecommends = () => {
    api
      .getRecommends(id, page)
      .then(res => {
        console.log(res.data)
        const {results, total_pages} = res.data
        setMovies(results)
        setCount(total_pages)
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    getRecommends()
  }, [page])

  return (
    <>
      <Grid container spacing={1}>
        {movies.map(movie => (
          <Grid key={movie.title} item xs={12} sm={6} md={4} lg={3}>
            <Link to={`/Detail/${movie.id}`} className="link">
              <ImageListItem>
                <img
                  src={
                    movie.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}?w=248&fit=crop&auto=format`
                      : `${process.env.PUBLIC_URL}/img/no_photo.png?w=248&fit=crop&auto=format`
                  }
                  srcSet={
                    movie.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}?w=248&fit=crop&auto=format&dpr=2 2x`
                      : `${process.env.PUBLIC_URL}/img/no_photo.png?w=248&fit=crop&auto=format&dpr=2 2x`
                  }
                  alt={movie.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={movie.title}
                  subtitle={<Star rating={movie.vote_average} size="small" />}
                  position="below"
                />
              </ImageListItem>
            </Link>
          </Grid>
        ))}
      </Grid>

      <Paging page={page} count={count} onChangePage={onChangePage} />
    </>
  )
}

export default Recommend
