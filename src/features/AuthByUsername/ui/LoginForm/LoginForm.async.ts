import { FC, lazy } from 'react'
import { LoginFormProps } from './LoginForm'

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  () => import('./LoginForm'),
)
