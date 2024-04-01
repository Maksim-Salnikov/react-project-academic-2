import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <div>{t('Статья не найдена')}</div>
  }

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  )
}

export default memo(ArticleDetailsPage)
