import {configureStore} from '@reduxjs/toolkit'
import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import moviesSlice from '../features/moviesSlice'
import detailSlice from '../features/detailSlice'

const reducers = combineReducers({
  movies: moviesSlice,
  detail: detailSlice,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  // devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export default store
