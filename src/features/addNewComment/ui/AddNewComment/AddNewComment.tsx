import { FC, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AddNewComment.module.scss'
import { Input } from '@/shared/ui/Input/Input'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import {
  AddNewCommentActions,
  AddNewCommentReducer,
} from '../../model/slices/addNewCommentSlice'
import { useSelector } from 'react-redux'
import { getAddNewCommentText } from '../../model/selectors/addNewCommentSelectors'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { HStack } from '@/shared/ui/Stack'

export interface AddNewCommentProps {
  className?: string
  onSendComment: (text: string) => void
}

const reducers: ReducersList = {
  addNewComment: AddNewCommentReducer,
}

const AddNewComment: FC<AddNewCommentProps> = (props) => {
  const { className, onSendComment } = props
  const { t } = useTranslation()
  const text = useSelector(getAddNewCommentText)
  const dispatch = useAppDispatch()

  const onChangeTextComment = useCallback(
    (value: string) => {
      dispatch(AddNewCommentActions.setText(value))
    },
    [dispatch],
  )

  const onSendHandler = useCallback(() => {
    onSendComment(text || '')
    onChangeTextComment('')
  }, [onChangeTextComment, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack
        justify="between"
        max
        className={classNames(cls.addNewComment, {}, [className])}
      >
        <Input
          value={text}
          onChange={onChangeTextComment}
          placeholder={t('Введите текст комментария')}
          className={cls.input}
        />
        <Button onClick={onSendHandler} theme={ButtonTheme.OUTLINE}>
          {t('Отправить')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  )
}

export default AddNewComment
