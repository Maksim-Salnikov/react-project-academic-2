import { Story } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

export const RouteDecorator = (StoryComponent: Story) => {
  return (
    <BrowserRouter>
      <StoryComponent/>
    </BrowserRouter>
  )
}