import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsRecomendationsIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations.isLoading

export const getArticleDetailsRecomendationsError = (state: StateSchema) =>
  state.articleDetailsPage?.recommendations.error
