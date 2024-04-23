import { Story } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice'
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice'
import { AddNewCommentReducer } from 'features/addNewComment/model/slices/addNewCommentSlice'
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice'
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices'
import { ReducersList } from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addNewComment: AddNewCommentReducer,
  articleDetailsPage: articleDetailsPageReducer,
}

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) => {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
  }
