import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi veniam ex
  voluptate illo nisi fugiat quasi dolores quibusdam, est perspiciatis! Ea
  cumque, distinctio consequuntur excepturi nihil asperiores culpa eos
  ratione sint at ad voluptates! Non, cumque cum! Doloremque, laboriosam
  facere hic sunt iusto quaerat animi ducimus ex excepturi minima nobis
  maiores pariatur dolorum neque reprehenderit, saepe, officiis expedita
  exercitationem molestias. Ipsa, laudantium! Ratione aliquid accusamus
  illo, eum necessitatibus magni ad consequuntur aut ipsa, nisi
  voluptates? Quidem blanditiis eos quis fugit quas voluptate rem, veniam
  rerum dolorem quam error tenetur ratione illo iste obcaecati dolor ut
  natus cupiditate dolore! Nulla, ex!`,
}

export const Dark = Template.bind({})
Dark.args = {
  isOpen: true,
  children: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi veniam ex
  voluptate illo nisi fugiat quasi dolores quibusdam, est perspiciatis! Ea
  cumque, distinctio consequuntur excepturi nihil asperiores culpa eos
  ratione sint at ad voluptates! Non, cumque cum! Doloremque, laboriosam
  facere hic sunt iusto quaerat animi ducimus ex excepturi minima nobis
  maiores pariatur dolorum neque reprehenderit, saepe, officiis expedita
  exercitationem molestias. Ipsa, laudantium! Ratione aliquid accusamus
  illo, eum necessitatibus magni ad consequuntur aut ipsa, nisi
  voluptates? Quidem blanditiis eos quis fugit quas voluptate rem, veniam
  rerum dolorem quam error tenetur ratione illo iste obcaecati dolor ut
  natus cupiditate dolore! Nulla, ex!`,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
