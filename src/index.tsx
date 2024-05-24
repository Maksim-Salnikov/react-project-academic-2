import { createRoot } from 'react-dom/client'
import App from './app/App'
import '@/app/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/ThemeProvider/index'
import '@/shared/config/i18n/i18n'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary/indes'
import { StoreProvider } from '@/app/providers/StoreProvider'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Нет контейнер root')
}

const root = createRoot(container)

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
)
