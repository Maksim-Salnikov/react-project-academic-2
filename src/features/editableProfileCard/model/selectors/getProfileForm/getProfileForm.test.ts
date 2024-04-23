import { Country } from 'entities/Country'
import { getProfileForm } from './getProfileForm'
import { StateSchema } from 'app/providers/StoreProvider'
import { Currency } from 'entities/Currency'

describe('getProfileForm', () => {
  test('should return ProfileForm value', () => {
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
        form: data,
      },
    }
    expect(getProfileForm(state as StateSchema)).toEqual(data)
  })

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
