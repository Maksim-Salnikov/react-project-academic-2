import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButton } from '../Button/Button'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className])}
    >
      {t('Язык')}
    </Button>
  )
}
