import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditArticlePage } from './EditArticlePage';

export default {
   title: 'shared/EditArticlePage',
   component: EditArticlePage,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof EditArticlePage>;

const Template: ComponentStory<typeof EditArticlePage> = (args) => <EditArticlePage { ...args } />;

export const Normal = Template.bind({});
Normal.args = {

};
