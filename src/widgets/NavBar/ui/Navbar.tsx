/* eslint-disable i18next/no-literal-string */
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { LoginModal } from '@/features/AuthByUsername'
import { useSelector } from 'react-redux'
import { getAuthUserData } from '@/entities/User'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { HStack } from '@/shared/ui/Stack'
import { NotificationButton } from '@/features/NotificationButton'
import { AvatarDropdown } from '@/features/avatarDropdown'

interface NavBarProps {
  className?: string
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  const authData = useSelector(getAuthUserData)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={RoutePath.article_create}
          className={cls.newArticleBtn}
        >
          {t('Создать статью')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <NotificationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    )
  }

  return (
    <header className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  )
})
