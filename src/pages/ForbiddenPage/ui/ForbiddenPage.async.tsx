import { lazy } from 'react'

export const ForbiddenPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        resolve(import('./ForbiddenPage'))
      }, 1500)
    }),
)
