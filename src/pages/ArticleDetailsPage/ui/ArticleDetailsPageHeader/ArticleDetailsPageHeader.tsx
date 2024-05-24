import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { useSelector } from 'react-redux'
import { getCanEditBtn } from '@/pages/ArticleDetailsPage/model/selectors/editBtn'
import { HStack } from '@/shared/ui/Stack'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

const ArticleDetailsPageHeader = memo(
  (props: ArticleDetailsPageHeaderProps) => {
    const { className } = props
    const { t } = useTranslation()
    const canEditBtn = useSelector(getCanEditBtn)
    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    const onBackToList = useCallback(() => {
      navigate(RoutePath.articles)
    }, [])

    const onEditArticle = useCallback(() => {
      navigate(`${RoutePath.article_details}${id}/edit`)
    }, [])

    return (
      <HStack justify="between" max className={classNames('', {}, [className])}>
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t('Назад к списку')}
        </Button>
        {canEditBtn && (
          <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
            {t('Редактировать')}
          </Button>
        )}
      </HStack>
    )
  },
)

export default ArticleDetailsPageHeader
