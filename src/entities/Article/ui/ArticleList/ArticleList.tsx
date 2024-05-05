import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleList.module.scss'
import { Article } from '../../model/types/article'
import { ArticleView } from '../../model/consts/consts'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { List, ListRowProps, WindowScroller } from 'react-virtualized'
import { PAGE_ID } from 'widgets/Page/Page'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
  virtualized?: boolean
}

const getSkeletons = (view: ArticleView) => {
  return new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ))
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
    virtualized = true,
  } = props
  const { t } = useTranslation()

  const isBig = view === ArticleView.BIG
  const itemsPerRow = isBig ? 1 : 4
  const rowCount = isBig
    ? articles.length
    : Math.ceil(articles.length / itemsPerRow)

  const rowRenderer = ({ index, isScrolling, key, style }: ListRowProps) => {
    const items = []
    const fromIndex = index * itemsPerRow
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)

    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          article={articles[i]}
          view={view}
          className={cls.card}
          target={target}
          key={'str' + i}
        />,
      )
    }
    return (
      <div key={key} style={style} className={cls.row}>
        {items}
      </div>
    )
  }

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Text size={TextSize.L} title={t('Статьи не найдены')} />
      </div>
    )
  }
  return (
    <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
      {({
        height,
        width,
        registerChild,
        isScrolling,
        onChildScroll,
        scrollTop,
      }) => (
        <div
          // @ts-ignore
          ref={registerChild}
          className={classNames(cls.articleList, {}, [className, cls[view]])}
        >
          {virtualized ? (
            <List
              height={height ?? 700}
              rowCount={rowCount}
              rowHeight={isBig ? 700 : 330}
              rowRenderer={rowRenderer}
              width={width ? width - 80 : 700}
              autoHeight
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
          ) : (
            articles.map((item) => (
              <ArticleListItem
                article={item}
                view={view}
                target={target}
                key={item.id}
                className={cls.card}
              />
            ))
          )}

          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  )
})
