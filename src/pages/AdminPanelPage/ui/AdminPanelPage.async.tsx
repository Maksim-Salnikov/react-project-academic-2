import { lazy } from 'react'

export const AdminPanelPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      setTimeout(() => {
        // @ts-ignore
        resolve(import('./AdminPanelPage'))
      }, 1500)
    }),
)
