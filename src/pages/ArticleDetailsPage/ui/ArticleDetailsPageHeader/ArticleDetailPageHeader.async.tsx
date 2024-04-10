import { lazy } from 'react'

export const ArticleDetailPageHeaderAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        resolve(import('./ArticleDetailsPageHeader'))
      }, 400)
    }),
)
