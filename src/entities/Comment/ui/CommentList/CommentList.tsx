import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../CommentCard/CommentCard'
import { Comment } from 'entities/Comment/model/types/comment'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props
  const { t } = useTranslation()

  if (isLoading) {
    return (
      <div className={classNames(cls.commentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    )
  }
  return (
    <div className={classNames(cls.commentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            isLoading={isLoading}
            key={comment.id}
            comment={comment}
            className={cls.comment}
          />
        ))
      ) : (
        <Text text={t('Комментарии отсутствуют')} />
      )}
    </div>
  )
})
