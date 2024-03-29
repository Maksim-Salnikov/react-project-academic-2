import { lazy } from 'react'

export const ArticleDetailPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        resolve(import('./ArticleDetailsPage'))
      }, 1500)
    }),
)
