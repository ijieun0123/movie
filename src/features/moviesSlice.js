import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  movies: [],
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    MOVIES: (state, action) => {
      state.movies = action.payload
    },
  },
})

export const {MOVIES} = moviesSlice.actions
export default moviesSlice.reducer
