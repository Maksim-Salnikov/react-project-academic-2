import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ProfileCard } from './ProfileCard'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import avatar from 'shared/assets/tests/avatar.jpg'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  data: {
    username: 'Max',
    age: 52,
    country: Country.Ukraine,
    lastname: 'Salanokv',
    first: 'qwerty',
    city: 'SPB',
    currency: Currency.USD,
    avatar,
  },
}

export const WithError = Template.bind({})
WithError.args = { error: 'true' }

export const Loading = Template.bind({})
Loading.args = { isloading: true }
