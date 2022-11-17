// Button.stories.ts
import { Meta, StoryFn } from '@storybook/vue3';

import SqureSwitch from './SqureSwitch.vue';

export default {
  title: 'SqureSwitch',
  component: SqureSwitch,
} as Meta<typeof SqureSwitch>;

export const Primary: StoryFn<typeof SqureSwitch> = () => ({
  components: { SqureSwitch },
  template: '<SqureSwitch :modelValue="true" />',
});

export const Unchecked: StoryFn<typeof SqureSwitch> = () => ({
  components: { SqureSwitch },
  template: '<SqureSwitch :modelValue="false" />',
});
