import * as React from 'react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {RECOMMEND} from '../features/detailSlice'
import {Link} from 'react-router-dom'
import {Grid} from '@material-ui/core'
import Paging from '../molecules/paging'
import api from '../axios/api'
import usePage from '../core/usePage'
import RecommendItem from '../molecules/recommendItem'
import Skeletons from '../skeletons/recommendItem'
import useSkeleton from '../core/useSkeleton'
import AlertPaper from '../atoms/alertPaper'

const Recommend = () => {
  const movies = useSelector(state => state.detail.recommend.results)
  const count = useSelector(state => state.detail.recommend.total_pages)

  const {id} = useParams()
  const dispatch = useDispatch()

  const {page, onChangePage} = usePage(null)

  const getRecommends = () => {
    api
      .getRecommends(id, page)
      .then(res => {
        console.log(res.data)
        const {results, total_pages} = res.data
        dispatch(
          RECOMMEND({
            results: results,
            total_pages: total_pages,
          })
        )
      })
      .catch(e => {
        console.log(e)
      })
  }

  const {loading} = useSkeleton(getRecommends)

  useEffect(() => {
    getRecommends()
  }, [page])

  return (
    <>
      {movies.length ? (
        <>
          <Grid container spacing={1}>
            {movies.map(movie => (
              <Grid key={movie.title} item xs={12} sm={6} md={4} lg={3}>
                {loading ? (
                  <Skeletons />
                ) : (
                  <Link to={`/movie/Detail/${movie.id}`} className="link">
                    <RecommendItem
                      imgSrc={
                        movie.backdrop_path
                          ? `${process.env.REACT_APP_IMG_URL}${movie.backdrop_path}?w=248&fit=crop&auto=format`
                          : `${process.env.PUBLIC_URL}/img/no_photo.png?w=248&fit=crop&auto=format`
                      }
                      srcSet={
                        movie.backdrop_path
                          ? `${process.env.REACT_APP_IMG_URL}${movie.backdrop_path}?w=248&fit=crop&auto=format&dpr=2 2x`
                          : `${process.env.PUBLIC_URL}/img/no_photo.png?w=248&fit=crop&auto=format&dpr=2 2x`
                      }
                      title={movie.title}
                      rating={movie.vote_average}
                    />
                  </Link>
                )}
              </Grid>
            ))}
          </Grid>

          <Paging page={page} count={count} onChangePage={onChangePage} />
        </>
      ) : (
        <AlertPaper />
      )}
    </>
  )
}

export default Recommend
