import { getProfileReadonly } from './getProfileReadonly'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getProfileReadonly', () => {
  test('should return ProfileReadonly value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    }
    expect(getProfileReadonly(state as StateSchema)).toEqual(true)
  })

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
  })
})
