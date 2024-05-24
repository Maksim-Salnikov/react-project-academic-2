import { Suspense, memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AddNewComment } from '@/features/addNewComment'
import { CommentList } from '@/entities/Comment'
import { Text, TextSize } from '@/shared/ui/Text/Text'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { addCommentForArticle } from '@/pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle'
import { useInitialEffect } from '@/shared/lib/hooks/useIntitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { useSelector } from 'react-redux'
import { getArticleComments } from '@/pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '@/pages/ArticleDetailsPage/model/selectors/comments'
import { VStack } from '@/shared/ui/Stack'
import { Loader } from '@/shared/ui/Loader/Loader'

interface ArticleDetailsCommentsProps {
  className?: string
  id?: string
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
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

    return (
      <Suspense fallback={<Loader />}>
        <VStack gap="16" max className={classNames('', {}, [className])}>
          <Text size={TextSize.L} title={t('Комментарии')} />
          <AddNewComment onSendComment={onSendComment} />
          <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
      </Suspense>
    )
  },
)
