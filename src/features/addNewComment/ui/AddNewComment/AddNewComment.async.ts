import { FC, lazy } from 'react'
import { AddNewCommentProps } from './AddNewComment'

export const AddNewCommentAsync = lazy<FC<AddNewCommentProps>>(
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  () => import('./AddNewComment'),
)
