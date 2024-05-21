import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ListBox } from './ListBox'

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 100 }}>
        <Story />
      </div>
    ),
  ],
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

export const TopLeft = Template.bind({})
TopLeft.args = {
  direction: 'top-left',
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

export const TopRight = Template.bind({})
TopRight.args = {
  direction: 'top-right',
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

export const BottomLeft = Template.bind({})
BottomLeft.args = {
  direction: 'bottom-left',
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

export const BottomRight = Template.bind({})
BottomRight.args = {
  direction: 'bottom-right',
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
