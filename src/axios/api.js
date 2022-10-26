import http from './http-common'

const getMovies = async (keyword, page) => {
  return await http.get(
    `/${keyword}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}`
  )
}

const getDetail = async id => {
  return await http.get(
    `/${id}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
  )
}

const getRecommends = async (id, page) => {
  return await http.get(
    `/${id}/recommendations?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}`
  )
}

const getReviews = async (id, page) => {
  return await http.get(
    `/${id}/reviews?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}`
  )
}

const getVideos = async id => {
  return await http.get(
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
