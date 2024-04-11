import { lazy } from 'react'

export const ArticleDetailPageHeaderAsync = lazy(
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  () => import('./ArticleDetailsPageHeader'),
)
