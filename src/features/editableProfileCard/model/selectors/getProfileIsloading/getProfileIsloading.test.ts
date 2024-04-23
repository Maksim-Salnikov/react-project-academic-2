import { getProfileIsloading } from './getProfileIsloading'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getProfileIsloading', () => {
  test('should return ProfileIsloading value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    }
    expect(getProfileIsloading(state as StateSchema)).toEqual(true)
  })

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileIsloading(state as StateSchema)).toEqual(undefined)
  })
})
