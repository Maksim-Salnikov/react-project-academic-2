import { lazy } from 'react'

export const EditArticlePageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        resolve(import('./EditArticlePage'))
      }, 400)
    }),
)
