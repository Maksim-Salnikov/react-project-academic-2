import { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsData = (state: StateSchema) =>
  state.articleDetails?.data
export const getArticleDetailsIsloading = (state: StateSchema) =>
  state.articleDetails?.isLoading || false
export const getArticleDetailsError = (state: StateSchema) =>
  state.articleDetails?.error
