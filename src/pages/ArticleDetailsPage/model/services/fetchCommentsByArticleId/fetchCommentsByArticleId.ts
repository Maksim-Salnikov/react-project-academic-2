import i18n from 'i18next'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Comment } from '@/entities/Comment'

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  string | undefined,
  ThunkConfig<string>
>('articleDetails/fetchCommentsByArticleId', async (articleId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  if (!articleId) {
    return rejectWithValue('error')
  }

  try {
    const response = await extra.api.get<Comment[]>('/comments', {
      params: {
        articleId,
        _expand: 'user',
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
