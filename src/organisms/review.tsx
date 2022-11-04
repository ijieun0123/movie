import {useState, useEffect} from 'react'
import {useAppSelector, useAppDispatch} from '../app/store'
import {useParams} from 'react-router-dom'
import {REVIEW} from '../features/detailSlice'
import api from '../axios/api'
import usePage from '../core/usePage'
import ReviewCard from '../molecules/reviewCard'
import {Grid} from '@material-ui/core'
import Paging from '../molecules/paging'
import useSkeleton from '../core/useSkeleton'
import Skeleton from '../skeletons/review'
import AlertPaper from '../atoms/alertPaper'

const Review = () => {
  const reviews = useAppSelector(state => state.detail.review.results)
  const count = useAppSelector(state => state.detail.review.total_pages)

  const {id} = useParams()
  const dispatch = useAppDispatch()

  const {page, onChangePage} = usePage(null)

  const getReviews = () => {
    api
      .getReviews(id, page)
      .then(res => {
        console.log(res.data)
        const {results, total_pages} = res.data
        dispatch(
          REVIEW({
            results: results,
            total_pages: total_pages,
          })
        )
      })
      .catch(e => {
        console.log(e)
      })
  }

  const {loading} = useSkeleton(getReviews)

  useEffect(() => {
    getReviews()
  }, [page, id])

  return (
    <>
      {reviews.length ? (
        <>
          <Grid container spacing={2}>
            {reviews.map(review => (
              <Grid key={review.id} item xs={12} md={6}>
                {loading ? (
                  <Skeleton />
                ) : (
                  <ReviewCard
                    author={review.author}
                    avatarPath={review.author_details.avatar_path}
                    content={review.content}
                    updatedAt={review.updated_at}
                    rating={review.author_details.rating}
                  />
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

export default Review
