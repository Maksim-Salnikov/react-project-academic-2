import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'entities/Notifications'
import NotificationIcon from 'shared/assets/icons/Notifications.svg'
import { Popover } from 'shared/ui/Popups'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props

  return (
    <div>
      <Popover
        direction="bottom-left"
        className={classNames(cls.notificationButton, {}, [className])}
        trigger={
          <Button theme={ButtonTheme.CLEAR} className={cls.Button}>
            <Icon Svg={NotificationIcon} inverted />
          </Button>
        }
      >
        <NotificationList className={cls.notifications} />
      </Popover>
    </div>
  )
})
