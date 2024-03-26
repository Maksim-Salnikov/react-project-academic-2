import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfilePage.module.scss'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DinamicModuleLoader/DynamicModuleLoader'
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

const reducers: ReducersList = { profile: profileReducer }

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage