/* eslint-disable max-len */
import { FC, memo, useCallback } from 'react'
// import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { ArticleList, ArticleViewSelector } from 'entities/Article'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import {
  articlePageReducer,
  articlesPageActions,
  getArticles,
} from '../../model/slices/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useIntitialEffect/useInitialEffect'
import { fetchArticlesList } from '../../model/services/fetchArticlesList'
import { useSelector } from 'react-redux'
import {
  getArticlePageIsLoading,
  getArticlePageNum,
  getArticlePageView,
} from '../../model/selectors/articlesPageSelectors'
import { ArticleView } from 'entities/Article/model/types/article'
import { Page } from 'shared/ui/Page/Page'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props
  //   const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlePageIsLoading)
  const view = useSelector(getArticlePageView)
  const page = useSelector(getArticlePageNum)

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch],
  )

  const onLoadNextPart = useCallback(() => {
    dispatch(articlesPageActions.setPage(page + 1))
    dispatch(
      fetchArticlesList({
        page: page + 1,
      }),
    )
  }, [dispatch, page])

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState())
    dispatch(
      fetchArticlesList({
        page: 1,
      }),
    )
  })
  return (
    // eslint-disable-next-line i18next/no-literal-string
    <DynamicModuleLoader reducers={reducers}>
      <Page
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.articlesPage, {}, [className])}
      >
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
