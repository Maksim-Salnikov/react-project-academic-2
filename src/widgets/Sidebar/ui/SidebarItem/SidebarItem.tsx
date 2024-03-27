import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SidebarItem.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import { SidebarItemType } from 'widgets/Sidebar/model/items'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getAuthUserData } from 'entities/User'

interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
  const { collapsed, item } = props

  const { t } = useTranslation()
  const isAuth = useSelector(getAuthUserData)

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <div className={classNames(cls.SidebarItem, {}, [])}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
      >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>{t(item.text)}</span>
      </AppLink>
    </div>
  )
})
