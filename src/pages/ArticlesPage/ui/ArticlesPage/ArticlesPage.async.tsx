import { lazy } from 'react'

export const ArticlesPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        resolve(import('./ArticlesPage'))
      }, 1500)
    }),
)
