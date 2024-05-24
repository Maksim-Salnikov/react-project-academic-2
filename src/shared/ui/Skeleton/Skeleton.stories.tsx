import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
  title: 'shared/Skeleton',
  component: Skeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
)

export const Normal = Template.bind({})
Normal.args = { width: '100%', height: 200 }

export const NormalDark = Template.bind({})
NormalDark.args = { width: '100%', height: 200 }
NormalDark.decorators = [ThemeDecorator(Theme.DARK)]
