import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Icon.module.scss'

interface IconProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
  inverted?: boolean
}

export const Icon: FC<IconProps> = (props) => {
  const { className, Svg, inverted } = props

  return (
    <Svg
      className={classNames(inverted ? cls.inverted : cls.icon, {}, [
        className,
      ])}
    />
  )
}
