import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const { t } = useTranslation()
  const [error, setError] = useState(false)

  const onThrow = () => {
    setError(true)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <button onClick={onThrow}>{t('Выбросить ошибку')}</button>
  )
}
