import * as React from 'react'
import {useState, useEffect} from 'react'
import api from '../axios/api'
import usePage from '../core/usePage'
import ReviewCard from '../molecules/reviewCard'
import {Grid} from '@material-ui/core'
import Paging from '../molecules/paging'

const Review = ({id}) => {
  const [reviews, setReviews] = useState([])
  const [count, setCount] = useState(0)

  const {page, onChangePage} = usePage(null)

  const getReview = () => {
    api
      .getReview(id, page)
      .then(res => {
        console.log(res.data)
        const {results, total_pages} = res.data
        setReviews(results)
        setCount(total_pages)
      })
      .catch(e => {
        console.log(e)
      })
  }

  useEffect(() => {
    getReview()
  }, [page])

  return (
    <>
      <Grid container spacing={2} alignItems="stretch">
        {reviews.map(review => (
          <Grid key={review.id} item xs={12} md={6}>
            <ReviewCard
              author={review.author}
              avatarPath={review.author_details.avatar_path}
              content={review.content}
              updatedAt={review.updated_at}
              rating={review.author_details.rating}
            />
          </Grid>
        ))}
      </Grid>

      <Paging page={page} count={count} onChangePage={onChangePage} />
    </>
  )
}

export default Review
