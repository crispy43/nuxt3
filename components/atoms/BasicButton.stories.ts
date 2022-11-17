// Button.stories.ts
import { Meta, StoryFn } from '@storybook/vue3';

import BasicButton from './BasicButton.vue';

export default {
  title: 'BasicButton',
  component: BasicButton,
} as Meta<typeof BasicButton>;

export const Primary: StoryFn<typeof BasicButton> = () => ({
  components: { BasicButton },
  template: '<BasicButton>Click</BasicButton>',
});
