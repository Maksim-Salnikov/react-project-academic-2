import { ValidateProfileError } from '../../types/editableProfileCardSchema'
import { getProfileValidateErrors } from './getProfileValidateErrors'
import { StateSchema } from 'app/providers/StoreProvider'

describe('getProfileValidateErrors', () => {
  test('should return ProfileValidateErrors value', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateError: [
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.INCORRECT_AGE,
        ],
      },
    }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_AGE,
    ])
  })

  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
