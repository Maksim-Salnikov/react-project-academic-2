import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'
import React from 'react'

describe('render button', () => {
  test('button', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('button clear theme', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
  })
})
