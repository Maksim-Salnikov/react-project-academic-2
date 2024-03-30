import { memo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleDetails.module.scss'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById'
import { useSelector } from 'react-redux'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsloading,
} from 'entities/Article/model/selectors/articeDetails'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Skeleton } from 'shared/ui/Skeleton/Skeleton'

interface ArticleDetailsProps {
  id: string
  className?: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsloading)
  const error = useSelector(getArticleDetailsError)
  const data = useSelector(getArticleDetailsData)

  useEffect(() => {
    dispatch(fetchArticleById(id))
  }, [dispatch, id])

  let content

  if (!isLoading) {
    content = (
      <div>
        <Skeleton
          className={cls.avatar}
          width={200}
          height={200}
          border={'50%'}
        />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
        <Skeleton className={cls.skeleton} width={'100%'} height={200} />
      </div>
    )
  } else if (error) {
    content = (
      <Text
        theme={TextTheme.ERROR}
        align={TextAlign.CENTER}
        title={t('Произошла ошибка при загрузке статьи')}
      />
    )
  } else {
    content = <div>ArticleDetails</div>
  }
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
})
