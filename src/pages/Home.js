/*
* Home Page
1. 구성
  - navigation
    => 'now_playing', 'popular', 'top_rated', 'upcoming'
  - movieCard Lists 
    => getMovies API
  - Paging 

2. 주요기능
  - 네비게이션, 페이지 클릭시 movie lists => 스토어에 저장, 화면에 띄우기
*/
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Grid} from '@material-ui/core'
import MovieCard from '../organisms/movieCard'
import {useDispatch, useSelector} from 'react-redux'
import Paging from '../molecules/paging'
import Navigation from '../molecules/navigation'
import {MOVIES} from '../features/moviesSlice'
import api from '../axios/api'
import useNavi from '../core/useNavi'
import usePage from '../core/usePage'

const Home = () => {
  const movies = useSelector(state => state.movies.movies)

  const [count, setCount] = useState(0)

  const {value, onChangeTabs} = useNavi()
  const {page, onChangePage} = usePage(value)

  const valueArr = ['now_playing', 'popular', 'top_rated', 'upcoming']

  const dispatch = useDispatch()

  const getMovies = () => {
    const keyword = valueArr[value]
    api
      .getMovies(keyword, page)
      .then(res => {
        console.log(res.data)
        const {results, total_pages} = res.data
        setCount(total_pages)
        dispatch(MOVIES(results))
      })
      .catch(e => {
        console.log(e)
      })
  }

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
              <Link to={'/movie/Detail/' + movie.id} className="link">
                <MovieCard movie={movie} />
              </Link>
            </Grid>
          )
        })}
      </Grid>

      <Paging page={page} count={count} onChangePage={onChangePage} />
    </>
  )
}

export default Home
