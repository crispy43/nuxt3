// Button.stories.ts
import { Meta, StoryFn } from '@storybook/vue3';

import BasicTextarea from './BasicTextarea.vue';

export default {
  title: 'BasicTextarea',
  component: BasicTextarea,
} as Meta<typeof BasicTextarea>;

export const Primary: StoryFn<typeof BasicTextarea> = () => ({
  components: { BasicTextarea },
  template: `<BasicTextarea
    :placeholder="'some text...'"
  />`,
});
