import http from './http-common'

const getMovies = (keyword, page) => {
  return http.get(
    `/${keyword}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}`
  )
}

const getDetail = id => {
  return http.get(
    `/${id}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
  )
}

const getRecommend = (id, page) => {
  return http.get(
    `/${id}/recommendations?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}`
  )
}

const getReview = (id, page) => {
  return http.get(
    `/${id}/reviews?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}`
  )
}

const api = {
  getMovies,
  getDetail,
  getRecommend,
  getReview,
}

export default api
