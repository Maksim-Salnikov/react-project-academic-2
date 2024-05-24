import { ArticleList } from '@/entities/Article'
import {
  getArticlePageError,
  getArticlePageIsLoading,
  getArticlePageView,
} from '@/pages/ArticlesPage/model/selectors/articlesPageSelectors'
import { getArticles } from '@/pages/ArticlesPage/model/slices/articlePageSlice'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Text, TextTheme } from '@/shared/ui/Text/Text'

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = (props) => {
  const { className } = props
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlePageIsLoading)
  const error = useSelector(getArticlePageError)
  const view = useSelector(getArticlePageView)
  const { t } = useTranslation()

  if (error) {
    return (
      <Text theme={TextTheme.ERROR} text={t('Ошибка при загрузке статей')} />
    )
  }

  return (
    <div className={classNames('', {}, [className])}>
      <ArticleList
        isLoading={isLoading}
        view={view}
        articles={articles}
        className={className}
      />
    </div>
  )
}
