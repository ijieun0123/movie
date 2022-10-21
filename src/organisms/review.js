import * as React from 'react'
import {useState, useEffect} from 'react'
import api from '../axios/api'
import usePage from '../core/usePage'

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

  return <></>
}

export default Review
