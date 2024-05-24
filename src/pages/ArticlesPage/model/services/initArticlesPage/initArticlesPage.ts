import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { getArticlePageInited } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { SortOrder } from '@/shared/types'
import { ArticleSortField, ArticleType } from '@/entities/Article'

export const initArticlesPage = createAsyncThunk<
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  URLSearchParams,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', (searchParams, thunkApi) => {
  const { dispatch, getState } = thunkApi
  const _inited = getArticlePageInited(getState())

  if (!_inited) {
    const orderFromUrl = searchParams.get('order') as SortOrder
    const sortFromUrl = searchParams.get('sort') as ArticleSortField
    const searchFromUrl = searchParams.get('search')
    const typeFromUrl = searchParams.get('type') as ArticleType

    if (orderFromUrl) {
      dispatch(articlesPageActions.setOrder(orderFromUrl))
    }
    if (sortFromUrl) {
      dispatch(articlesPageActions.setSort(sortFromUrl))
    }
    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl))
    }
    if (typeFromUrl) {
      dispatch(articlesPageActions.setType(typeFromUrl))
    }

    dispatch(articlesPageActions.initState())
    dispatch(fetchArticlesList({}))
  }
})
