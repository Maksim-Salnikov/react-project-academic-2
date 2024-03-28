import { Country } from 'entities/Country'
import { getProfileData } from './getProfileData'
import { StateSchema } from 'app/providers/StoreProvider'
import { Currency } from 'entities/Currency'

describe('getProfileData', () => {
  test('should return ProfileData value', () => {
    const data = {
      username: 'Max',
      age: 52,
      country: Country.Ukraine,
      lastname: 'Salanokv',
      first: 'qwerty',
      city: 'SPB',
      currency: Currency.USD,
    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
