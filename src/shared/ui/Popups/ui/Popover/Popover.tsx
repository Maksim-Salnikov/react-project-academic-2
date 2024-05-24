import { classNames } from '@/shared/lib/classNames/classNames'
import { Popover as HPopover } from '@headlessui/react'
import cls from './Popover.module.scss'
import { mapDirectionClass } from '../../styles/consts'
import { ReactNode } from 'react'
import { DropDownDirection } from '@/shared/types/ui'
import popupCls from '../../styles/popup.module.scss'

interface PopoverProps {
  className?: string
  trigger: ReactNode
  direction?: DropDownDirection
  children: ReactNode
}

export function Popover(props: PopoverProps) {
  const { className, trigger, direction = 'bottom-right', children } = props

  const menuClasses = [mapDirectionClass[direction]]

  return (
    <HPopover
      className={classNames(cls.Popover, {}, [className, popupCls.popup])}
    >
      <HPopover.Button className={popupCls.trigger}>{trigger}</HPopover.Button>
      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  )
}
