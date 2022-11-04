import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {
  DetailData,
  RecommendsData,
  ReviewsData,
  VideosData
} from '../types/data'

const initialState = {
  detail: {
    backdrop_path: '',
    title: '',
    overview: '',
    vote_average: 0,
    release_date: '',
    genres: [{ name: [] }],
  } as DetailData,
  recommend: {
    results: [{
      id: 0,
      title: '',
      backdrop_path: '',
      vote_average: 0
    }],
    total_pages: 0,
  } as RecommendsData,
  review: {
    results: [{
      id: 0,
      author: '',
      author_details: {
        avatar_path: '',
        rating: 0
      },
      content: '',
      updated_at: '',
    }],
    total_pages: 0,
  } as ReviewsData,
  videos: {
    results: [{
      id: 0,
      key: ''
    }],
  } as VideosData,
} 

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    DETAIL: (state, action: PayloadAction<DetailData>) => {
      state.detail = action.payload
    },
    RECOMMEND: (state, action: PayloadAction<RecommendsData>) => {
      state.recommend = action.payload
    },
    REVIEW: (state, action: PayloadAction<ReviewsData>) => {
      state.review = action.payload
    },
    VIDEO: (state, action: PayloadAction<VideosData>) => {
      state.videos = action.payload
    },
  },
})

export const {DETAIL, RECOMMEND, REVIEW, VIDEO} = detailSlice.actions
export default detailSlice.reducer
