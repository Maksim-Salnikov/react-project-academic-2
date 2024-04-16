import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ListBox } from './ListBox'

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

export const Normal = Template.bind({})
Normal.args = {
  defaultValue: 'Выберите значение',
  onChange: (value: string) => {},
  items: [
    { value: '52', content: '123' },
    { value: '52', content: '123' },
    { value: '52', content: '123', disabled: true },
    { value: '52', content: '123' },
    { value: '52', content: '123' },
  ],
  value: undefined,
}
