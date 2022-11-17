// Button.stories.ts
import { Meta, StoryFn } from '@storybook/vue3';

import BasicInput from './BasicInput.vue';

export default {
  title: 'BasicInput',
  component: BasicInput,
} as Meta<typeof BasicInput>;

export const Primary: StoryFn<typeof BasicInput> = () => ({
  components: { BasicInput },
  template: `<BasicInput
    :placeholder="'name...'"
  />`,
});
