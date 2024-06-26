import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs'
import { ArticleType } from '../../model/consts/consts'

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, onChangeType, value } = props
  const { t } = useTranslation()

  const typeTabs = useMemo<TabItem[]>(
    () => [
      { value: ArticleType.ALL, content: t('Все') },
      { value: ArticleType.IT, content: t('Айти') },
      { value: ArticleType.ECONOMICS, content: t('Экономика') },
      { value: ArticleType.SCIENCE, content: t('Наука') },
    ],
    [],
  )

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }, [])

  return (
    <Tabs
      className={classNames('', {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
    />
  )
})
