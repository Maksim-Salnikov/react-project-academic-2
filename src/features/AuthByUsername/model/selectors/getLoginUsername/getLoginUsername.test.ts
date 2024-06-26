import { StateSchema } from '@/app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername.test', () => {
  test('should return Username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'username123',
      },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual('username123')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
