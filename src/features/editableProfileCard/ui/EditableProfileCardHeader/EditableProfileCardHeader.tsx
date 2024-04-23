import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getAuthUserData } from 'entities/User'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { profileActions } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { HStack } from 'shared/ui/Stack'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'

interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation()
    const authData = useSelector(getAuthUserData)
    const profileData = useSelector(getProfileData)
    const canEdit = authData?.id === profileData?.id

    const readonly = useSelector(getProfileReadonly)
    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
      dispatch(profileActions.setReadonly(false))
    }, [dispatch])

    const onCancelEdit = useCallback(() => {
      dispatch(profileActions.cancelEdit())
    }, [dispatch])

    const onSave = useCallback(() => {
      dispatch(updateProfileData())
    }, [dispatch])

    return (
      // eslint-disable-next-line i18next/no-literal-string
      <HStack max justify="between">
        <Text title={t('Профиль')} />
        {canEdit && (
          <>
            {readonly ? (
              <Button theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                {t('Редактировать')}
              </Button>
            ) : (
              <HStack gap="8">
                <Button theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                  {t('Отменить')}
                </Button>
                <Button theme={ButtonTheme.OUTLINE} onClick={onSave}>
                  {t('Сохранить')}
                </Button>
              </HStack>
            )}
          </>
        )}
      </HStack>
    )
  },
)
