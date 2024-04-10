import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './EditArticlePage.module.scss'
import { useParams } from 'react-router-dom'

interface EditArticlePageProps {
  className?: string
}

const EditArticlePage = memo((props: EditArticlePageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
    <div className={classNames(cls.editArticlePage, {}, [className])}>
      {isEdit
        ? t(`Редакитрование статьи с id=${id}`)
        : t('Создать новую статью')}
    </div>
  )
})

export default EditArticlePage
