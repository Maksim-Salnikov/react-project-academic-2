import { Currency } from '../../model/types/currency'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/Popups'
// import { Select } from 'shared/ui/Select/Select'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
]

export const CurrencySelect = (props: CurrencySelectProps) => {
  const { onChange, value, readonly, className } = props

  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency)
  }, [])

  return (
    <ListBox
      readonly={readonly}
      className={className}
      value={value}
      defaultValue={t('Укажите валюту')}
      label={t('Укажите валюту')}
      items={options}
      onChange={onChangeHandler}
      direction="top-right"
    />
  )
}
