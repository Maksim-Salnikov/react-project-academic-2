import { combineReducers } from '@reduxjs/toolkit'
import { ArticleDetailPageSchema } from '../types'
import { articleDetailsrecommendetReducer } from './articleDetailsrecommendetSlice.'
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailPageSchema>({
  recommendations: articleDetailsrecommendetReducer,
  comments: articleDetailsCommentsReducer,
})
