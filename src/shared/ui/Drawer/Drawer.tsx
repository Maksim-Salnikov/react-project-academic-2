import { ReactNode, memo } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Drawer.module.scss'
import { useTheme } from 'app/providers/ThemeProvider'
import { Portal } from '@headlessui/react'
import { Overlay } from '../Overlay/Overlay'
import { useModal } from 'shared/lib/hooks/useModal/useModal'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, isOpen, onClose, lazy } = props
  const { theme } = useTheme()

  const { close, isClosing, isMounting } = useModal({
    animationDelay: 300,
    onClose,
    isOpen,
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  }

  if (lazy || !isMounting) {
    return null
  }

  return (
    <Portal>
      <div
        className={classNames(cls.drawer, mods, [
          className,
          theme,
          'app_drawer',
        ])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  )
})
