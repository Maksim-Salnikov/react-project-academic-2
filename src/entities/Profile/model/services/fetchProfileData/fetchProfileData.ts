import i18n from 'i18next'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<
  Profile,
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  string,
  ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi

  try {
    const response = await extra.api.get<Profile>('/profile/' + profileId)

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue(i18n.t('Вы ввели неверный username или пароль'))
  }
})
