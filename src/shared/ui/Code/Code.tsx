import { useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Code.module.scss'
import { Button, ButtonTheme } from '../Button/Button'
import CopyIcon from '@/shared/assets/icons/Copy.svg'

interface CodeProps {
  className?: string
  text: string
}

export const Code = (props: CodeProps) => {
  const { className, text } = props

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button
        onClick={onCopy}
        className={cls.copyBtn}
        theme={ButtonTheme.CLEAR}
      >
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
}
