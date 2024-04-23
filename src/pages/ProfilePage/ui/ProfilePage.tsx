import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack/VStack/VStack'
import { EditableProfileCard } from 'features/editableProfileCard'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <Text theme={TextTheme.ERROR} text={t('Ошибка при загрузке профиля')} />
    )
  }
  return (
    <Page>
      <VStack max gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  )
}

export default ProfilePage
