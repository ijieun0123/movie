import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MOVIES, VALUE } from '../features/moviesSlice'
import axios from 'axios'
import { Tabs, Tab, Box } from '@material-ui/core'

const Navigation = () => {
  const page = useSelector((state) => state.movies.page)

  const [value, setValue] = useState(0)

  const dispatch = useDispatch()

  const onChangeTabs = (e, newValue) => {
    setValue(newValue)
  }

  const getMovies = async () => {
    const keywordArr = ['now_playing', 'popular', 'top_rated', 'upcoming']
    const keyword = keywordArr[value]
    const url = `https://api.themoviedb.org/3/movie/${keyword}?api_key=${process.env.REACT_APP_MOVIE_API}&page=${page}`

    try {
      const res = await axios.get(url)
      const movies = res.data.results
      console.log(movies)
      dispatch(MOVIES(movies))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getMovies()
  }, [page])

  useEffect(() => {
    console.log(value)
    dispatch(VALUE(value))
  }, [value])

  return (
    <Box
      sx={{
        padding: '30px 0',
      }}
    >
      <Tabs
        value={value}
        onChange={onChangeTabs}
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor="primary"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Now Playing" />
        <Tab label="Populaor" />
        <Tab label="Top Rated" />
        <Tab label="Upcoming" />
      </Tabs>
    </Box>
  )
}

export default Navigation
