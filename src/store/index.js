import { configureStore } from '@reduxjs/toolkit'
import {postsSlice} from '../reducer'
// import { apiSlice } from '../api/apiSlice'
// import postsReducer from './reducer'

export default configureStore({
  reducer: {
    user: postsSlice
  }
})