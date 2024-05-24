import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import avatar from '@/shared/assets/tests/avatar.jpg'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/app/providers/ThemeProvider'

export default {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => (
  <ProfilePage {...args} />
)

export const Normal = Template.bind({})
Normal.args = {}
Normal.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        username: 'Max',
        age: 52,
        country: Country.Ukraine,
        lastname: 'Salanokv',
        first: 'qwerty',
        city: 'SPB',
        currency: Currency.USD,
        avatar,
      },
    },
  }),
]

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [
  StoreDecorator({
    profile: {
      form: {
        username: 'Max',
        age: 52,
        country: Country.Ukraine,
        lastname: 'Salanokv',
        first: 'qwerty',
        city: 'SPB',
        currency: Currency.USD,
        avatar,
      },
    },
  }),
]
