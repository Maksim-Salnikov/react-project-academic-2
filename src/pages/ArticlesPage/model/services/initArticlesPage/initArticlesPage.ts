import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlePageInited } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlePageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  void,
  ThunkConfig<string>
>('articlesPage/initArticlesPage', (_, thunkApi) => {
  const { dispatch, getState } = thunkApi
  const _inited = getArticlePageInited(getState())

  if (!_inited) {
    dispatch(articlesPageActions.initState())
    dispatch(
      fetchArticlesList({
        page: 1,
      }),
    )
  }
})
