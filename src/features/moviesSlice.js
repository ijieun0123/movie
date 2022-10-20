import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  page: 1,
  movies: [],
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    VALUE: (state, action) => {
      state.value = action.payload
    },
    PAGE: (state, action) => {
      state.page = action.payload
    },
    MOVIES: (state, action) => {
      state.movies = action.payload
    },
  },
})

export const { MOVIES, PAGE, VALUE } = moviesSlice.actions
export default moviesSlice.reducer
