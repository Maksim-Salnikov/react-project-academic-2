import { addNewComment } from './../types/addNewComment'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: addNewComment = {
  text: '',
  error: '',
}

export const AddNewCommentSlice = createSlice({
  name: 'AddNewCommentSlice',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(loginByUsername.pending, (state, action) => {
  //       state.error = undefined
  //       state.isLoading = true
  //     })
  //     .addCase(loginByUsername.fulfilled, (state, action) => {
  //       state.isLoading = false
  //     })
  //     .addCase(loginByUsername.rejected, (state, action) => {
  //       state.isLoading = false
  //       state.error = action.payload
  //     })
  // },
})

// Action creators are generated for each case reducer function
export const { actions: AddNewCommentActions } = AddNewCommentSlice
export const { reducer: AddNewCommentReducer } = AddNewCommentSlice
