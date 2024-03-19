/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useCallback, useState } from 'react'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi veniam ex
        voluptate illo nisi fugiat quasi dolores quibusdam, est perspiciatis! Ea
        cumque, distinctio consequuntur excepturi nihil asperiores culpa eos
        ratione sint at ad voluptates! Non, cumque cum! Doloremque, laboriosam
        facere hic sunt iusto quaerat animi ducimus ex excepturi minima nobis
        maiores pariatur dolorum neque reprehenderit, saepe, officiis expedita
        exercitationem molestias. Ipsa, laudantium! Ratione aliquid accusamus
        illo, eum necessitatibus magni ad consequuntur aut ipsa, nisi
        voluptates? Quidem blanditiis eos quis fugit quas voluptate rem, veniam
        rerum dolorem quam error tenetur ratione illo iste obcaecati dolor ut
        natus cupiditate dolore! Nulla, ex!
      </Modal>
    </div>
  )
}
