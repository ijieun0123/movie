import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Grid} from '@material-ui/core'
import MovieCard from '../organisms/movieCard'
import Paging from '../molecules/paging'
import Navigation from '../molecules/navigation'
import api from '../axios/api'
import useNavi from '../core/useNavi'
import usePage from '../core/usePage'
import Skeletons from '../skeletons/movieCard'
import useSkeleton from '../core/useSkeleton'

const Home = () => {
  const [movies, setMovies] = useState<any[]>([])
  const [count, setCount] = useState(0)

  const {value, onChangeTabs} = useNavi()
  const {page, onChangePage} = usePage(value)

  const valueArr = ['now_playing', 'popular', 'top_rated', 'upcoming']

  const getMovies = () => {
    const keyword = valueArr[value]
    api
      .getMovies(keyword, page)
      .then(res => {
        console.log(res.data)
        const {results, total_pages} = res.data
        setCount(total_pages)
        setMovies(results)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const {loading} = useSkeleton(getMovies)

  useEffect(() => {
    getMovies()
  }, [page, value])

  return (
    <>
      <Navigation
        value={value}
        valueArr={valueArr}
        onChangeTabs={onChangeTabs}
      />

      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        {movies.map((movie, i) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
              {loading ? (
                <Skeletons />
              ) : (
                <Link to={'/movie/Detail/' + movie.id} className="link">
                  <MovieCard movie={movie} />
                </Link>
              )}
            </Grid>
          )
        })}
      </Grid>

      <Paging page={page} count={count} onChangePage={onChangePage} />
    </>
  )
}

export default Home
