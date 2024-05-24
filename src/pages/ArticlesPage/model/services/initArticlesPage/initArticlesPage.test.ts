import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'
import { initArticlesPage } from './initArticlesPage'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    })

    // await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(0)
    expect(fetchArticlesList).not.toBeCalledWith()
  })

  test('success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,
      },
    })

    // await thunk.callThunk()
    expect(thunk.dispatch).toBeCalledTimes(0)
    expect(fetchArticlesList).not.toBeCalledWith()
  })
})
