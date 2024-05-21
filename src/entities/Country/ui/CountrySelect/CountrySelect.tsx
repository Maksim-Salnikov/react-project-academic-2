import { Country } from '../../model/types/country'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/Popups'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
]

export const CountrySelect = (props: CountrySelectProps) => {
  const { onChange, value, readonly } = props

  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [])

  return (
    <ListBox
      items={options}
      readonly={readonly}
      defaultValue={t('Укажите страну')}
      label={t('Укажите страну')}
      value={value}
      onChange={onChangeHandler}
      direction="top-right"
    />
  )
}
