import http from './http-common'
import {
  MoviesData,
  DetailData,
  RecommendsData,
  ReviewsData,
  VideosData
} from '../types/data'

const getMovies = async (keyword: string, page: number) => {
  return await http.get<MoviesData>(
    `/${keyword}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}`
  )
}

const getDetail = async (id: any) => {
  return await http.get<DetailData>(
    `/${id}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US`
  )
}

const getRecommends = async (id: any, page: number) => {
  return await http.get<RecommendsData>(
    `/${id}/recommendations?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}`
  )
}

const getReviews = async (id: any, page: number) => {
  return await http.get<ReviewsData>(
    `/${id}/reviews?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&page=${page}`
  )
}

const getVideos = async (id: any) => {
  return await http.get<VideosData>(
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
