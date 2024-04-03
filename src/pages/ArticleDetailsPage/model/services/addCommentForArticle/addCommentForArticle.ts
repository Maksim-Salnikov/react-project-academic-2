import i18n from 'i18next'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAuthUserData } from 'entities/User'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Comment } from 'entities/Comment'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articeDetails'
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAsyncThunk<
  Comment,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  string,
  ThunkConfig<string>
>('articleDetails/addCommentForArticle', async (text, thunkApi) => {
  const { dispatch, extra, rejectWithValue, getState } = thunkApi

  const userData = getAuthUserData(getState())
  const article = getArticleDetailsData(getState())

  if (!userData || !text || !article) {
    return rejectWithValue('no data')
  }

  try {
    const response = await extra.api.post<Comment>('/comments', {
      articleId: article.id,
      userId: userData.id,
      text,
    })

    if (!response.data) {
      throw new Error()
    }

    dispatch(fetchCommentsByArticleId(article.id))

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue(i18n.t('Вы ввели неверный username или пароль'))
  }
})
