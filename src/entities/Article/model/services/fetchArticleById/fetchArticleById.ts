import i18n from 'i18next'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Article } from '../../types/article'

export const fetchArticleById = createAsyncThunk<
  Article,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  string | undefined,
  ThunkConfig<string>
>('article/fetchArticleById', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  if(!articleId) {
    throw new Error('Ошибка при загрузке статей')
  }

  try {
    const response = await extra.api.get<Article>('/articles/' + articleId, {
      params: {
        _expand: 'user',
      },
    })

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue(i18n.t('Вы ввели неверный username или пароль'))
  }
})
