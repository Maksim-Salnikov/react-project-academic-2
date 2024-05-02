import { Page } from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack/VStack/VStack'
import { EditableProfileCard } from 'features/editableProfileCard'
import { useParams } from 'react-router-dom'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>()

  return (
    <Page>
      <VStack max gap="16">
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  )
}

export default ProfilePage
