// Button.stories.ts
import { Meta, StoryFn } from '@storybook/vue3';

import RoundSwitch from './RoundSwitch.vue';

export default {
  title: 'RoundSwitch',
  component: RoundSwitch,
} as Meta<typeof RoundSwitch>;

export const Primary: StoryFn<typeof RoundSwitch> = () => ({
  components: { RoundSwitch },
  template: '<RoundSwitch :modelValue="true" />',
});

export const Unchecked: StoryFn<typeof RoundSwitch> = () => ({
  components: { RoundSwitch },
  template: '<RoundSwitch :modelValue="false" />',
});
