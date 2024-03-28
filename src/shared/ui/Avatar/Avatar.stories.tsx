import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Avatar } from './Avatar'
import AvatarIMG from '../../assets/tests/avatar.jpg'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 150,
  src: AvatarIMG,
}

export const Small = Template.bind({})
Small.args = {
  size: 50,
  src: AvatarIMG,
}
