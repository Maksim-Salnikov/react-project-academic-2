import { MutableRefObject, ReactNode, UIEvent, memo, useRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { uiActions } from 'features/UI'
import { useLocation } from 'react-router-dom'
import { useInitialEffect } from 'shared/lib/hooks/useIntitialEffect/useInitialEffect'
import { useSelector } from 'react-redux'
import { getUIScrollByPath } from 'features/UI/model/selectors/UISelectors'
import { StateSchema } from 'app/providers/StoreProvider'
import { useThrottle } from 'shared/lib/hooks/useThrottle/useThrottle'

interface PageProps {
  className?: string
  children: ReactNode
  onScrollEnd?: () => void
}

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
  const dispatch = useAppDispatch()
  const location = useLocation()
  const setScrollPosition = useSelector((state: StateSchema) =>
    getUIScrollByPath(state, location.pathname),
  )

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  })

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = setScrollPosition
  })

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      uiActions.setScrollPosition({
        position: e.currentTarget.scrollTop,
        path: location.pathname,
      }),
    )
  }, 500)

  return (
    <section
      ref={wrapperRef}
      className={classNames(cls.page, {}, [className])}
      onScroll={onScroll}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  )
})
