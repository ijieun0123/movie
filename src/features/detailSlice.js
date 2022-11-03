import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  detail: {
    backdrop_path: '',
    title: '',
    overview: '',
    vote_average: 0,
    release_date: '',
    genres: [],
  },
  recommend: {
    results: [],
    total_pages: 0,
  },
  review: {
    results: [],
    total_pages: 0,
  },
  videos: [],
}

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    ID: (state, action) => {
      state.id = action.payload
    },
    DETAIL: (state, action) => {
      state.detail = action.payload
    },
    RECOMMEND: (state, action) => {
      state.recommend = action.payload
    },
    REVIEW: (state, action) => {
      state.review = action.payload
    },
    VIDEO: (state, action) => {
      state.videos = action.payload
    },
  },
})

export const {ID, DETAIL, RECOMMEND, REVIEW, VIDEO} = detailSlice.actions
export default detailSlice.reducer
