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

const getRecommends = (id, page) => {
  return http.get(
    `/${id}/recommendations?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}`
  )
}

const getReviews = (id, page) => {
  return http.get(
    `/${id}/reviews?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}`
  )
}

const getVideos = id => {
  return http.get(
    `/${id}/videos?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
  )
}

const api = {
  getMovies,
  getDetail,
  getRecommends,
  getReviews,
  getVideos,
}

export default api
