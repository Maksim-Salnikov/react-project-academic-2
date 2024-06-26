import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme'
import { AppRouter } from './providers/router'
import { NavBar } from '@/widgets/NavBar'
import { Sidebar } from '@/widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, userActions } from '@/entities/User'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <Sidebar />
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
