import { memo, useCallback } from 'react'
import cls from './ArticleDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from '../../model/slices/articleDetailsCommentsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useAppDispatch/useInitialEffect'
// eslint-disable-next-line max-len
import { fetchCommentsByArticleId } from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddNewComment } from 'features/addNewComment'
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text))
    },
    [dispatch],
  )

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  if (!id) {
    return <div>{t('Статья не найдена')}</div>
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articeDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={t('Комментарии')} className={cls.commentTitle} />
        <AddNewComment onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)