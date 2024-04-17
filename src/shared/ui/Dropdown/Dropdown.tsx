import { Menu } from '@headlessui/react'
import cls from './Dropdown.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Fragment, ReactNode } from 'react'
import { DropDownDirection } from 'shared/types/ui'
import { AppLink } from '../AppLink/AppLink'

export interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

export interface DropdownProps {
  className?: string
  items: DropdownItem[]
  trigger: ReactNode
  direction?: DropDownDirection
}

const mapDirectionClass: Record<DropDownDirection, string> = {
  'bottom-left': cls.optionsBottomLeft,
  'bottom-right': cls.optionsBottomRight,
  'top-left': cls.optionsTopLeft,
  'top-right': cls.optionsTopRight,
}

export function Dropdown(props: DropdownProps) {
  const { className, items, trigger, direction = 'bottom-left' } = props
  const menuClasses = [mapDirectionClass[direction]]

  return (
    <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
      <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active }, [])}
            >
              {item.content}
            </button>
          )

          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                key={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            )
          }
          return (
            <Menu.Item as={Fragment} key={item.href} disabled={item.disabled}>
              {content}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}
