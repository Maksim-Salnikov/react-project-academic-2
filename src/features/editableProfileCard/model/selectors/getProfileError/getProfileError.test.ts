import { getProfileError } from './getProfileError'
import { StateSchema } from '@/app/providers/StoreProvider'

describe('getProfileError', () => {
  test('should return ProfileError value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: '123',
      },
    }
    expect(getProfileError(state as StateSchema)).toEqual('123')
  })

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toEqual(undefined)
  })
})
