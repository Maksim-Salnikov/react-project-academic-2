import { memo, useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotificationButton.module.scss'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Icon } from 'shared/ui/Icon/Icon'
import { NotificationList } from 'entities/Notifications'
import NotificationIcon from 'shared/assets/icons/Notifications.svg'
import { Popover } from 'shared/ui/Popups'
import { Drawer } from 'shared/ui/Drawer/Drawer'
import { isBrowser, isMobile } from 'react-device-detect'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props
  const [isOpen, setIsOpen] = useState(false)
  const onOpenDrawer = useCallback(() => {
    setIsOpen(true)
  }, [])
  const onCloseDrawer = useCallback(() => {
    setIsOpen(false)
  }, [])

  const trigger = (
    <Button
      onClick={onOpenDrawer}
      theme={ButtonTheme.CLEAR}
      className={cls.Button}
    >
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  )

  console.log(isMobile, isBrowser)

  if (isMobile) {
    return (
      <>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </>
    )
  }
  return (
    <Popover
      direction="bottom-left"
      className={classNames(cls.notificationButton, {}, [className])}
      trigger={trigger}
    >
      <NotificationList className={cls.notifications} />
    </Popover>
  )
})
