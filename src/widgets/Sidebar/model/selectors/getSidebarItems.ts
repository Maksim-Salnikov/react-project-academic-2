import { createSelector } from '@reduxjs/toolkit'
import { getAuthUserData } from 'entities/User'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import MainIcon from 'shared/assets/icons/Main.svg'
import AboutIcon from 'shared/assets/icons/About.svg'
import ProfileIcon from 'shared/assets/icons/Profile.svg'
import ArticleIcon from 'shared/assets/icons/Article.svg'
import { SidebarItemType } from '../types/sidebar'

// const getSidebarItems = (state: StateSchema) => {
//   const userAuthId = state.user.authData?.id
//   const userData = state.user.authData
//   const sidebarItemsList: SidebarItemType[] = [
//     { path: RoutePath.main, Icon: MainIcon, text: 'Главная' },
//     { path: RoutePath.about, Icon: AboutIcon, text: 'О сайте' },
//   ]
//   if (userData) {
//     sidebarItemsList.push(
//       {
//         path: RoutePath.profile + userAuthId,
//         Icon: ProfileIcon``,
//         text: 'Профиль',
//         authOnly: true,
//       },
//       {
//         path: RoutePath.articles,
//         Icon: ArticleIcon,
//         text: 'Статьи',
//         authOnly: true,
//       },
//     )
//   }
//   return sidebarItemsList

// }

export const getSidebarItems = createSelector(getAuthUserData, (AuthData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: RoutePath.main,
      Icon: MainIcon,
      text: 'Главная',
    },
    {
      path: RoutePath.about,
      Icon: AboutIcon,
      text: 'О сайте',
    },
  ]

  if (AuthData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + AuthData.id,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true,
      },
    )
  }

  return sidebarItemsList
})
