import i18n from 'i18next'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Article } from 'entities/Article'
import { getArticlePageLimit } from '../../selectors/articlesPageSelectors'

interface FetchArticlesListProps {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  FetchArticlesListProps,
  ThunkConfig<string>
>('articlesPage/fetchArticlesList', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi
  const { page = 1 } = props
  const limit = getArticlePageLimit(getState())

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
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