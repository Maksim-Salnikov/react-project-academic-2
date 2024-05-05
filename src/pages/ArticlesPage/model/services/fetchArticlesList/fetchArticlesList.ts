import i18n from 'i18next'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import {
  getArticlePageLimit,
  getArticlePageNum,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
} from '../../selectors/articlesPageSelectors'
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams'
import { ArticleType } from 'entities/Article/model/consts/consts'

interface FetchArticlesListProps {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi

  const limit = getArticlePageLimit(getState())
  const page = getArticlePageNum(getState())
  const order = getArticlePageOrder(getState())
  const sort = getArticlePageSort(getState())
  const search = getArticlePageSearch(getState())
  const type = getArticlePageType(getState())

  try {
    addQueryParams({
      sort,
      order,
      search,
      type,
    })
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _order: order,
        _sort: sort,
        q: search,
        type: type === ArticleType.ALL ? undefined : type,
      },
    })

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    return rejectWithValue(i18n.t('Вы ввели неверный username или пароль'))
  }
})
