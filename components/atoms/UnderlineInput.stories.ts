// Button.stories.ts
import { Meta, StoryFn } from '@storybook/vue3';

import UnderlineInput from './UnderlineInput.vue';

export default {
  title: 'UnderlineInput',
  component: UnderlineInput,
} as Meta<typeof UnderlineInput>;

export const Primary: StoryFn<typeof UnderlineInput> = () => ({
  components: { UnderlineInput },
  template: `<UnderlineInput
    :placeholder="'name...'"
  />`,
});
