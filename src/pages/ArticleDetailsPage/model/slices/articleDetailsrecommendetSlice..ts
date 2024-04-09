import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleDetailsRecommendetSchema } from '../types/ArticleDetailsRecommendetSchema'
import { Article } from 'entities/Article'
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations'

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
})

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ||
      recommendationsAdapter.getInitialState(),
  )

const articleDetailsrecommendetSlice = createSlice({
  name: 'articleDetailsrecommendetSlice',
  initialState:
    recommendationsAdapter.getInitialState<ArticleDetailsRecommendetSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(
        fetchArticleRecommendations.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false
          recommendationsAdapter.setAll(state, action.payload)
        },
      )
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { reducer: articleDetailsrecommendetReducer } =
  articleDetailsrecommendetSlice
