import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetailsData } from 'entities/Article/model/selectors/articeDetails'
import { getAuthUserData } from 'entities/User'

export const getCanEditBtn = createSelector(
  getAuthUserData,
  getArticleDetailsData,
  (user, article) => {
    if (!article || !user) {
      return false
    }
    return user.id === article.user.id
  },
)
