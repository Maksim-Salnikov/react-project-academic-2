import { StateSchema } from 'app/providers/StoreProvider'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsloading,
} from './articeDetails'

describe('articleDetails', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle',
    }
    const state: DeepPartial<StateSchema> = {
      articleDetails: { data },
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
  })

  test('should return empty data', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    }
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined)
  })

  test('should return isloading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { isLoading: true },
    }
    expect(getArticleDetailsIsloading(state as StateSchema)).toEqual(true)
  })
  test('should return empty isloading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    }
    expect(getArticleDetailsIsloading(state as StateSchema)).toEqual(false)
  })

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: { error: 'error' },
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
  })
  test('should return empty error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {},
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
  })
})
