import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: ReducersList = { profile: profileReducer }

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation()

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        {t('Profile Page')}
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
