import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './NotificationItem.module.scss'
import { Notification } from '../../model/types/notifications'
import { Card, CardTheme } from '@/shared/ui/Card/Card'
import { Text } from '@/shared/ui/Text/Text'

interface NotificationItemProps {
  className?: string
  item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, item } = props

  const content = (
    <Card
      theme={CardTheme.OUTLINED}
      className={classNames(cls.notificationItem, {}, [className])}
    >
      <Text title={item.title} text={item.description} />
    </Card>
  )

  if (item.href) {
    return (
      <a href={item.href} className={cls.link}>
        {content}
      </a>
    )
  }
  return content
})
